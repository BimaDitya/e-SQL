import Link from "next/link";
import Image from "next/image";
import MaterialCard from "/data/material.json";
export default function Card() {
  return (
    <>
      {MaterialCard.map((MaterialCard, index) => (
        <div
          key={index}
          className="w-full flex flex-col p-6 bg-white border border-gray-200 rounded-lg shadow"
        >
          <div className="flex justify-between flex-row">
            <div className="flex flex-col">
              <h6 class="py-2 text-2xl font-bold font-head text-secondary-400">
                {MaterialCard.title}
              </h6>
              <p class="pb-4 font-body text-gray-400 text-justify pr-32">{MaterialCard.descriptions}</p>
              <div className="w-fit font-head px-8 py-4 bg-primary-400 text-white rounded-xl transition ease-in-out hover:bg-primary-200 hover:shadow-md duration-300">
                <Link href={MaterialCard.link}>Pelajari Materi</Link>
              </div>
            </div>
            <Image
              src="illustrations/material.svg"
              alt="Homepage Illustration"
              width={256}
              height={256}
              quality={75}
            />
          </div>
        </div>
      ))}
    </>
  );
}
