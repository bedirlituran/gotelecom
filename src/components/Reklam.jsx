import React from 'react';

const Reklam = () => {
  return (
    <div className="relative pt-8 p-16 sm:pt-0 bg-gradient-to-t from-[#fffbf5] to-[#fffef4] ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-10 justify-center">
        
        {/* Sol içerik */}
        <div className="content mx-auto">
          <div className="flex items-center gap-3">
            <hr className="w-8 bg-orange-500 border" />
            <span className="md:text-[24px] font-medium text-gray-800">
            Bağlantınızın Yeni Ünvani: Go Telecom
            </span>
          </div>
          <p className="text-[32px] lg:text-[40px] xl:text-[45px] font-bold leading-tight mt-4">
          Sürətli və Etibarlı Xidmət
          </p>
          <p className="mt-4 md:text-lg text-gray-700">
          Go Telecom, müştərilərimizin məmnuniyyətini təmin etmək üçün 24/7 müştəri dəstəyi təqdim edir. Hər hansı bir sualınız, problem və ya ehtiyacınız olduğunda bizimlə əlaqə saxlayın, sizə kömək etmək üçün buradayıq. Həyatınızın hər anında bizimlə bağlı qalın!"
          </p>
          <div className="flex gap-3 mt-8">
            <button className="font-medium text-[14px] flex items-center px-4 py-2 md:py-3 md:px-6 rounded-lg bg-gradient-to-r from-orange-300 to-orange-500 hover:from-pink-500 hover:to-yellow-500 transition duration-300 hover:scale-105 text-white shadow-md">
              Daha çox
              <span className="animate-ping absolute right-0 top-0 w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-700"></span>
            </button>
          </div>
        </div>
        
        {/* Sağ içerik */}
        <div className="relative sm:mt-0 mt-8 px-4 sm:px-0 mx-auto">
          <img className="w-[500px] animate__animated animate__fadeInRight" 
               src="https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" 
               alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reklam;
