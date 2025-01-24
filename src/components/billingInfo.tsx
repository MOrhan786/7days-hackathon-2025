import React from 'react'
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

function BillingInfo() {
  return (
    <>
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
    </>
  )
}

export default BillingInfo;
