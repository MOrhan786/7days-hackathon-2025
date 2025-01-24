"use client";
import React, { useEffect, useState } from "react";

 import sanityClient from "@sanity/client"


import Image from "next/image";
import { FuelIcon as GasPump, Car, Users2 } from "lucide-react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BsHeartFill } from "react-icons/bs";

import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { SanityClient } from "sanity";

const sanity = sanityClient ({
  projectId: "km9jklk4",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: true,
});

interface Cars {
  _id: string;
  name: string;
  type: string;
  capacity: number;
  transmission: string;
  fuelCapacity: string;
  imageUrl: string;
  seatingCapacity: number;
  originalPrice: number;
  pricePerDay: number; 
  productImage: {
    asset: {
      _ref: string;
    };
  };
  tags: string[];
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Cars[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `
       *[_type == 'car' ][ ]
      {
      name,
       _id,
        fuelCapacity,
         transmission,
        seatingCapacity,
        originalPrice,
         pricePerDay,
           type,
           tags,
           "imageUrl": image.asset->url,
           
           }
          `;
      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error Fetching Products:", error);
    }
  };
  
  


  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className=" p-4">
      <h2 className="text-center text-3xl text-slate-800 mt-4 mb-8">Products from API&apos;s Data </h2>
    <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
     
      {products.map((cars) => (
        <Card
          key={cars._id}
          className="w-full max-w-[304px] mx-auto h-[488px] flex flex-col justify-between shadow-md transition-transform duration-300 hover:scale-105"
        >
          <CardHeader>
            <CardTitle className="w-full flex items-center justify-between">
              {cars.name}
              <button className="text-[#ED3F3F]">
                <BsHeartFill className="w-6 h-6" />
              </button>
            </CardTitle>
            <CardDescription>{cars.type}</CardDescription>
          </CardHeader>
          <CardContent className="w-full flex flex-col items-center justify-center gap-4">
            <Image src={cars.imageUrl} alt={cars.name} width={220} height={68} />
            <div className="flex flex-row items-start gap-4 sm:gap-[17px] p-6 w-full sm:w-[269px]">
              {/* Gasoline Specification */}
              <div className="flex flex-row items-center gap-2 sm:gap-[8px] w-auto sm:w-[60px]">
                <GasPump className="w-6 h-6 text-[#90A3BF]" />
                <span className="font-['Plus_Jakarta_Sans'] font-medium text-sm leading-[150%] tracking-[-0.02em] text-[#90A3BF] whitespace-nowrap">
                  {cars.fuelCapacity}
                </span>
              </div>

              {/* Car Type Specification */}
              <div className="flex flex-row items-center gap-2 sm:gap-[8px] w-auto sm:w-[84px]">
                <Car className="w-6 h-6 text-[#90A3BF]" />
                <span className="font-['Plus_Jakarta_Sans'] font-medium text-sm leading-[150%] tracking-[-0.02em] text-[#90A3BF] whitespace-nowrap">
                  {cars.transmission}
                </span>
              </div>
             
              {/* Capacity Specification */}
              <div className="flex flex-row items-center gap-2 sm:gap-[7px] w-auto sm:w-[91px]">
                <Users2 className="w-6 h-6 text-[#90A3BF]" />
                <span className="font-['Plus_Jakarta_Sans'] font-medium text-sm leading-[150%] tracking-[-0.02em] text-[#90A3BF] whitespace-nowrap">
                  {cars.seatingCapacity}
                </span>
              </div>
              </div>
              {/*  */}
              <div className=" w-full flex items-center justify-between  ">
                
             
              <p className="text-[15px] font-bold text-[#1A202C] leading-none tracking-tight line-through">
             {cars.originalPrice ?  `${cars.originalPrice}` : "N/A"}
              </p>
            
            <p className="text-[20px] font-bold text-[#1A202C] leading-none tracking-tight">
              {cars.pricePerDay}
              
            </p>
            </div>
          </CardContent>
          <CardFooter className="w-full flex items-center justify-between">
          <p className="text-[20px] font-bold text-[#1A202C] leading-none tracking-tight">
              {cars.tags}
              
            </p>
            <Link     
                    href={`/carDetail/proId?carsId=${cars._id}&carsImageUrl=${cars.imageUrl}&carspricePerDay=${cars.pricePerDay}&carsName=${cars.name}
                     &carsTransmission=${cars.transmission}&carType=${cars.type}&carsfuelCapacity${cars.fuelCapacity}&carsseatingCapacity=${cars.seatingCapacity}`}
                  >
                    <Button className="bg-[#3563e9] p-2 text-white rounded-md">
                      Rent Now
                    </Button>
                  </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
    </div>
  );
};

export default ProductCards;
