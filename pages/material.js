import Head from "next/head";
import Card from "@/components/card";
import { Navbar } from "@/components/navbar";

export default function Material() {
  return (
    <>
      <Head>
        <title>Materi</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <Navbar />
      <div className="flex flex-row px-32">
        <div className="items-start h-full flex w-full justify-center">
          <div className="z-30 w-full m-10 p-4 rounded-xl backdrop-blur-sm bg-transparent space-y-6 border-2 border-gray-200">
            <p className="text-xl font-head font-semibold text-secondary-400 text-center">
              Daftar Materi
            </p>
            <Card/>
          </div>
        </div>
      </div>
    </>
  );
}
