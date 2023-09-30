import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { reservationName } = req.body
    await prisma.cuisine.create({
      data: { name: reservationName },
    });

    res.status(201).json({ message: "Reservation created successfully!" });
  } else {
    res.status(401).json({ error: "Something went wrong!" });
  }
}
