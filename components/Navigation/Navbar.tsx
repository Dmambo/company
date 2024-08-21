"use client";

import { useState } from "react";
import Link from "next/link";
import UpperNav from "./NavComponents/UpperPart";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Image from "next/image";
import Logo from "../logo";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div>
        <UpperNav />
      </div>
      <Separator />
      {/* Main Navigation Bar */}
      <div className="flex justify-between items-center p-4 bg-black text-white relative ">
        <div className="text-red-600 text-2xl md:text-3xl ">
       
          <Logo />

        </div>

        {/* Menu toggle button for mobile */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Links and menu items */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:gap-10 md:items-center md:w-auto flex flex-col md:flex-row absolute md:static top-16 left-0 w-full bg-black md:bg-transparent z-40`}
        >
          <div className="md:hidden my-3"></div>
          <Link
            href="/"
            className="hover:text-green-600 py-8 px-6 md:py-0"
            onClick={closeMenu}
          >
            Home
          </Link>
          
          {/* About Us Dropdown */}
          <Link
            href="/about"
            className="hover:text-green-600 py-8 px-6 md:py-0"
            onClick={closeMenu}
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <Link
            href="/services"
            className="hover:text-green-600 py-8 px-6 md:py-0"
            onClick={closeMenu}
          >
            Services
          </Link>

          {/* Portfolio */}
          <Link
            href="/portfolio"
            className="hover:text-green-600 py-8 px-6 md:py-0"
            onClick={closeMenu}
          >
            Portfolio
          </Link>

    
          <Link
            href="/contact"
            className="hover:text-green-600 py-8 px-6 md:py-0 flex items-center"
            onClick={closeMenu}
          >
            Contact Us
          </Link>

          {/* Call Us Button */}
          <div className="mt-4 md:mt-0 mb-2 flex justify-center items-center p-4">
                        <Button variant={'outline'} className='bg-black border-green-500 text-blue-600'>
                            <Phone className="mr-2 text-blue-600" /> Let&apos;s Talk
                        </Button>
                    </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
