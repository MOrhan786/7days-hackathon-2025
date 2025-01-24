//  src\components\header.tsx
import React from "react";
import Image from "next/image";


export default function Header() {
  return (
    <div className="h-auto  w-full flex flex-wrap items-center justify-between px-4 py-4 bg-white">
      {/* Logo */}
      <div className="w-[120px] h-[40px] flex-shrink-0">
        <Image
          src="/Logo .png"
          alt="Logo"
          width={120}
          height={40}
          className=" object-contain ml-4"
        />
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 w-full max-w-[492px] h-[44px] border bg-slate-100 rounded-full px-3 mt-4 ml-1 md:mt-0 md:flex-1 md:mr-8">
        <Image
          src="/search-normal.png"
          alt="Search"
          width={20}
          height={20}
       
        />
        <input
          type="text"
          placeholder="Search something here"
          className="flex-1 bg-transparent border-none outline-none text-sm px-2 w-[492px] h-[44px]"
        />
        <Image src="/filter.png" 
        alt="Filter"
        width={20}
        height={20}
         />
      </div>

      {/* Profile Icons */}
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <a href="#">
          <Image src="/Like.png"
           alt="Like"
           width={36}
            height={36}
            />
        </a>
        <a href="#">
          <Image
            src="/Notification.png"
            alt="Notification"
            width={36}
            height={36}
      
         
           
          />
        </a>
        <a href="#">
          <Image
            src="/Settings.png"
            alt="Settings"
            width={36}
            height={36}
          
          />
        </a>
        <a href="#">
          <Image
            src="/profile.png"
            alt="profile"
            width={44}
            height={44}
            className=" rounded-full"
          />
        </a>
      </div>
    </div>
  );
}
