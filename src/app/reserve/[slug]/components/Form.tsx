import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ReservationProp {
  firstName: string | number | readonly string[] | undefined;
  lastName?: string | number | readonly string[] | undefined;
  phone: string | number | readonly string[] | undefined;
  email: string | number | readonly string[] | undefined;
  occasion?: string | number | readonly string[] | undefined;
  request?: string | number | readonly string[] | undefined;
}

export default function ReservationForm() {
  const router = useRouter();

  const [form, setForm] = useState<ReservationProp>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    occasion: "",
    request: "",
  });

  const onFormChange = (e: any) => {
    e.preventDefault();
    setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async () => {
    console.log("Form changes are : ", form);

    try {
      const response = await axios.post("localhost:3000/api/reservation", form);
      console.log("Response is : ", response);
      router.push("/");
    } catch (error) {
      console.log("Error is : ", error);
    }
  };

  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="First name"
        name="firstName"
        value={form.firstName}
        onChange={onFormChange}
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Last name"
        name="lastName"
        value={form.lastName}
        onChange={onFormChange}
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Phone number"
        name="phone"
        value={form.phone}
        onChange={onFormChange}
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={onFormChange}
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Occasion (optional)"
        name="occasion"
        value={form.occasion}
        onChange={onFormChange}
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Requests (optional)"
        name="request"
        value={form.request}
        onChange={onFormChange}
      />
      <button
        disabled={!form.email && !form.phone && !form.firstName}
        onClick={handleFormSubmit}
        className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300"
      >
        Complete reservation
      </button>
      <p className="mt-4 text-sm">
        By clicking “Complete reservation” you agree to the OpenTable Terms of
        Use and Privacy Policy. Standard text message rates may apply. You may
        opt out of receiving text messages at any time.
      </p>
    </div>
  );
}
