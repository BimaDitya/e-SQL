import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "../components/navbar";
import { RegistrationForm } from "@/components/registration";

export default function Registration() {
  return (
    <>
      <Head>
        <title>Registrasi</title>
        <link rel="icon" href="icons/favicon.ico"></link>
      </Head>
      <Navbar />
      <div className="h-adaptive bg-white/50 flex flex-row justify-center items-center">
        <div className="flex w-4/5 flex-row justify-between bg-transparent backdrop-blur-sm border-2 border-gray-100 rounded-2xl px-6 py-2 shadow-xl">
          <div className="w-3/5 p-4 flex flex-col justify-center">
            <p className="text-2xl mb-4 font-head font-bold text-primary-400">
              Registration Form
            </p>
            {/* Register Form*/}
            <RegistrationForm />
            <div className="font-body text-sm font-medium text-secondary-400 pt-4">
              Sudah Memiliki Akun?{" "}
              <Link href="/login" className="text-primary-400 font-bold hover:text-primary-200">
                Login
              </Link>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <Image
              src="illustrations/registration.svg"
              width={320}
              height={320}
              quality={100}
              alt="Registration Illustration"
            />
          </div>
        </div>
      </div>
    </>
  );
}
