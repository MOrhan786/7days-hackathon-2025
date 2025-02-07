
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { importCarData } from "@/services/api";



interface Car {
  brand: string;
  transmission: string;
  type: string;
  pricePerDay: number;
  name: string;
  seatingCapacity: string;
  image: string;
  fuelCapacity: string;
  heartImage: string;
}

async function CarsSection() {
  
      const res: Car[] = await client.fetch(
        "*[_type =='car'][]{ name, type, 'image':image.asset->url,'heartImage':heartImage.asset->url, transmission, fuelCapacity, pricePerDay,seatingCapacity}"
      );
      
      if (!res || res.length === 0) {
        importCarData();}
        

  return (
    <>
      {/* First Car Section */}
      <div className="w-full">
        <div className="flex justify-between items-center mb-[20px] px-7">
          <p className="text-[#90A3BF] text-[16px] leading-[20px]">
            Popular Carr
          </p>
          <p className="text-[#3563E9] text-[16px] leading-[20px]">View All</p>
        </div>

        {/* Cars Map */}
        <div className="px-6 py-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {res.slice(8, 12).map((item: Car, index: number) => (
              <div
                className="max-w-[304px] bg-white rounded-lg shadow-md p-[24px]"
                key={index}
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-[20px] leading-5 font-bold text-[#1A202C] font-sans">
                    {item.name}
                  </h2>
                  <Image
                    src={item.heartImage}
                    alt="heart"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="text-sm text-[#90A3BF] mt-2 font-bold">
                  {item.type}
                </p>

                <div className="my-[52px] mx-[16px]">
                  <Image
                    src={item.image}
                    alt="Car"
                    width={232}
                    height={72}
                    className="w-full object-contain"
                  />
                </div>

                <div className="flex justify-between text-gray-500 text-sm gap-1">
                  <div className="flex items-center gap-1">
                    <Image
                      src="/gas-station.png"
                      alt="gas"
                      height={24}
                      width={24}
                    />
                    <span className="text-[#90A3BF]">{item.fuelCapacity}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/Car (1).png"
                      alt="type"
                      height={24}
                      width={24}
                    />
                    <span className="text-[#90A3BF]">{item.transmission}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/profile-2user.png"
                      alt="users"
                      height={24}
                      width={24}
                    />
                    <span className="text-[#90A3BF]">
                      {item.seatingCapacity}
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <p className="text-lg font-semibold text-gray-900">
                    {item.pricePerDay}
                    <span className="text-[18px] font-semibold text-[#90A3BF] ">
                      /day
                    </span>
                  </p>
                  <Link
                    href={`/rent/productdetails?image=${item.image}&name=${item.name}&type=${item.type}&pricePerDay=${item.pricePerDay}&transmission=${item.transmission}&fuelCapacity=${item.fuelCapacity}&seatingCapacity=${item.seatingCapacity}`}
                  >
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Car Section */}
      <div className="flex justify-between items-center mt-[42px] px-7">
        <p className="text-[#90A3BF] text-[16px] leading-[20px]">
          Recommendation Car
        </p>
      </div>
      <div className="py-6 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {res.slice(6,14).map((item: Car, index: number) => (
            <div
              className="max-w-[304px] bg-white rounded-lg shadow-md p-[24px]"
              key={index}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-[20px] leading-5 font-bold text-[#1A202C] font-sans">
                  {item.name}
                </h2>
                <Image
                  src={item.heartImage}
                  alt="heart"
                  width={24}
                  height={24}
                />
              </div>
              <p className="text-sm text-[#90A3BF] mt-2 font-bold">
                {item.type}
              </p>

              <div className="my-[52px] mx-[16px]">
                <Image
                  src={item.image}
                  alt="Car"
                  width={232}
                  height={72}
                  className="w-full object-contain"
                />
              </div>

              <div className="flex justify-between text-gray-500 text-sm gap-1">
                <div className="flex items-center gap-1">
                  <Image
                    src="/gas-station.png"
                    alt="gas"
                    height={24}
                    width={24}
                  />
                  <span className="text-[#90A3BF]">{item.fuelCapacity}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Image src="/Car (1).png" alt="type" height={24} width={24} />
                  <span className="text-[#90A3BF]">{item.transmission}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Image
                    src="/profile-2user.png"
                    alt="users"
                    height={24}
                    width={24}
                  />
                  <span className="text-[#90A3BF]">{item.seatingCapacity}</span>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <p className="text-lg font-semibold text-gray-900">
                  {item.pricePerDay}
                  <span className="text-[18px] text-[#90A3BF] font-semibold">
                    /day
                  </span>
                </p>
                <Link
                  href={`/rent/productdetails?image=${item.image}&name=${item.name}&type=${item.type}&pricePerDay=${item.pricePerDay}&transmission=${item.transmission}&fuelCapacity=${item.fuelCapacity}&seatingCapacity=${item.seatingCapacity}`}
                >
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Rent Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CarsSection;
