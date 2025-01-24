import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import Image from 'next/image';


import { Input } from '@/components/ui/input';


function PaymentMethod() {
  return (
   <>
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
   </>
  )
}

export default PaymentMethod;
