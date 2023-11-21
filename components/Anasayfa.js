import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import image1 from "../public/1.svg";
import image2 from "../public/2.svg";
import image3 from "../public/3.svg";
import image4 from "../public/4.svg";

const Anasayfa = () => {
  return (
    <div className='h-[100vh] container'>
    <section className="grid grid-cols-1 lg:grid-cols-3 py-10 gap-10">
      <div
        className="content p-4 relative lg:col-span-2 flex flex-col gap-4"
      >
        <h1 className=" leading-snug xl:leading-normal  text-[2.5rem]  md:text-[3rem]  lg:text-[3.8rem] font-bold">
          İşinizi Güçlendirecek <br /> Videolar
        </h1>
        <h1 className="leading-snug  text-[2.5rem]  md:text-[3rem]  lg:text-[3.8rem] font-bold text-[#5B44F3]">
          Artık İnteraktif
        </h1>
        <p className="text-base md:text-lg  xl:text-xl">
          Acme ile hedeflediğiniz kitleye videolar aracılığıyla ulaşın. Tek
          hamlede binlerce kullanıcıdan zahmetsizce bilgi alın. Maliyetlerinizi
          azaltın, müşteri memnuniyetini ve satışlarınızı artırın.
        </p>

        <p className="text-base md:text-lg  xl:text-xl">
          Anlatan, seçenek sunan, bilgi toplayan videolarla çevrimiçi iletişimin
          yeni seviyesine adım atın.
        </p>
        <button className='bg-blue-300 p-1 rounded font-bold w-fit'>Hemen Deneyin</button>
        <Image
          className="absolute bottom-0 right-0"
          src={image2}
          width={40}
          height={40}
          alt="top-corner"
        />
        <Image
          className="absolute top-0 left-0"
          src={image3}
          width={40}
          height={40}
          alt="top-corner"
        />
        <Image
          src={image1}
          width={50}
          height={50}
          objectFit="contain"
          alt="circle-yellow"
          className="hidden absolute sm:block top-10 right-10 lg:right-[unset]  lg:top-40 lg:left-[-25px] xl:top-[11rem]  xl:left-[-28px]  3xl:left-[-42px]"
        />
      </div>
      <div
        className="flex items-center justify-center lg:justify-end"
      >
        <Image
          src={image4}
          alt="acme-phone-banner"
          className="w-full  md:w-auto md:h-auto "
          unoptimized
          objectFit="cover"
          placeholder="blur"
          blurDataURL="@/assets/4.svg"
        />
      </div>
    </section></div>
  );
}

export default Anasayfa