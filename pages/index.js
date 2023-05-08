import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import Homepage from "@/data/home.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>Beranda</title>
        <link rel="icon" href="icons/favicon.ico"></link>
      </Head>
      <Navbar />
      <div className="columns-2 bg-white/50">
        {/* Left Columns */}
        <div className="ml-20 p-0 h-adaptive flex items-center justify-center">
          <div className="z-30 bg-transparent px-12 py-8 backdrop-blur-sm rounded-xl border-2 border-gray-200 shadow-lg">
            <p className="font-body text-gray-400">Selamat Datang di e-SQL</p>
            <p className="font-head font-bold text-secondary-400 py-2 text-4xl">
              Media Pembelajaran <span className="text-primary-400">SQL</span>
            </p>
            {Homepage.map((Homepage, index) => (
              <p key={index} className="font-body text-justify text-slate-400">
                {Homepage.descriptions}
              </p>
            ))}
            <div className="w-fit mt-4 font-head px-8 py-4 bg-primary-400 text-white rounded-xl transition ease-in-out hover:bg-primary-200 hover:shadow-md duration-300">
              <Link href="/material">Belajar Sekarang</Link>
            </div>
          </div>
        </div>

        {/* Right Columns */}
        <div className="mr-16 p-0 h-adaptive flex items-center justify-center">
          <div className="z-30">
            <div className="relative flex transition ease-in-out hover:scale-110 duration-300">
              <div className="z-10">
                <Image
                  src="illustrations/studying.svg"
                  alt="Homepage Illustration"
                  width={400}
                  height={400}
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
