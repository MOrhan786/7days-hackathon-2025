import React from "react";

import { Button } from "@/components/ui/button"
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { cars, cars1 } from "@/constant/cars";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { FuelIcon as GasPump, Car, Users2 } from 'lucide-react'
import Image from "next/image";
import Link from "next/link";


function Cards() {   
  return (

    <>
    
        {/* Header */}
        <div className="first w-full flex justify-between items-center mb-[20px] mt-[20px] ">
          <span className="text-[#90A3BF] font-semibold text-lg sm:text-xl">
            Popular Car
          </span>
          <span className="text-[#3563E9] font-semibold text-[16px] cursor-pointer">
            View All
          </span>
        </div>
        
        {/* Cards Section */}
        <div className="sec  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {cars1.map(( car) => (
            <Card
             key={car.id }
            className="w-full max-w-[304px] mx-auto h-[388px] flex flex-col justify-between  shadow-md transition-transform duration-300 hover:scale-105 ">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
               {car.name}
               <button className="text-[#ED3F3F] ">
                                 <BsHeart className="w-6 h-6" />
                               </button>
              </CardTitle>
              <CardDescription>{car.type}</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={car.image} alt={car.name} width={220} height={68}
               className=" bg-gradient-to-t from-white to-transparent " 
              />
              {/* <Image src={car.spec} alt="" width={256} height={24} /> */}
             {/* start code */}
             <div className="flex flex-row items-start gap-4 sm:gap-[17px] p-6 w-full sm:w-[269px]">
      {/* Gasoline Specification */}
      <div className="flex flex-row items-center gap-2 sm:gap-[8px] w-auto sm:w-[60px]">
        <GasPump className="w-6 h-6 text-[#90A3BF]" />
        <span className="font-['Plus_Jakarta_Sans'] font-medium text-sm leading-[150%] tracking-[-0.02em] text-[#90A3BF] whitespace-nowrap">
         {car.fuel}
        </span>
      </div>

      {/* Car Type Specification */}
      <div className="flex flex-row items-center gap-2 sm:gap-[8px] w-auto sm:w-[84px]">
        <Car className="w-6 h-6 text-[#90A3BF]" />
        <span className="font-['Plus_Jakarta_Sans'] font-medium text-sm leading-[150%] tracking-[-0.02em] text-[#90A3BF] whitespace-nowrap">
         {car.transmission}
        </span>
      </div>

      {/* Capacity Specification */}
      <div className="flex flex-row items-center gap-2 sm:gap-[7px] w-auto sm:w-[91px]">
        <Users2 className="w-6 h-6 text-[#90A3BF]" />
        <span className="font-['Plus_Jakarta_Sans'] font-medium text-sm leading-[150%] tracking-[-0.02em] text-[#90A3BF] whitespace-nowrap">
         {car.capacity}
        </span>
      </div>
    </div>
    {/* end code */}

            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="text-[20px] font-bold text-[#1A202C]  leading-none tracking-tight">
               {car.price}
                <span className="text-sm font-medium text-gray-500">/day</span>
              </p>
              <Link     
                    href={`/carDetail/proId?carId=${car.id}&carImage=${car.image}&carPrice=${car.price}&carName=${car.name}
                     &carTransmission=${car.transmission}&carType=${car.type}&carFuel=${car.fuel}&carCapacity=${car.capacity}`}
                  >
                    <Button className="bg-[#3563e9] p-2 text-white rounded-md">
                      Rent Now
                    </Button>
                  </Link>
            
              {/* <Link href={"/carDetail"}>
                <Button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </Button>
              </Link> */}
           
            </CardFooter>
          </Card>
              
          ))}
        </div>

        {/* 2nd div */}
        <div className="first w-full mb-[20px] mt-[20px]  ">
          <span className="text-[#90A3BF] font-semibold text-lg sm:text-xl">
            Recomendation Car
          </span>
          
        </div>
        
        {/* Cards Section */}
        <div className="sec  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {cars.map(( car) => (
            <Card
             key={car.id }
            className="w-full max-w-[304px] mx-auto h-[388px] flex flex-col justify-between  shadow-md transition-transform duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
               {car.name}
               <button className="text-[#ED3F3F] ">
                                 <BsHeartFill className="w-6 h-6" />
                               </button>
                {/* <Image src={"/heart.png"} alt="" width={24} height={24} /> */}
                
            
              </CardTitle>
              <CardDescription>{car.type}</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4   ">
              <Image src={car.image} alt={car.name} width={220} height={68}
              />
              {/* <Image src={car.spec} alt="" width={256} height={24} /> */}
                {/* start code */}
             <div className="flex flex-row items-start gap-4 sm:gap-[17px] p-6 w-full sm:w-[269px]">
      {/* Gasoline Specification */}
      <div className="flex flex-row items-center gap-2 sm:gap-[8px] w-auto sm:w-[60px]">
        <GasPump className="w-6 h-6 text-[#90A3BF]" />
        <span className="font-['Plus_Jakarta_Sans'] font-medium text-sm leading-[150%] tracking-[-0.02em] text-[#90A3BF] whitespace-nowrap">
         {car.fuel}
        </span>
      </div>

      {/* Car Type Specification */}
      <div className="flex flex-row items-center gap-2 sm:gap-[8px] w-auto sm:w-[84px]">
        <Car className="w-6 h-6 text-[#90A3BF]" />
        <span className="font-['Plus_Jakarta_Sans'] font-medium text-sm leading-[150%] tracking-[-0.02em] text-[#90A3BF] whitespace-nowrap">
         {car.transmission}
        </span>
      </div>

      {/* Capacity Specification */}
      <div className="flex flex-row items-center gap-2 sm:gap-[7px] w-auto sm:w-[91px]">
        <Users2 className="w-6 h-6 text-[#90A3BF]" />
        <span className="font-['Plus_Jakarta_Sans'] font-medium text-sm leading-[150%] tracking-[-0.02em] text-[#90A3BF] whitespace-nowrap">
         {car.capacity}
        </span>
      </div>
    </div>
    {/* end code */}
            
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="text-[20px] font-bold text-[#1A202C] leading-none tracking-tight">
               {car.price}
                <span className="text-sm font-medium text-gray-500">/day</span>
              </p>
              <Link     
                    href={`/carDetail/proId?carId=${car.id}&carImage=${car.image}&carPrice=${car.price}&carName=${car.name}
                     &carTransmission=${car.transmission}&carType=${car.type}&carFuel=${car.fuel}&carCapacity=${car.capacity}`}
                  >
                    <Button className="bg-[#3563e9] p-2 text-white rounded-md">
                      Rent Now
                    </Button>
                  </Link>
             
             
            </CardFooter>
          </Card>
              
          ))}

      
      
      </div>
    </>
  );
}

export default Cards;
