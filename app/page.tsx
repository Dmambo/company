import { Star } from "lucide-react";
import { TextMove } from "@/components/textMove";
import { Carrd } from "@/components/card";
import { ServiceGrid } from "@/components/servicegrid";
import Deck from "@/components/deck";
import Pricing from "@/components/pricing";
import { Testimonial } from "@/components/testimonial";

export default function Home() {
  return (
    <main className=" bg-black text-white p-4 ">
      <div>
        <div className="flex flex-col md:flex-row  justify-between">
          <TextMove />
          <Carrd />
        </div>
        {/* services we provide */}

        <div className="mt-10 md:mt-20 p-8 items-center text-center">
          <div className="">
            <h3 className="text-2xl text-green-300 mb-2 md:text-3xl">
              SERVICES
            </h3>
            <div className="flex justify-center items-center text-center">
              <h1 className="text-4xl md:text-6xl">Exceeding Expectations</h1>
              <span>
                <Star className=" text-green-500" />
              </span>
            </div>
          </div>
          <div className="mt-8">
            <ServiceGrid />
          </div>
        </div>
        {/* OUR PORTFOLIO */}
        <div className="mt-10 md:mt-20 p-8 items-center text-center">
          <div>
            <div className="mb-5">
              <h3 className="text-2xl text-green-300 mb-2 md:text-3xl">
                PORTFOLIO
              </h3>
              <div className="flex flex-col justify-center items-center text-center gap-4">
                <div className="flex">
                  <h1 className=" text-4xl md:text-6xl">Our Latest Work</h1>
                  <span>
                    <Star className=" text-green-500" />
                  </span>
                </div>
              </div>
            </div>
            <div>
              <Deck />
            </div>
          </div>
        </div>
        {/* Pricing */}
        <div className="mt-10 md:mt-20 p-8 items-center text-center">
            <h3 className="text-2xl text-green-300 mb-2 md:text-3xl">
            PRICING
            </h3>
            <div className="flex justify-center items-center text-center">
              <h1 className="text-4xl md:text-6xl">Prices to Elevate you.</h1>
              <span>
                <Star className=" text-green-500" />
              </span>
            </div>
          </div>
        <div className="mt-8">
        <Pricing />
        </div>
        {/* testimonial */}
        <div className="mt-10 md:mt-20 p-8 items-center text-center">
        <h3 className="text-2xl text-green-300 mb-2 md:text-3xl">
            TESTIMONIALS
            </h3>
            <div className="flex justify-center items-center text-center">
              <h1 className="text-4xl md:text-6xl">
                What our clients say
              </h1>
              <span>
                <Star className=" text-green-500" />
              </span>
            </div>
     </div>
     <div className="mt-8">
          <Testimonial />
        </div>
        
      </div>
    </main>
  );
}
