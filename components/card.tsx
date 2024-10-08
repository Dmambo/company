"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { Card } from './ui/container-scroll-animation';
import { Button } from "./ui/button";

export function Carrd() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border border-white ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white dark:text-white"
        >
          Web Apps that Make Sense.
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-green-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
         We build modern webapps that meets the current trends.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/sc.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <Button>
          <CardItem
            translateZ={20}
            as={Link}
            href="/contact"
            // target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:text-green-400"
          >
            Contact Us Now →
          </CardItem>
          </Button>
          <Button>
          <CardItem
            translateZ={20}
            as={Link}
            href="/quote"
            
            className="px-4 py-2 rounded-xl  dark:bg-white dark:text-black text-white text-xs font-bold hover:text-green-400"
          >
            Get Quote
          </CardItem>
          </Button>
        </div>
      </CardBody>
    </CardContainer>
  );
}
