'use client'

import { useState } from 'react'

export default function PricingTables() {

  const [annual, setAnnual] = useState<boolean>(true)
  
  return (
    <section className="bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h1 className="h1 mb-4" data-aos="zoom-y-out">Start for free. Pay as you grow. Switch at any time.</h1>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out" data-aos-delay="150">No matter how many team members you have - our pricing is simple, transparent and adapts to the size of your company.</p>
          </div>

          {/* Pricing tables */}
          <div>

            {/* Pricing toggle */}
            <div className="flex justify-center max-w-xs m-auto mb-16" data-aos="zoom-y-out" data-aos-delay="300">
              <div className="relative flex w-full mx-6 p-1 bg-gray-200 rounded">
                <span
                  className="absolute inset-0 m-1 pointer-events-none"
                  aria-hidden="true"
                >
                  <span className={`absolute inset-0 w-1/2 bg-white rounded shadow transform transition duration-150 ease-in-out ${annual ? 'translate-x-0' : 'translate-x-full'}`}></span>
                </span>
                <button
                  className={`relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out ${!annual && 'text-gray-500'}`}
                  onClick={(e) => { e.preventDefault(); setAnnual(true); }}
                >Bill Yearly <span className="text-green-500">-20%</span>
                </button>
                <button
                  className={`relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out ${annual && 'text-gray-500'}`}
                  onClick={(e) => { e.preventDefault(); setAnnual(false); }}
                >Bill Monthly</button>
              </div>
            </div>

            <div className="max-w-sm md:max-w-2xl xl:max-w-none mx-auto grid gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-6 items-start">

              {/* Pricing table 1 */}
              <div className="relative flex flex-col h-full py-5 px-6 rounded bg-white shadow-xl" data-aos="zoom-y-out" data-aos-delay="450">
                <div className="mb-4">
                  <div className="text-lg font-bold mb-1">Starter</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-3xl font-bold">$</span>
                    <span className="text-4xl font-bold">0</span>
                    <span className="text-gray-600 pl-2">/month</span>
                  </div>
                  <div className="text-lg text-gray-800">For larger teams that need to create, and collaborate.</div>
                </div>
                <ul className="text-gray-600 -mb-2 grow">
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Unlimited viewers</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Up to 3 members</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Up to 2 projects</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <div className="border-t border-gray-200 pt-5 mt-6">
                  <a className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full" href="#0">Try for free</a>
                </div>
              </div>

              {/* Pricing table 2 */}
              <div className="relative flex flex-col h-full py-5 px-6 rounded bg-blue-100 shadow-xl border-2 border-blue-500" data-aos="zoom-y-out" data-aos-delay="450">
                <div className="absolute top-0 right-0 mr-5 p-3 -mt-5 bg-yellow-500 rounded-full">
                  <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.145 5.05l-4.316-.627L8.898.513c-.338-.684-1.456-.684-1.794 0l-1.93 3.91-4.317.627a1.002 1.002 0 00-.554 1.707l3.124 3.044-.737 4.3a1 1 0 001.45 1.053L8 13.125l3.862 2.03c.728.381 1.59-.234 1.45-1.054l-.736-4.299L15.7 6.758a1.003 1.003 0 00-.555-1.708z" />
                  </svg>
                </div>
                <div className="mb-4">
                  <div className="text-lg font-bold mb-1">Agency</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-3xl font-bold">$</span>
                    <span className="text-4xl font-bold">{annual ? '24' : '34'}</span>
                    <span className="text-gray-600 pl-2">/month</span>
                  </div>
                  <div className="text-lg text-gray-800">For larger teams that need to create, and collaborate.</div>
                </div>
                <ul className="text-gray-600 -mb-2 grow">
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Unlimited viewers</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Up to 3 members</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Up to 2 projects</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <div className="border-t border-gray-200 pt-5 mt-6">
                  <a className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full" href="#0">Start free trial</a>
                </div>
              </div>

              {/* Pricing table 3 */}
              <div className="relative flex flex-col h-full py-5 px-6 rounded bg-white shadow-xl" data-aos="zoom-y-out" data-aos-delay="450">
                <div className="mb-4">
                  <div className="text-lg font-bold mb-1">Premium</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-3xl font-bold">$</span>
                    <span className="text-4xl font-bold">{annual ? '49' : '59'}</span>
                    <span className="text-gray-600 pl-2">/month</span>
                  </div>
                  <div className="text-lg text-gray-800">For larger teams that need to create, and collaborate.</div>
                </div>
                <ul className="text-gray-600 -mb-2 grow">
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Unlimited viewers</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Up to 3 members</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Up to 2 projects</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <div className="border-t border-gray-200 pt-5 mt-6">
                  <a className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full" href="#0">Start free trial</a>
                </div>
              </div>

              {/* Pricing table 4 */}
              <div className="relative flex flex-col h-full py-5 px-6 rounded bg-white shadow-xl" data-aos="zoom-y-out" data-aos-delay="450">
                <div className="mb-4">
                  <div className="text-lg font-bold mb-1">Enterprise</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-3xl font-bold">$</span>
                    <span className="text-4xl font-bold">{annual ? '99' : '109'}</span>
                    <span className="text-gray-600 pl-2">/month</span>
                  </div>
                  <div className="text-lg text-gray-800">For larger teams that need to create, and collaborate.</div>
                </div>
                <ul className="text-gray-600 -mb-2 grow">
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Unlimited viewers</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Up to 3 members</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Up to 2 projects</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <div className="border-t border-gray-200 pt-5 mt-6">
                  <a className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full" href="#0">Start free trial</a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}