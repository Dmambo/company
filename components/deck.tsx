import Image from "next/image";
import Link from "next/link";
import React from "react";

const Data = [
  {
    images: "/savanegems.png",
    desc: "Explore a curated collection of ethically sourced gemstones from Africa, offering timeless beauty and exceptional quality.",
    click: (
      <Link href="https://savanegems.com/">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
          Visit us
        </button>
      </Link>
    ),
  },
  {
    images: "/Manhou.png",
    desc: "Your trusted partner in international trade, specializing in the import and export of goods across diverse industries.",
    click: (
      <Link href="https://manhouimportexport.netlify.app/">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
          Visit us
        </button>
      </Link>
    ),
  },
  {
    images: "/epy.png",
    desc: "EPY is a platform that simplifies communication and organization between teachers and students, with tools for managing courses and tracking assignments.",
    click: (
      <Link href="https://epyapp.netlify.app//">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
          Visit us
        </button>
      </Link>
    ),
  },
  {
    images: "/portfolio.png",
    desc: "EPY is a platform that simplifies communication and organization between teachers and students, with tools for managing courses and tracking assignments.",
    click: (
      <Link href="https://ibrahim-y2st.onrender.com/">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
          Visit us
        </button>
      </Link>
    ),
  },
];

export default function Deck() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-4">
      {Data.map((data, index) => (
        <div
          key={index}
          className="w-full bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <Image
            className="w-full h-40 object-cover rounded-t-lg"
            alt="Card Image"
            src={data.images}
            width={320}
            height={160}
            layout="responsive"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Beautiful Card</h2>
            <p className="text-gray-600">{data.desc}</p>
            <div className="flex justify-between items-center mt-4">
              {data.click}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
