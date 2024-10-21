"use client"
import React from 'react';

const Futures = () => {
  return (
    <div className="px-6 md:px-20 py-10 bg-opacity-10">
      {/* Başlık Bölümü */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">GO telecom  Öz Servis <br/> Xidmətləri Daxilində Nələri Edir?</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 bg-white shadow-lg p-6 border border-gray-200">

        {/* Individual Cards */}
        {[
          {
            color: "bg-red-500",
            title: "İnternet",
            description: "Müştərilərimiz üçün ən yeni texnologiya və həllər istifadə edirik. LeoTelecom yüksək sürətli internet və qoşulma üçün GPON texnologiyasını təklif edir. Bakı və Abşeron bölgələrindən internetə qoşula bilərsiniz.",
            iconPath: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          },
          {
            color: "bg-orange-500",
            title: "Ən ucuz qiymət",
            description: "Yüksək keyfiyyət və əlverişli qiymətlər yalnız bizdə.",
            iconPath: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
          },
          {
            color: "bg-yellow-500",
            title: "Təcrübəli personal",
            description: "Dəyərli mütəxəssislərimiz istənilən problemi həll etməyə kömək edəcək.",
            iconPath: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586"
          },
          {
            color: "bg-lime-500",
            title: "İP TV",
            description: "Müştərilərimizi İPTV ilə təmin edirik. Müştərilərimiz TV Player və 300+ Kanal (150 Full HD daxildir) alır. LeoTelecomun müştərisi olaraq, İPTV xidmətindən eyni İP ünvandakı 5 və daha çox cihazda istifadə edə bilərsiniz.",
            iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          },
          {
            color: "bg-teal-500",
            title: "24/7 Dəstək",
            description: "İstənilən vaxt servisimizə zəng edə və texniki xidmətdəmn 24/7 istfadə edə bilərsiniz.",
            iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"
          },
          {
            color: "bg-indigo-500",
            title: "Sürətli və kəsintisiz bağlantı",
            description: "Hava şəraitindən asılı olmayaraq yüksək sürət və kəsintisiz qoşulma.",
            iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          },
        ].map(({ color, title, description, iconPath }, index) => (
          <div key={index} className={`p-6 flex flex-col items-center text-center group hover:bg-slate-50 cursor-pointer border border-gray-200 rounded-lg`}>
            <span className={`p-3 rounded-full ${color} text-white shadow-lg`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
              </svg>
            </span>
            <p className="text-lg font-medium text-slate-700 mt-4">{title}</p>
            <p className="mt-2 text-sm text-slate-500">{description}</p>
          </div>
        ))}
      </div>

      <div className="w-full bg-gray-100 py-6 flex justify-center mt-8">
        <p className="text-slate-700">
          Kömək lazımdır? <a href="#" className="text-indigo-600 hover:underline">Bizimlə əlaqə yaradın</a>
        </p>
      </div>
    </div>
  );
}

export default Futures;
