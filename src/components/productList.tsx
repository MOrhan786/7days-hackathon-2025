"use client"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { FuelIcon as GasPump, Users2, Car } from "lucide-react"
import { Button } from "./ui/button"
import { BsHeartFill } from "react-icons/bs"
import Image from "next/image"

import Link from "next/link"
import { Cars, fetchData } from "@/services/sanityApis"

export default function ProductList() {
  const [products, setProducts] = useState<Cars[]>([])
  const [error, setError] = useState<string | null>('')

  useEffect(() => {
    const sanityFetch = async () => {
      try {
        const res = await fetchData()
        setProducts(res)
      } catch {
        setError("Error fetching data")
      }
    }
    sanityFetch()
  }, [])

  if (error !== '') {
    return <div className="text-red-500">{error}</div>
  }

  if (products.length === 0) {
    return <div>No Products available</div>
  }

  if (products.length === 0) {
    return <div>loading...</div>
  }

  return (
    <div className="p-4">
      <h2 className="text-center text-3xl text-slate-800 mt-4 mb-8">Products from API&apos;s Data</h2>
      <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((cars) => {
          return (
            <Card
              key={cars._id}
              className="w-full max-w-[304px] mx-auto h-[488px] flex flex-col justify-between shadow-md transition-transform duration-300 hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between ">
                  {/* {cars._type}<br />
                  {cars.brand} */}
                  {cars.name} 
                  
                  <button className="text-[#ED3F3F]">
                    <BsHeartFill className="w-6 h-6" />
                  </button>
                </CardTitle>
                <CardDescription>{cars.type}</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src={cars.image} alt={cars.type} width={220} height={68} />
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
                <div className="w-full flex items-center justify-between">
                  <p className="text-[15px] font-bold text-[#1A202C] leading-none tracking-tight line-through">
                    {cars.originalPrice ? `${cars.originalPrice}` : "N/A"}
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
                    href={`/carDetail/proId?carId=${cars._id}&carImage=${cars.image}&carPricePerDay=${cars.pricePerDay}&carName=${cars.name}
                     &carTransmission=${cars.transmission}&carType=${cars.type}&carFuel=${cars.fuelCapacity}&carCapacity=${cars.seatingCapacity}&carTags=${cars.tags}`}
                  >
                    <Button className="bg-[#3563e9] p-2 text-white rounded-md">
                      Rent Now
                    </Button>
                  </Link>
                {/* <Button className="bg-[#3563e9] p-2 text-white rounded-md ">
                  Rent Now
                </Button> */}
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}