"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation'

const ActiveLink = ({ href, children }) => {
  
  const pathname = usePathname();
  console.log(pathname)
  const isActive = pathname === href;
  const className = isActive ? 'border-b-2 border-blue-500 text-decoration-none  text-black-500' : 'text-decoration-none text-black';

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
};

const Header = () => {
  const router = useRouter()
  return (
    <div className=" flex w-90 justify-items-center mr-20 ml-20 mt-2">
      <div className="flex flex-row flex-wrap gap-2 justify-between items-center container">
        <div className="pt-8 mb-6 cursor-pointer" onClick={()=>router.push("/")}>ACME</div>
        <div className="flex flex-row flex-wrap list-none space-x-12 justify-between items-center font-semibold">
          
          <ActiveLink href="/products">
            Ürünler
          </ActiveLink>
          <ActiveLink href="/stratejiler">
            <>Stratejiler</>
          </ActiveLink>
          <ActiveLink href="/plan">
            <>Plan</>
          </ActiveLink>
          <ActiveLink href="/blog">
            <>Blog</>
          </ActiveLink>
          <ActiveLink href="/destek">
            <>Destek</>
          </ActiveLink>
          
        </div>
        <div className="flex flex-row gap-2 justify-between ml-14 ">
          <button className="h-12 w-20 text-xs bg-white border-2 border-black text-black rounded-lg font-semibold">
            Oturum Aç
          </button>
          <br></br>

          <button className="h-12 w-32 text-xs bg-black text-white rounded-lg font-semibold">
            Ücretsiz Dene
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
