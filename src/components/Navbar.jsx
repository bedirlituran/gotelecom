"use client";
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div className="w-full h-screen  bg-black overflow-hidden">
        <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-lg">
          <div className="flex-1 flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl text-white font-bold font-serif"><span className='text-red-500'>Go</span> Telecom</h1>
          </div>
          <label
            onClick={toggleMenu}
            htmlFor="menu-toggle"
            className="pointer-cursor md:hidden block"
          >
            <svg
              className="fill-current text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } md:flex md:items-center md:w-auto w-full z-10`}
            id="menu"
          >
            <nav>
              <ul className="md:flex items-center justify-between text-sm md:text-lg text-gray-100 pt-4 md:pt-0">
                <li>
                  <a
                    className="md:p-4 py-3 px-0 block text-rose-500 hover:text-rose-500"
                    href="#"
                  >
                    Ana Səhifə
                  </a>
                </li>
                <li>
                  <a
                    className="md:p-4 py-3 px-0 block hover:text-rose-500"
                    href="/Haqqimizda"
                  >
                    Haqqımızda
                  </a>
                </li>
                <li>
                  <a
                    className="md:p-4 py-3 px-0 block hover:text-rose-500"
                    href="/ChannelList"
                  >
                    Tv Kanallar
                  </a>
                </li>
                <li>
                  <a
                    className="md:p-4 py-3 px-0 block hover:text-rose-500"
                    href="/Elaqe"
                  >
                    Əlaqə
                  </a>
                </li>
                <li>
                  <a
                    className="md:p-2 mr-1 py-1 px-1 text-center block hover:text-rose-500 md:mb-0 mb-2 border border-white rounded-lg"
                    href="https://fpay.az/guest/payments/new-payment/category/4950/merchant/5286"
                  >
                    <button className="text-center text-sm md:text-lg">Ödəniş et</button>
                  </a>
                </li>

                <li>
                  <a
                    className="md:p-2 py-1 px-1 text-center block hover:text-rose-500 md:mb-0 mb-2 border border-white rounded-lg"
                    href="tel:+994123100101"
                  >
                    <button className="text-center text-sm md:text-lg">Zəng et</button>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="absolute   sm:block md:top-20 sm:top-[8%] xs:top-[10%] xxl:top-4 xxl:left-[30%] lg:left-[35%] md:right-[20%] sm:left-[18%] xs:left-[10%]">
          <img
            className="xxl:h-[600px] xxl:h-[500px] xl:h-[400px] md:h-[350px] sm:h-[300px]"
            src="https://techakim.com/sam/tg/7268/li/imgs/2.png"
            alt="Go Telecom Image"
          />
        </div>

        <div className="lg:px-16 xs:px-4  px-8 pb-4 h-full flex xs:flex-col sm:flex-row sm:items-center xs:mt-10 sm:mt-0 text-white">
          {/* <!-- col -1  --> */}
          <div className="w-full flex flex-col z-10">
            <h4 className="text-xl font-bold text-white xl:text-lg">Xoş Gəlmisiniz</h4>
            <h1 className="xl:text-4xl sm:text-4xl xs:text-3xl text-2xl font-semibold font-serif mt-2">
              Biz <span className="">Go Telecom</span>uq
            </h1>
            <h4 className="text-rose-500 mt-4 lg:text-lg">--Sürətli və Etibarlı İnternet və TV</h4>

            <p className="lg:w-[70%] xs:w-full text-white text-md mt-4 xl:text-sm">
              Müştərilərimizə ən yüksək keyfiyyətdə internet və TV xidmətləri təqdim edirik. İllərlə təcrübəyə əsaslanan texnoloji həllərimiz və müasir infrastrukturumuzla ölkənin hər yerində sürətli və sabit internet təmin edirik.
            </p>

            <div>
              <button className="mt-6 px-6 py-1 bg-rose-500 text-base text-white rounded-lg shadow-2xl lg:text-base">
                Ətraflı Məlumat
              </button>
            </div>
          </div>

          {/* <!-- col-2 --> */}
          <div className="w-full flex-col sm:flex-col xs:justify-center xs:mt-4 sm:mt-0 sm:gap-8 xs:gap-2 xs:bg-gray-700/60 sm:bg-transparent p-4 rounded-lg z-10">
            <div className="flex flex-col sm:items-end xs:items-center">
              <div className="inline-flex gap-1 items-center">
                <h2 className="xl:text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-2xl font-semibold">10</h2>
                <h2 className="text-rose-500 xl:text-6xl md:text-5xl sm:text-4xl xs:text-3xl font-extrabold">+</h2>
              </div>
              <h4 className="xs:text-xs sm:text-base xl:text-lg xs:text-center">İllərin təcrübəsi</h4>
            </div>
            <div className="flex flex-col sm:items-end xs:items-center">
              <div className="inline-flex gap-1 items-center">
                <h2 className="xl:text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-2xl font-semibold">200</h2>
                <h2 className="text-rose-500 xl:text-6xl md:text-5xl sm:text-4xl xs:text-3xl font-extrabold">+</h2>
              </div>
              <h4 className="xs:text-xs sm:text-base xl:text-lg xs:text-center">Kanal seçimləri</h4>
            </div>
            <div className="flex flex-col sm:items-end xs:items-center">
              <div className="inline-flex gap-1 items-center">
                <h2 className="xl:text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-2xl font-semibold">50K</h2>
                <h2 className="text-rose-500 xl:text-6xl md:text-5xl sm:text-4xl xs:text-3xl font-extrabold">+</h2>
              </div>
              <h4 className="xs:text-xs sm:text-base xl:text-lg xs:text-center">Müştəri məmnuniyyəti</h4>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
