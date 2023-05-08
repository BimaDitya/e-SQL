import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export default async function HandleRegistration(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const hashed = await bcrypt.hash(password, 12);
    try {
      await prisma.account.create({
        data: {
          Email: email,
          Password: hashed,
        },
      });
      return res
        .status(201)
        .send(`Selamat!, Registrasi Email ${email.toUpperCase()} Berhasil`);
    } catch (error) {
      return res
        .status(401)
        .send(
          `Email Terdaftar ${email.toUpperCase()}, Silahkan Digunakan Email Berbeda`
        );
    }
  }
}
