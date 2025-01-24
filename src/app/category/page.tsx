"use client"
import React, { useState } from "react";
import PickUp from "@/components/pickUp";
import SideNavbar from "@/components/sideNavbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FuelIcon as GasPump, Car, Users2 } from "lucide-react";
import { BsHeartFill } from "react-icons/bs";
import { cars2 } from "@/constant/cars";

function CategorySection() {

  const initialVisibleCars = 9; // Number of cars initially visible
  const [visibleCars, setVisibleCars] = useState(initialVisibleCars); // State to track visible cars
  const [showLessEnabled, setShowLessEnabled] = useState(false); // State to track whether "Show Less" button is displayed

  // Function to show more cars
  const showMoreCars = () => {
    setVisibleCars((prev) => prev + 3); // Show 6 more cars
    setShowLessEnabled(true); // Enable "Show Less" button
  };

  // Function to show fewer cars (reset to initialVisibleCars)
  const showLessCars = () => {
    setVisibleCars(initialVisibleCars); // Reset visible cars to the initial amount
    setShowLessEnabled(false); // Disable "Show Less" button
  };

  return (
    <div className="w-full flex">
      {/* Sidebar */}
      <div className="first hidden sm:flex w-[20%]">
        <SideNavbar />
      </div>

      {/* Pick up section */}
      <div className="sec w-full sm:w-[80%] bg-[#f6f7f9] p-4 sm:p-6 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        <section className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between ">
          <PickUp />
        </section>

        {/* Cars Section */}
        <section className="popular w-full flex flex-col gap-4">
          <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Render only the visible cars */}
            {cars2.slice(0, visibleCars).map((car) => (
              <Card
                key={car.id}
                className="w-full max-w-[304px] mx-auto h-[388px] flex flex-col justify-between shadow-md transition-transform duration-300 hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="w-full flex items-center justify-between">
                    {car.name}
                    <button className="text-[#ED3F3F]">
                      <BsHeartFill className="w-6 h-6" />
                    </button>
                  </CardTitle>
                  <CardDescription>{car.type}</CardDescription>
                </CardHeader>
                <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                  <Image
                    src={car.image}
                    alt={car.name}
                    width={220}
                    height={68}
                    className="bg-gradient-to-t from-white to-transparent"
                  />
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
                </CardContent>
                <CardFooter className="w-full flex items-center justify-between">
                  <p className="text-[20px] font-bold text-[#1A202C] leading-none tracking-tight">
                    {car.price}
                    <span className="text-sm font-medium text-gray-500">
                      /day
                    </span>
                  </p>
                  <Link     
                    href={`/carDetail/proId?carId=${car.id}&carImage=${car.image}&carPrice=${car.price}&carName=${car.name}
                     &carTransmission=${car.transmission}&carType=${car.type}&carFuel=${car.fuel}&carCapacity=${car.capacity}`}
                  >
                    <Button className="bg-[#3563e9] p-2 text-white rounded-md">
                      Rent Now
                    </Button>
                  </Link>
                  {/* <Link
                    href={"carDetail"}
                  >
                    <Button className="bg-[#3563e9] p-2 text-white rounded-md">
                      Rent Now
                    </Button>
                  </Link> */}
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Buttons Section */}
          <div className="flex justify-center mt-6 gap-4">
            {/* Show More Button */}
            {visibleCars < cars2.length && (
              <Button
                onClick={showMoreCars}
                className="bg-[#3563E9] hover:bg-[#3563E9]/90 text-white px-5 py-3 rounded"
              >
                Show More Cars
              </Button>
            )}

            {/* Show Less Button */}
            {showLessEnabled && (
              <Button
                onClick={showLessCars}
                className="bg-blue-500 hover:bg-red-500/90 text-white px-5 py-3 rounded"
              >
                Show Less Cars
              </Button>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default CategorySection;
