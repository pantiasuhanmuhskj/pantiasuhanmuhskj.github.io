import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      try {
        const count = await prisma.donationCount.findUnique({
          where: { id: "donation_total" },
        });

        res.status(200).json({ count: count?.count || 0 });
      } catch (error) {
        console.error("Gagal mengambil data donasi!", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
      break;
    }

    case "POST": {
      try {
        // 1. Extract data from request body
        const { newCount } = req.body;

        // 2. Validate the data
        if (
          typeof newCount !== "number" ||
          newCount < 0 ||
          !Number.isInteger(newCount)
        ) {
          return res.status(400).json({ error: "Invalid donation count" });
        }

        // 3. Update the count in the database
        const updatedCount = await prisma.donationCount.upsert({
          where: { id: "donation_total" },
          update: { count: newCount },
          create: { id: "donation_total", count: newCount },
        });

        // 4. Send a success resoponse
        res.status(200).json({
          message: "Jumlah donasi telah terupdate",
          count: updatedCount.count,
        });
      } catch (error) {
        console.error("Gagal mengupdate data donasi!", error);
        res.status(500).json({ error: "Gagal update jumlah donasi" });
      }
      break;
    }

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
