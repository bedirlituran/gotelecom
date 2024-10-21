import React from 'react'

const Email = () => {
  return (
    <section className="text-gray-600 relative">
         
      <div className="absolute  inset-0 bg-gray-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.7900030461856!2d49.84358837509528!3d40.41350265583723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030874c23751181%3A0x4eafe434a8447e5e!2sAyna%20Sultanova%20heyk%C9%99li!5e0!3m2!1saz!2saz!4v1728287337223!5m2!1saz!2saz"
          className="border-0 w-full h-full"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container px-4 py-8 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-4 flex flex-col md:ml-auto w-full mt-8 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-md mb-2 font-medium">Bizə mail yazın</h2>
          <div className="relative mb-2">
            <label htmlFor="email" className="leading-7 text-xs text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-xs outline-none text-gray-700 py-1 px-2"
            />
          </div>
          <div className="relative mb-2">
            <label htmlFor="message" className="leading-7 text-xs text-gray-600">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-20 text-xs outline-none text-gray-700 py-1 px-2 resize-none"
            ></textarea>
          </div>
          <button className="text-white bg-indigo-500 border-0 py-1.5 px-3 focus:outline-none hover:bg-indigo-600 rounded text-sm">Göndər</button>
          <p className="text-xs text-gray-500 mt-2">Hər bir mesajınız bizim üçün çox önəmlidir.</p>
        </div>
      </div>
    </section>
  )
}

export default Email
