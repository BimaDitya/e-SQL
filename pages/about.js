import Head from "next/head";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import About from "@/data/about.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tentang</title>
        <link rel="icon" href="icons/favicon.ico"></link>
      </Head>
      <Navbar />
      <div className="columns-2 bg-white/50">
        {/* Left Columns */}
        <div className="ml-20 h-adaptive flex items-center justify-center">
          <div className="z-30 bg-transparent px-12 py-8 backdrop-blur-sm rounded-xl border-2 border-gray-200 shadow-lg">
            <p className="font-body text-gray-400">Tentang Pengembang</p>
            <p className="font-head font-bold text-secondary-400 py-2 text-4xl">
              Halo, Saya <span className="text-primary-400">Bima!</span>
            </p>
            {About.map((About, index) => (
              <p key={index} className="font-body text-justify text-gray-400">
                {About.descriptions}
              </p>
            ))}
          </div>
        </div>

        {/* Right Columns */}
        <div className="h-adaptive flex items-center justify-center">
          <div className="relative flex transition ease-in-out hover:scale-110 duration-300">
            <div className="z-10">
              <Image
                className="rounded-full"
                src="/photos.png"
                alt="My Photos"
                width={256}
                height={256}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
