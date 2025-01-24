import Image from 'next/image';

import React from 'react'
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';


function ConfirmationInfo() {
  return (
   <>
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
            <Link href={"/adminCar"}>
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
   </>
  )
}

export default ConfirmationInfo;
