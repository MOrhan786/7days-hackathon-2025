// src\app\page.tsx
"use client";
import CardsCar from "@/components/cardsCar";
import PickUp from "@/components/pickUp";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProductCards from "./products/page";



export default function Home() {


  useEffect(() => {
    const sections = document.querySelectorAll(
      "#block1, #block2, #block3, #block4, #block5"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only add the animate class when the element is in view
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    ); // 10% visibility

    sections.forEach((section) => observer.observe(section));

    // Cleanup the observer when the component unmounts
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
 <>
  <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
      {/* Section 1 - Ads with buttons */}

      <section
        id="block1"
        className="w-full flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 justify-center items-center"
      >
        <div className="relative flex flex-col items-center ">
          <Image
            src={"/Ads 1.png"}
            alt="Ad 1"
            width={600}
            height={360}
            className="max-w-full"
          />
          
        </div>

        <div className="relative  items-center sm:flex hidden lg:inline-flex">
          <Image
            src={"/Ads 2.png"}
           
            alt="Ad 2"
            width={600}
            height={360}
            className="max-w-full"
          />
      
        </div>

      </section>
      
      {/* Section 2 - Ads with buttons */}

      <section
        id="block2"
        className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-8"
      >
       <PickUp/>
      
      </section>
      
      {/* Section 3 - Ads with buttons */}
      <section id="block3" className="popular w-full flex flex-col gap-4">
      <CardsCar/>
      </section>
      
          {/* api data fetch her cards */}
        {/* Section 4 - Ads with buttons */}
        <section id="block3" className="popular w-full flex flex-col gap-4">
        <ProductCards/>
      
      </section>
     


          
       {/* button */}
       <section
          id="block5"
          className="button  w-ful lg:w-full md:w-50% sm:w-20% h-[50px] lg:pl-[650px] lg:pr-[40px] md:pl-[200px] md:pr-[20px] sm:pl-0 sm:0%   "
        >
          <div className="flex items-center justify-between  mt-2">
            <div>
              <Link href={"/category"}>
                <Button className="bg-[#3563E9] hover:bg-blue-950 text-white  rounded ">
                  Show more car
                </Button>
              </Link>
            </div>

            <div className="font-medium text-[12px]leading-6 w-[250px]h-[full]   text-[#90A3BF] ">
              120 Car
            </div>
          </div>
        </section>
  </div>
 </>
  );
}
