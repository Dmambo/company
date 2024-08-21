"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonial() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "This service is absolutely fantastic! From the initial consultation to the final delivery, everything was handled professionally. Highly recommended for anyone looking for top-notch service.",
    name: "Jane Smith",
    title: "Fantastic Service Co.",
  },
  {
    quote:
      "I had an incredible experience working with this team. They were responsive, attentive to details, and delivered exceptional results. I wouldn't hesitate to use their services again.",
    name: "Emily Davis",
    title: "Smith & Associates",
  },
  {
    quote: "The quality of work exceeded my expectations. The team was proactive, and the end product was exactly what I was looking for. Outstanding service!",
    name: "Michael Brown",
    title: "Johnson Innovations",
  },
  {
    quote:
      "Exceptional service and support throughout the project. The team was dedicated and truly invested in delivering a great product. Highly satisfied!",
    name: "Jane Austen",
    title: "Davis Enterprises",
  },
  {
    quote:
      "Professional and efficient from start to finish. The attention to detail and commitment to quality are evident in the final result. I highly recommend them for any project.",
    name: "Herman Melville",
    title: "Brown Solutions Inc.",
  },
];
