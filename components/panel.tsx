"use client";
import React, { useState } from "react";
import { TransitionPanel } from "@/components/ui/transition-panel";
import { Button } from "./ui/button";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";

export function Panel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const ITEMS = [
    {
      title: "Business Websites",
      subtitle: "Crafting Your Digital Identity",
      content:
        "Professional websites designed to enhance your business's online presence, ensuring credibility and engagement with your target audience.",
      features: [
        "Custom, brand-aligned design",
        "Mobile-responsive layouts",
        "SEO-optimized content",
        "Integration with business tools",
        "Fast, secure, and scalable",
      ],
      button: "/services",
    },
    {
      title: "E-Commerce Websites",
      subtitle: "Your Gateway to Online Sales",
      content:
        "User-friendly online stores that convert visitors into customers, with a focus on seamless shopping experiences and secure transactions.",
      features: [
        "Intuitive, clean design",
        "Secure payment integration",
        "Inventory management tools",
        "Customer accounts and order tracking",
        "Scalable and marketing-ready",
      ],
      button: "/services",
    },
    {
      title: "Portfolio Websites",
      subtitle: "Highlighting Your Creativity",
      content:
        "Visually striking portfolios to showcase your work, designed to attract clients and highlight your best projects.",
      features: [
        "Stunning visual layouts",
        "Easy-to-update galleries",
        "SEO-friendly structure",
        "Social media integration",
        "Responsive and accessible design",
      ],
      button: "/services",
    },
  ];

  return (
    <div className="p-6">
      <div className='mb-4 flex space-x-2 '>
        {ITEMS.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`rounded-md px-3 py-1 text-sm font-medium ${
              activeIndex === index
                ? 'bg-green-400 text-red-500 dark:bg-green-800 dark:text-green-100'
                : 'bg-green-100 text-yellow-600 dark:bg-green-700 dark:text-green-400'
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className='overflow-hidden border-t border-zinc-200 dark:border-zinc-700'>
        <TransitionPanel
          activeIndex={activeIndex}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          variants={{
            enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
            center: { opacity: 1, y: 0, filter: 'blur(0px)' },
            exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
          }}
        >
          {ITEMS.map((item, index) => (
            <div key={index} className='py-2'>
              <h3 className='mb-2 font-medium text-green-400 dark:text-zinc-100'>
                {item.subtitle}
              </h3>
              <p className='text-gray-500 dark:text-zinc-400'>{item.content}</p>
              <ul className='mt-2 list-disc list-inside text-gray-400 dark:text-zinc-400'>
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className='hover:text-green-500'>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className='mt-4'>
                <Button
                  variant={"destructive"}
                  className='hover:bg-green-500 hover:text-red-500'
                >
                  <Link
                    href={item.button}
                    className='flex gap-2'
                  >
                    visit
                    <span><MoveUpRight className='w-3 h-3 '/></span>
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </TransitionPanel>
      </div>
    </div>
  );
}
