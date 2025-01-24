
import SideNavbar from "@/components/sideNavbar";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FuelIcon as GasPump, Car, Users2 } from 'lucide-react'
import { BsHeart, BsHeartFill } from "react-icons/bs";
import {  cars3, cars4 } from "@/constant/cars";

import { Heart, Star } from "lucide-react";
import PostCreator from "@/components/comments";




  async function CarDetail(
     {searchParams}:{searchParams: Promise<
     {
      id:number,
      carImage:string,
      carName:string,
      carPrice:number,
      carCapacity:number,
      carTransmission:string,
      carFuel:number, 
     carType:string,
     
    }>}) 
    {

 const {carImage,carName,carPrice,carCapacity,carTransmission,carType,carFuel} = await searchParams
 
    return (
        <div className="w-full flex">
       {/* side bar div */}
       <div className="first hidden sm:flex w-[25%]">
        <SideNavbar />
      </div>
      {/* 2nd div */}

      <div className="sec w-full sm:w-[75%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
      <section className=" w-full flex flex-col md:flex-row gap-5  items-center justify-around">
          {/* four car img */}
          <div className="first flex flex-col gap-4 w-full  lg:max-w-[470px]  lg:max-h-[508px]">
          
          <div className="bg-[#3563E9] rounded-md p-6 shadow-lg max-w-[492px] w-full ">
            <div  className="flex justify-start flex-col text-start items-start">
              <h1 className= "font-[Plus Jakarta Sans] lg:text-[32px] sm:text-[24px]  font-semibold lg:leading-[48px] sm:leading-8 tracking-[0.03em] sm:tracking-normal text-left  text-white mb-4" >
                Sports car with the best <br/> design and acceleration </h1>
              <p className="text-start text-white mb-4">
              Safety and comfort while driving a <br/>futuristic and elegant sports car 
              </p>
             <div className=" mt-[32px] ">
              
              <Image src={carImage} alt="carImage" width={492} height={360} />
               </div>
               </div>

          </div>
          
          
          
            {/* <div className="flex justify-center overflow-hidden">
              <Image src={"/View.png"} alt="" width={492} height={360} />
            </div> */}
            <div className=" flex items-center justify-between gap-2 lg:gap-2 sm:justify-center ">
              
            
            
            <Image src={carImage} alt="car-blue-img" width={148} height={124} 
               className="bg-[#3563E9] rounded-lg  lg:w-[164px] lg:h-[124px] md:w-[80px] md:h-[62px] sm:w-[80px] sm:h-[62px] object-contain " />
             
       
              
              <Image src={"/View 2 .png"} alt="car-view-2img" width={148} height={124} />
              <Image src={"/View 3.png"} alt="car-view-3img" width={148} height={124} />
            </div>
          </div>
          {/* second div  rent button */}
          {/* <div className="flex flex-col w-full  lg:max-w-[492px] h-auto lg:max-h-[508px] bg-white justify-between rounded-xl shadow-md"> */}
         {/* Nissan GT-R div */}
          <div className="w-full max-w-[492px] bg-white rounded-[10px] p-6 shadow-sm">
          
          {/* Header with Title and Heart */}
      <div className="flex justify-between items-start mb-8">
        <div className="space-y-2">
          <h2 className="text-[32px] font-bold text-[#1A202C] leading-[150%] tracking-[-0.03em]">
           {carName}
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FBAD39] text-[#FBAD39]" />
              ))}
              <Star className="w-5 h-5 text-[#90A3BF]" />
            </div>
            <span className="text-sm text-[#596780] tracking-[0.02em]">
              440+ Reviewer
            </span>
          </div>
        </div>

        <button className= "text-[#ED3F3F]" >
          <Heart className= "w-6 h-6 fill-current" />
        </button>

      </div>

      {/* Description */}
      <p className="text-[#596780] text-xl leading-[200%] tracking-[-0.02em] mb-8">
  NISMO has become the embodiment of Nissan&apos;s outstanding performance, inspired by the most
  unforgiving proving ground, the &quot;race track&quot;.
</p>


      {/* Specifications Grid */}
      <div className="grid grid-cols-2 gap-11 mb-8">
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-[#90A3BF] text-xl">Type Car</span>
            <span className="text-[#596780] text-xl font-semibold">{carType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#90A3BF] text-xl">Steering</span>
            <span className="text-[#596780] text-xl font-semibold">{carTransmission}</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-[#90A3BF] text-xl">Capacity</span>
            <span className="text-[#596780] text-xl font-semibold">{carCapacity}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#90A3BF] text-xl">Gasoline</span>
            <span className="text-[#596780] text-xl font-semibold">{carFuel}</span>
          </div>
        </div>
      </div>

      {/* Price and Action */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[28px] font-bold text-[#1A202C]">
            {carPrice}<span className="text-xl font-normal">/days</span>
          </p>
          <p className="text-base font-bold text-[#90A3BF] line-through">
            $100.00
          </p>
        </div>
        <Link href={`/rentCar/rentId?carImage=${carImage}&carName=${carName}&carPrice=${carPrice}
                     &carCapacity=${carCapacity}`}>
                <Button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </Button>
                </Link>
      </div>
            </div>
         

          </section>
             {/* review sec */}
             <section className=" w-full flex items-center justify-">
              <div className="w-full max-w-5xl p-6 bg-white mt-[-20px] rounded-[10px]">
             <PostCreator blog_id={0}/>
             {/* <Reviews /> */}
             </div>
                </section>

                {/* car sec */}
            
        <section className="popular w-full flex flex-col gap-5">
        <div className="first w-full flex justify-between items-center mb-[20px] mt-[20px] ">
          <span className="text-[#90A3BF] font-semibold text-lg sm:text-xl">
            Popular Car
          </span>
          <span className="text-[#3563E9] font-semibold text-[16px] cursor-pointer">
            View All
          </span>
        </div>
        
        {/* Cards Section */}
        <div className="sec  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {cars3.map (( car) => (
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
              {/* add to cart button */}

              {/* <Button className="bg-[#3563e9] p-2 text-white rounded-md" >
                  Rent Now
                </Button> */}

              <Link href={`/rentCar/rentId?carImage=${car.image}&carPrice=${car.price}&carName=${car.name}
                     &carTransmission=${car.transmission}&carType=${car.type}`}>
                <Button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </Button>
              </Link>
            </CardFooter>
          </Card>
              
          ))}
        </div>

        {/* recomendation car div */}
        <div className="first w-full flex justify-between items-center mb-[20px] mt-[20px] ">
          <span className="text-[#90A3BF] font-semibold text-lg sm:text-xl">
            Recomendation Car
          </span>
          <span className="text-[#3563E9] font-semibold text-[16px] cursor-pointer">
            View All
          </span>
        </div>
        
        {/* Cards Section */}
        <div className="sec  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {cars4.map (( car) => (
            <Card
             key={car.id }
            className="w-full max-w-[304px] mx-auto h-[388px] flex flex-col justify-between  shadow-md transition-transform duration-300 hover:scale-105 ">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
               {car.name}
               <button className="text-[#ED3F3F] ">
                  <BsHeartFill className="w-6 h-6" />
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
              <Link href={`/rentCar/rentId?carImage=${car.image}&carPrice=${car.price}&carName=${car.name}
                     &carTransmission=${car.transmission}&carType=${car.type}`}>
                <Button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </Button>
              </Link>
            </CardFooter>
          </Card>
              
          ))}
        </div>

        </section>
          

     
        </div>
  </div>
    )
}
    export default  CarDetail;