import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    await prisma.cuisine.create({
      data: { ...req.body },
    });

    res.status(201).json({ message: "Reservation created successfully!" });
  } else {
    res.status(401).json({ error: "Something went wrong!" });
  }
}
