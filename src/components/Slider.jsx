"use client";
import React, { useEffect, useRef } from 'react';

const Slider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const moveSlide = () => {
      const slider = sliderRef.current; // ref kullanarak erişim
      if (!slider) return; // Eğer slider null ise, fonksiyonu sonlandır

      const max = slider.scrollWidth - slider.clientWidth;
      const left = slider.clientWidth;

      if (max === slider.scrollLeft) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left, behavior: 'smooth' });
      }
    };

    const interval = setInterval(moveSlide, 2000);

    return () => clearInterval(interval); // Bileşen unmount olduğunda interval temizlenir
  }, []);

  return (
    <div className="m-16">
      <h1 className="text-4xl font-bold text-center mb-4 flex items-center justify-center">Go Telecom-u Kəşf Et</h1>

      <div
        ref={sliderRef} // ref ekleyin
        className="h-[70vh] w-[80%] relative mx-auto overflow-hidden flex flex-nowrap text-center"
        id="slider" // Eğer ID gerekiyorsa bırakabilirsiniz
      >
        {/* Slider içerikleri */}
        <div className="relative flex-none w-full h-full">
          <img 
            src="https://media.istockphoto.com/id/624460222/photo/motion-media-wall-concept-smart-tv.webp?a=1&b=1&s=612x612&w=0&k=20&c=BQNCEMRbg71CeXcMQdmS4nR8gCza6wJmsoPF--mNP-k=" 
            alt="Go Telecom Internet" 
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="bg-blue-600 bg-opacity-50 h-full flex flex-col items-center justify-start p-8">
            <h2 className="text-3xl text-white max-w-md z-50">Go Telecom Internet</h2>
            <p className="text-white max-w-md z-50">Problemsiz əlaqə ilə yüksək sürətli internetdən həzz alın.</p>
          </div>
        </div>
        
        <div className="relative flex-none w-full h-full">
          <img 
            src="https://media.istockphoto.com/id/507832501/photo/family-watching-television-in-living-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=t0tr5ZKAM6jTMfCdjKYvZJkiwGXj0pvdG4VEiM5zgQU=" 
            alt="Go Telecom TV" 
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="bg-pink-400 bg-opacity-50 h-full flex flex-col items-center justify-start p-8">
            <h2 className="text-3xl text-white max-w-md z-50">Go Telecom TV Provayder</h2>
            <p className="text-white max-w-md z-50">Tv xidmətimizlə sevimli şoularınızı və filmlərinizi keyflə izləyin.</p>
          </div>
        </div>
        
        <div className="relative flex-none w-full h-full">
          <img 
            src="https://media.istockphoto.com/id/1158778970/photo/watching-football-and-sport-stream-with-mobile-phone-man-streaming-soccer-game-live-video.webp?a=1&b=1&s=612x612&w=0&k=20&c=wtmP0iWrMkSnbC37Ed6JeU6ooKy8kKoSMMorBzthTMc=" 
            alt="Go Telecom Services" 
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="bg-teal-500 bg-opacity-50 h-full flex flex-col items-center justify-start p-8">
            <h2 className="text-3xl text-white max-w-md z-50">Go telecom IP TV</h2>
            <p className="text-white max-w-md z-50">300-dən yuxarı kanalı bizim ilə hər yerdən izlə</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
