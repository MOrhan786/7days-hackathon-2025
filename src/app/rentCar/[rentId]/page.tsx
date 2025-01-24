import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from 'next/image';

import React from 'react'
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

 
 async function RentDetail (
  {searchParams}:{searchParams:
    Promise<
    {
      id:number,
      carImage:string,
      carName:string,
      carPrice:number,
      carCapacity:number,
      carTransmission:string,
      carFuel:number, 
     carType:string
  }>}) {
  
   const {carImage,carName,carPrice,carType} = await searchParams
  
   return (
    <div className="payment w-full bg-[#f6f7f9] p-4 sm:p-6 flex flex-col lg:flex-row gap-6">
        {/* bill sec */}
        <div className="form w-full lg:w-2/3 space-y-7">
         {/* Billing Info */}
         <Card className="w-full lg:w-[852px] h-auto lg:h-[336px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Billing Info</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>Please enter your billing info</h1>
              <h1>Step 1 of 4</h1>
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-6">
            <div className="w-full flex flex-wrap gap-4">
              <div className="name flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="name">
                  Name
                </label>
                <Input
                  placeholder="Your Name"
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                />
              </div>
              <div className="num flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="num">
                  Phone Number
                </label>
                <Input
                  placeholder="Your Phone Number"
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                />
              </div>
            </div>
            <div className="w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="add">
                  Address
                </label>
                <Input
                  placeholder="Your Address"
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                />
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="city">
                  Town/City
                </label>
                <Input
                  placeholder="Your City"
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                />
              </div>
            </div>
          </CardContent>
        </Card>

           
          {/*Rental Summary /info */}
         
          <Card className=" w-full lg:w-[852px] h-auto lg:h-[664px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Rental Info</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>Please select your rental date</h1>
              <h1>Step 2 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
          <div className="first">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-4 h-4 rounded-full bg-[rgba(53,99,233,0.3)] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#3563E9]" />
          </div>
          <span className="text-[16px] font-semibold text-[#1A202C] tracking-[-0.02em]">
            Pick - Up
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <label  className="text-[16px] font-semibold text-[#1A202C] tracking-[-0.02em]">
              Locations
            </label>
            
            <Select>
          
                
              <SelectTrigger className="h-14 bg-[#F6F7F9] border-0 flex items-center justify-between">
              <SelectValue placeholder="Select your city"  />
             
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="new-york">Lahore</SelectItem>
          <SelectItem value="los-angeles">Karachi</SelectItem>
          <SelectItem value="chicago">Islamabad</SelectItem>
       </SelectContent>
       </Select>
          </div>

          <div className="space-y-4">
            <label className="text-[16px] font-semibold text-[#1A202C] tracking-[-0.02em]">
              Date
            </label>
            <Select>
              <SelectTrigger className="h-14 bg-[#F6F7F9] border-0">
                <SelectValue placeholder="Select your date" />
              
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                <SelectItem value="next-week">Next Week</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <label className="text-[16px] font-semibold text-[#1A202C] tracking-[-0.02em]">
              Time
            </label>
            <Select>
              <SelectTrigger className="h-14 bg-[#F6F7F9] border-0">
                <SelectValue placeholder="Select your time" />
              
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning</SelectItem>
                <SelectItem value="afternoon">Afternoon</SelectItem>
                <SelectItem value="evening">Evening</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Drop-Off Section */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-4 h-4 rounded-full bg-[rgba(92,175,252,0.3)] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#54A6FF]" />
          </div>
          <span className="text-[16px] font-semibold text-[#1A202C] tracking-[-0.02em]">
            Drop - Off
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <label className="text-[16px] font-semibold text-[#1A202C] tracking-[-0.02em]">
              Locations
            </label>
            <Select>
              <SelectTrigger className="h-14 bg-[#F6F7F9] border-0">
                <SelectValue placeholder="Select your city" />
              
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new-york">Lahore</SelectItem>
                <SelectItem value="los-angeles">Karachi</SelectItem>
                <SelectItem value="chicago">Queeta</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <label className="text-[16px] font-semibold text-[#1A202C] tracking-[-0.02em]">
              Date
            </label>
            <Select>
              <SelectTrigger className="h-14 bg-[#F6F7F9] border-0">
               <SelectValue placeholder="Select your date" />
                
               
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                <SelectItem value="next-week">Next Week</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <label className="text-[16px] font-semibold text-[#1A202C] tracking-[-0.02em]">
              Time
            </label>
            <Select>
              <SelectTrigger className="h-14 bg-[#F6F7F9] border-0">
                <SelectValue placeholder="Select your time" />
              
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning</SelectItem>
                <SelectItem value="afternoon">Afternoon</SelectItem>
                <SelectItem value="evening">Evening</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      </CardContent>
          </Card>
         {/*Payment Method sec  */}

         <Card className="w-full lg:w-[852px] h-auto lg:h-[596px] flex flex-col justify-around p-6">
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>Please enter your payment method</h1>
              <h1>Step 3 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6 bg-[#f6f7f9] rounded-xl pt-6">
            <div className="first flex justify-between">
              <Image
                src={"/Credit Card.png"}
                alt="Pick Up"
                width={92}
                height={20}
              />
              <Image src={"/Visa.png"} alt="Visa" width={92} height={20} />
            </div>
            <div className="w-full flex flex-wrap gap-4">
              <div className="name flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="name">
                  Card number
                </label>
                <Input
                  placeholder="Card number"
                  className="bg-white px-8 h-[56px] rounded-xl"
                />
              </div>
              <div className="num flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="num">
                  Expration date
                </label>
                <Input
                  placeholder="DD/MM/YY"
                  className="bg-white px-8 h-[56px] rounded-xl"
                />
              </div>
            </div>
            <div className="w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="add">
                  Card Holder
                </label>
                <Input
                  placeholder="Card number"
                  className="bg-white px-8 h-[56px] rounded-xl"
                />
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="city">
                  CVC
                </label>
                <Input
                  placeholder="CVC"
                  className="bg-white px-8 h-[56px] rounded-xl"
                />
              </div>
            </div>
          </CardContent>

          <div className="flex flex-col gap-4">
            {/* PayPal */}
            <label className="flex justify-between items-center gap-3 bg-[#f6f7f9] p-3 rounded-xl shadow cursor-pointer">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  className="h-5 w-5 accent-blue-600 cursor-pointer"
                />
                <span className="text-lg font-medium">PayPal</span>
              </div>
              <Image src={"/PayPal.png"} alt="PayPal" width={100} height={24} />
            </label>

            {/* Credit Card */}
            <label className="flex justify-between items-center gap-3 bg-[#f6f7f9] p-3 rounded-xl shadow cursor-pointer">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="credit-card"
                  className="h-5 w-5 accent-blue-600 cursor-pointer"
                />
                <span className="text-lg font-medium">Bitcoin</span>
              </div>
              <Image
                src={"/Bitcoin.png"}
                alt="Bitcoin"
                width={94}
                height={20}
              />
            </label>
          </div>
        </Card>
             {/* confirmation sec */}
        <Card className="w-full lg:w-[852px] h-auto lg:h-[484px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Confirmation</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>
                We are getting to the end. Just a few clicks and your rental is
                ready
              </h1>
              <h1>Step 4 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              {/* PayPal */}
              <label className="flex items-center gap-3 bg-[#f6f7f9] p-3 rounded-xl shadow cursor-pointer">
                <input
                  type="checkbox"
                  name="payment"
                  value="paypal"
                  className="h-5 w-5 accent-blue-600 cursor-pointer"
                />
                <span className="text-lg font-medium">
                  I agree with sending an Marketing and newsletter emails. No
                  spam, promissed!
                </span>
              </label>

              {/* Credit Card */}
              <label className="flex items-center gap-3 bg-[#f6f7f9] p-3 rounded-xl shadow cursor-pointer">
                <input
                  type="checkbox"
                  name="payment"
                  value="credit-card"
                  className="h-5 w-5 accent-blue-600 cursor-pointer"
                />
                <span className="text-lg font-medium">
                  I agree with our terms and conditions and privacy policy.
                </span>
              </label>
            </div>
            <Link href={`/adminCar/adminId?carImage=${carImage}&carPrice=${carPrice}&carName=${carName}&carType=${carType}`}>
              <button className="bg-[#3563e9] p-2 text-white rounded-xl w-[140px] h-[56px]">
                Rent Now
              </button>
            </Link>

            <div>
              <Image
                src={"/ic-security.png"}
                alt="Safe Data"
                width={32}
                height={32}
                className="mb-3"
              />
              <p className="text-lg font-medium">All your data are safe</p>
              <h1 className="text-sm text-muted-foreground">
                We are using the most advanced security to provide you the best
                experience ever.
              </h1>
            </div>
          </CardContent>
        </Card>
        </div>
          {/* rental summary sec */}
      <div className="rental-summary w-full lg:w-1/3 lg:ml-8">
       
         <Card className="w-full max-w-[492px] mx-auto lg:w-[492px]">
        <CardContent className="p-4 sm:p-6">
          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">Rental Summary</h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Prices may change depending on the length of the rental and the price of your rental car.
            </p>
          </div>

          {/* Car Preview */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">
            <div className="relative h-[108px] w-full sm:w-[132px] overflow-hidden rounded-lg bg-[#3563E9]">
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 gap-0">
                {[...Array(32)].map((_, i) => (
                  <div key={i} className="bg-white/6 " />
                ))}
              </div>
              <Image
                src={carImage}
                alt="Car preview"
                width={132}
                height={108}
                className="absolute left-1/2 sm:left-4 top-1/2 h-9 w-[116px] -translate-x-1/2 sm:-translate-x-0 -translate-y-1/2 transform"
              />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold">{carName}</h3>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 sm:h-5 w-4 sm:w-5 fill-[#FBAD39] text-[#FBAD39]" />
                  ))}
                  <Star className="h-4 sm:h-5 w-4 sm:w-5 text-muted-foreground" />
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground">440+ Reviewer</span>
              </div>
            </div>
          </div>

          <div className="my-6 sm:my-8 border-t border-border" />

          {/* Price Breakdown */}
          <div className="space-y-4">
            <div className="flex justify-between text-sm sm:text-base">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-semibold">{carPrice}</span>
            </div>
            <div className="flex justify-between text-sm sm:text-base">
              <span className="text-muted-foreground">Tax</span>
              <span className="font-semibold">$0</span>
            </div>
          </div>

          {/* Promo Code */}
          <div className="mt-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-0 sm:justify-between rounded-lg bg-muted p-3 sm:p-4">
            <Input 
              type="text"
              placeholder="Enter promo code"
              className="h-9 w-full sm:w-auto bg-transparent border-0 text-sm placeholder:text-muted-foreground focus-visible:ring-0"
            />
            <Button 
              variant="ghost" 
              className="w-full sm:w-auto text-sm font-semibold hover:bg-transparent hover:text-primary"
            >
              Apply now
            </Button>
          </div>

          {/* Total Price */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-4 sm:gap-0">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-lg sm:text-xl font-bold">Total Rental Price</h4>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-[200px] sm:max-w-none">
                Overall price and includes rental discount
              </p>
            </div>
            <span className="text-2xl sm:text-3xl font-bold">{carPrice}</span>
          </div>
        </CardContent>
      </Card>
      </div>



        
   </div>
   )
 }
 
 export default RentDetail;
 