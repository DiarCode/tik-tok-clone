// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../utils/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const candidate = req.body;
    client
      .createIfNotExists(candidate)
      .then(() => res.status(200).json("Login success"));
  }
}
