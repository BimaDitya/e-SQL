import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function HandleLogin(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { email, password } = req.body;

  // Check Account
  const accounts = await prisma.account.findUnique({
    where: {
      Email: email,
    },
  });
  if (!accounts) return res.status(401).end("Email Tidak Terdaftar");

  // Verify Password
  const verify = await bcrypt.compare(password, accounts.Password);
  if (!verify) return res.status(401).end("Kata Sandi Salah");

  const token = jwt.sign(
    {
      id: accounts.Id,
      email: accounts.Email,
    },
    "19050974042",
    {
      expiresIn: "1d",
    }
  );

  res.status(200);
  res.json({
    Message: "Login Berhasil",
    Token: "Bearer " + token,
  });
}
