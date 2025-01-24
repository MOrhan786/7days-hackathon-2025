// src\components\footer.tsx
import Link from "next/link"

export default function Footer() {
  return (
  

    <footer className="w-full bg-white py-16 px-4 mt-[172px] ">
      <div className="container mx-auto max-w-7xl  ">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12  mr-[60px] ml-[60px] ">
          {/* Logo and Description */}
          <div className="lg:col-span-4">
            <Link href="/" className="text-3xl font-bold tracking-tight text-[#3563E9]">
              MORENT
            </Link>
            <p className="mt-4 text-base text-gray-600">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>

          {/* About Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-xl font-semibold text-gray-900">About</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Featured
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Partnership
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Business Relation
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-gray-900">Community</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Invite a friend
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-gray-900">Socials</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8  mx-[60px] ">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <p className="text-base font-semibold text-gray-900">©2022 MORENT. All rights reserved</p>
            <div className="flex gap-8">
              <Link href="#" className="text-base font-semibold text-gray-900 hover:text-gray-700">
                Privacy & Policy
              </Link>
              <Link href="#" className="text-base font-semibold text-gray-900 hover:text-gray-700">
                Terms & Condition
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

