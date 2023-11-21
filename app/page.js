"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react';
import "./globals.css"
import Header from '@/components/Header';
import Link from 'next/link';
import Anasayfa from '@/components/Anasayfa';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
 

  return (
    <div className="">
   <Anasayfa/>
    </div>
  );
}
