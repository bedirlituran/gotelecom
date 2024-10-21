"use client"
import React, { useState, useEffect } from 'react';

const Faq = () => {
    // FAQ öğeleri için state tanımı
    const [openIndex, setOpenIndex] = useState(null);

    // Soru tıklandığında açma/kapama işlemi
    const toggleMenu = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Go telecom istifadəçisi olmaq üçün nə etməliyəm?",
            answer: "Bunun üçün sadəcə sağ alt küncdə WHATSAPP iconuna toxunmaq kifayət edər.",
        },
        {
            question: "Aylıq xidmət haqqını necə ödəyə bilərəm?",
            answer: "Xidmət haqqını sizə rahat olan üsulla ödəmək mümkündür: saytımız vasitəsilə onlayn ödəniş; ödəmə terminalları vasitəsilə ödəniş; bank mobil tətbiqləri ilə ödəniş; onlayn ödəniş saytları ilə.",
        },
        {
            question: "Tv də heç bir kanal göstərmir və ya səs var görüntün yoxdur bu zaman ne edim?",
            answer: "Bu halda routerdən tvye gedən kabelin yerində olduğunu, onun zədəli olmadığını yoxlayın. Hər şey qaydasında olduğu halda bizimlə əlaqə saxlayın.",
        },
        {
            question: "Qoşulma edilən zaman hansısa tv və ya internet avadanlığı almalıyam?",
            answer: "Roter pulsuz verilir.Tv üçün isə əgər Televizorunuz smartdırsa vəya andoroid tv boxunuz varsa xeyir.",
        },
        {
            question: "Wifi şifrəmi unutmuşam vəya routeri reset etmişəm bunun üçün nə etməliyəm?",
            answer: "Bunun üçün texniki dəstəyimiz ilə mütləq əlaqə saxlamalısıniz və ya sadəcə WHATSAPP düyməsinə toxunaraq 24 saat xidmət göstərən xəttimiz ilə əlaqə saxlaya bilərsiniz .",
        },
    ];

    return (
        <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
            <h1 className="text-center dark:text-white lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">Sual-Cavab bölməsi</h1>

            <div className="lg:mt-12 bg-gray-100 dark:bg-gray-800 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto">
                <div className="flex justify-between md:flex-row flex-col">
                    <div className="md:mb-0 mb-8 md:text-left text-center">
                        <h2 className="font-medium dark:text-white text-xl leading-5 text-gray-800 lg:mb-2 mb-4">Suallar</h2>
                      
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex bg-white md:justify-center justify-between items-center px-4 py-3 w-full">
                            <input className="focus:outline-none bg-white" type="text" placeholder="Search" />
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg1.svg" alt="search" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:w-8/12 w-full mx-auto">
                <hr className="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

                {faqs.map((faq, index) => (
                    <div key={index} className="w-full md:px-6">
                        <div className="flex justify-between items-center w-full">
                            <div>
                                <p className="flex justify-center items-center dark:text-white font-medium text-base leading-6 md:leading-4 text-gray-800">
                                    <span className="lg:mr-6 mr-4 dark:text-white lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                                        Sual{index + 1}.
                                    </span>
                                    {faq.question}
                                </p>
                            </div>
                            <button
                                aria-label="toggler"
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                                onClick={() => toggleMenu(index)}
                            >
                                <img
                                    className={`transform ${openIndex === index ? "rotate-180" : ""} dark:hidden`}
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                                    alt="toggler"
                                />
                                <img
                                    className={`transform ${openIndex === index ? "rotate-180" : ""} dark:block hidden`}
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg"
                                    alt="toggler"
                                />
                            </button>
                        </div>
                        <div className={`mt-6 w-full ${openIndex === index ? "" : "hidden"}`}>
                            <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">{faq.answer}</p>
                        </div>
                        <hr className="w-full lg:mt-10 my-8" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faq;

