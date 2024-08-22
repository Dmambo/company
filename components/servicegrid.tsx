import React from "react";
import { Laptop } from "lucide-react";
import Link from "next/link";

// Example data array
const items = [
  {
    title: "WEBSITE CREATION",
    description: [
      "Modern, responsive website design.",
      "Sleek and functional interfaces.",
      "Great user experience on all devices.",
    ],
    icon: <Laptop />,
  },
  {
    title: "LOCAL SEO",
    description: [
      "Boost visibility in local searches.",
      "Optimize content for higher rankings.",
      "Drive more local traffic and customers.",
    ],
    icon: <Laptop />,
  },
  {
    title: "SITE MAINTENANCE",
    description: [
      "Up-to-date, secure, and functional.",
      "Includes updates, patches, and backups.",
      "Optimized performance for smooth operation.",
    ],
    icon: <Laptop />,
  },
  {
    title: "SUPPORT",
    description: [
      "Reliable technical support available.",
      "Assistance with troubleshooting and issues.",
      "Ensures uninterrupted website operation.",
    ],
    icon: <Laptop />,
  },
];

export function ServiceGrid() {
  return (
    <div className="relative grid grid-cols-1 gap-4 p-4 max-w-6xl mx-auto sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative flex flex-col gap-4 p-4 rounded-lg overflow-hidden bg-[#0f1d2b] bg-gradient-to-br from-[#0f1d2b] via-[#007623] to-[#474f2d] shadow-card transition-transform duration-300 hover:shadow-xl"
        >
          <div className="absolute inset-0 z-[-10] rounded-lg bg-gradient-to-t from-white via-gray-300 to-transparent transform -translate-x-1 -translate-y-1"></div>
          <div className="relative z-10 transition-transform duration-300 transform hover:scale-105">
            <div className="text-white text-lg font-semibold  p-2 inline-block rounded-lg">
              {item.title}
            </div>
            <ul className="flex flex-col gap-2 mt-1">
              {item.description.map((desc, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-gray-200 text-sm"
                >
                  <span className="flex items-center justify-center w-4 h-4 bg-teal-600 rounded-full">
                    <svg
                      className="w-3 h-3 text-black"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
            <Link 
            href="/services"
            >
            <button className=" text-sm mt-4 py-2 px-4 text-white bg-gradient-to-br from-teal-500 to-teal-700 rounded-full shadow-lg transition-colors duration-300 hover:from-teal-600 hover:to-teal-800">
              Learn More
            </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
