import CarStats from '@/components/carStats';
// import MapCar from '@/components/mapCar';
import { SideBar } from '@/components/sideBar';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import React from 'react'
import Image from 'next/image';

async function AdminCar(
  {searchParams}:{searchParams:
    Promise<{
      id:number,
      carImage:string,
      carName:string,
      carPrice:number,
      carCapacity:number,
      carTransmission:string,
      carFuel:number, 
      carType:string
    }>})
     {
  
    const {carImage,carName,carPrice,carType} = await searchParams
    
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="hidden lg:block">
         <SideBar/>
      </div>

        {/* Main Content */}
          {/* map car div */}
        <div className=" flex-1 p-4 lg:p-8">
         <Card className=" bg-[#FFFFFF] w-auto max-w-[524px] h-[836px] col-span-2 row-span-3 rounded-[10px] ">
              <CardHeader className="pb-0">
                <CardTitle className="text-[20px] font-bold text-[#1A202C]">Details Rental</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Map Section */}
              
                   
               <Image src="/Maps.svg" alt="maps-img" width={486} height={272} className='mt-[24px] px-[24px] mb-[32px] rounded-[10px] ' />
        
                {/* Car Details */}
                <div className="flex items-start gap-4">
                  <div className="w-[132px] h-[72px] bg-[#3563E9] rounded-lg relative overflow-hidden">
                    <Image 
                      src={carImage}
                      alt="Car thumbnail"
                      width={132}
                      height={108}
                      className="object-cover mt-[18px] "
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1A202C]">{carName}</h3>

                    <p className="text-sm text-[#3D5278]">{carType}</p>
                   <div className='flex gap-2 items-center w-[34px] ml-[200px] mt-[-45px]  '>
                    <span className="font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[21px] tracking-[-0.02em] text-[#3D5278]  ">#9761</span>
                    </div>
                  </div>
                  
                </div>
        
                {/* Pick-up Section */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 rounded-full bg-[rgba(53,99,233,0.3)] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#3563E9]" />
                    </div>
                    <span className="font-semibold text-[#1A202C]">Pick - Up</span>
                  </div>
        
                  <div className="grid grid-cols-3 gap-2">
                    <div className="space-y-2">
                      <label className="font-bold text-[#1A202C]">Locations</label>
                      <Select defaultValue="semarang">
                        <SelectTrigger className="w-full text-[#90A3BF]">
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="semarang">Kota Semarang</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
        
                    <div className="space-y-2">
                      <label className="font-bold text-[#1A202C]">Date</label>
                      <Select defaultValue="20july">
                        <SelectTrigger className="w-full text-[#90A3BF]">
                          <SelectValue placeholder="Select date" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="20july">20 July 2022</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
        
                    <div className="space-y-2">
                      <label className="font-bold text-[#1A202C]">Time</label>
                      <Select defaultValue="07">
                        <SelectTrigger className="w-full text-[#90A3BF] ">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="07">07.00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
        
                {/* Drop-off Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[rgba(92,175,252,0.3)] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#54A6FF]" />
                    </div>
                    <span className="font-semibold text-[#1A202C]">Drop - Off</span>
                  </div>
        
                  <div className="grid grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="font-bold text-[#1A202C]">Locations</label>
                      <Select defaultValue="semarang">
                        <SelectTrigger className="w-full text-[#90A3BF] ">
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="semarang">Kota Semarang</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
        
                    <div className="space-y-2">
                      <label className="font-bold text-[#1A202C]">Date</label>
                      <Select defaultValue="21july">
                        <SelectTrigger className="w-full text-[#90A3BF]">
                          <SelectValue placeholder="Select date" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="21july">21 July 2022</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
        
                    <div className="space-y-2">
                      <label className="font-bold text-[#1A202C]">Time</label>
                      <Select defaultValue="01">
                        <SelectTrigger className="w-full text-[#90A3BF]">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="01">01.00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
        
                <div className="border-t border-[#C3D4E9]/40 pt-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold text-[#1A202C]">Total Rental Price</h4>
                      <p className="text-sm text-[#90A3BF]">Overall price and includes rental discount</p>
                    </div>
                    <span className="text-3xl font-bold text-[#1A202C]">{carPrice}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
         </div>



          {/* car details  in one div two section*/}
          <div className="flex-1 p-4 lg:p-8 space-y-4">
           <CarStats/>
        {/* Recent Transactions */}
        <div className="bg-white   p-4 lg:p-6  rounded-lg shadow-lg">
        
              <h2 className="font-semibold text-lg lg:text-xl mb-4 flex justify-between">
                Recent Transaction{" "}
                <span className="text-blue-500 text-xs lg:text-sm cursor-pointer">
                  View All
                </span>
              </h2>
              <ul className="space-y-3 lg:space-y-4">
                {[
                  {
                    name: "Nissan GT - R",
                    tag: "Sport Car",
                    date: "20 July",
                    price: "$80.00",
                    img: "/Car2.png",
                  },
                  {
                    name: "Koenigsegg",
                    tag: "Sport Car",
                    date: "19 July",
                    price: "$99.00",
                    img: "/Car1.png",
                  },
                  {
                    name: "Rolls - Royce",
                    tag: "Sport Car",
                    date: "18 July",
                    price: "$96.00",
                    img: "/Car3.svg",
                  },
                  {
                    name: "CR - V",
                    tag: "SUV",
                    date: "17 July",
                    price: "$80.00",
                    img: "/Car4.svg",
                  },
                ].map((car, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src={car.img}
                        alt={car.name}
                        width={50}
                        height={30}
                        className="rounded-md"
                      />
                      <div className="text-sm lg:text-lg">
                        <h3 className="font-bold">{car.name}</h3>
                        <p className="text-gray-500 text-xs lg:text-sm">
                          {car.tag}
                        </p>
                      </div>
                    </div>
                    <div className="text-right text-xs lg:text-sm">
                      <p className="text-gray-500">{car.date}</p>
                      <span className="font-bold text-gray-800">
                        {car.price}
                      </span>
                    </div>
                  </li>
                ))}
              </ul> 
            </div>
           </div>
   
    




      </div>
    
  )
}

export default   AdminCar;

