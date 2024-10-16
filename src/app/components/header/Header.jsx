import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="w-full shadow-sm">
      <div className="container flex justify-between items-center py-4 ">
        <Link href="/">
          <Image src={logo} alt="logo" width={200} height={200} />
        </Link>

        <ul className="flex items-center gap-8 text-lg font-medium">
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/contact">Conact</Link>
          </li>
        </ul>

        <ul className="flex items-center gap-6">
          <li>
            <Link href="/login">
              <FaRegUser className="text-lg" />
            </Link>
          </li>
          <li>
            <button>
              <IoSearch className="text-xl" />
            </button>
          </li>
          <li>
            <button>
              <IoMdHeartEmpty className="text-xl" />
            </button>
          </li>
          <li>
            <button>
              <IoCartOutline className="text-xl" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
