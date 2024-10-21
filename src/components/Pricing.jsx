import React from 'react';

const Pricing = () => {
  return (
    <>
      <div className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-base font-semibold leading-6 text-teal-600">Aylıq Paketlər</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-blue-500 sm:text-4xl">Hər kəs üçün sərfəli aylıq paketlər</p>
          </div>
          <p className="mx-auto mt-4 max-w-md text-center text-lg leading-6 text-cyan-600">
          Go Telecom ilə ehtiyaclarınıza uyğun mükəmməl planı seçin.
          </p>
  
          <div className="isolate mx-auto mt-8 grid max-w-md grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-3">
            {/* TV Plan */}
            <div className="rounded-2xl p-6 ring-1 xl:p-8 ring-yellow-400">
              <h3 id="tier-tv" className="text-lg font-semibold leading-6 text-orange-600">TV Paket</h3>
              <p className="mt-2 text-sm leading-6 text-green-600">Pulsuz qoşulma.</p>
              <p className="mt-4 flex items-baseline gap-x-1">
                <span className="text-3xl font-bold tracking-tight text-pink-900">10 AZN</span>
                <span className="text-sm font-semibold leading-6 text-purple-600">/aylıq</span>
              </p>
              <a href="#" aria-describedby="tier-tv" className="mt-4 block rounded-md py-1.5 px-2.5 text-center text-sm font-semibold leading-6 bg-cyan-600 text-gray-600 shadow-sm hover:bg-red-500">Qoşul</a>
              <ul role="list" className="mt-4 space-y-2 text-sm leading-6 text-gray-400">
                <li className="flex gap-x-2">200+ Tv kanal</li>
                <li className="flex gap-x-2">100+ HD kanal</li>
                <li className="flex gap-x-2">24/7 Xidmət support</li>
              </ul>
            </div>
            {/* Internet Plan */}
            <div className="rounded-2xl p-6 ring-1 xl:p-8 ring-gray-700">
              <h3 id="tier-internet" className="text-lg font-semibold leading-6 text-gray-900">Internet Paket</h3>
              <p className="mt-2 text-sm leading-6 text-cyan-600">Pulsuz qoşulma.</p>
              <p className="mt-4 flex items-baseline gap-x-1">
                <span className="text-3xl font-bold tracking-tight text-yellow-700">17 AZN</span>
                <span className="text-sm font-semibold leading-6 text-teal-600">/Aylıq</span>
              </p>
              <a href="#" aria-describedby="tier-internet" className="mt-4 block rounded-md py-1.5 px-2.5 text-center text-sm font-semibold leading-6 bg-green-600 text-white shadow-sm hover:bg-green-800">Qoşul</a>
              <ul role="list" className="mt-4 space-y-2 text-sm leading-6 text-pink-600">
                <li className="flex gap-x-2">100 Mbps Sürət</li>
                <li className="flex gap-x-2">Fiber Optik</li>
                <li className="flex gap-x-2">24/7 Xidmət support</li>
              </ul>
            </div>
            {/* Combo Plan */}
            <div className="rounded-2xl p-6 ring-1 xl:p-8 bg-gray-900 ring-gray-900">
              <h3 id="tier-combo" className="text-lg font-semibold leading-6 text-white">Kombo Paket</h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">İnternet və TV qoşulma.</p>
              <p className="mt-4 flex items-baseline gap-x-1">
                <span className="text-3xl font-bold tracking-tight text-white">35 AZN</span>
                <span className="text-sm font-semibold leading-6 text-white">/Aylıq</span>
              </p>
              <a href="#" aria-describedby="tier-combo" className="mt-4 block rounded-md py-1.5 px-2.5 text-center text-sm font-semibold leading-6 bg-white/10 text-white hover:bg-white/20">Qoşul</a>
              <ul role="list" className="mt-4 space-y-2 text-sm leading-6 text-gray-300">
                <li className="flex gap-x-2">Pulsuz qoşulma</li>
                <li className="flex gap-x-2">300+ Tv kanal</li>
                <li className="flex gap-x-2">Fiber Optik</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
