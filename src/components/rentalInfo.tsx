import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"



function RentalInfo() {
  return (
   <>
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

   </>
  )
}

export default RentalInfo;
