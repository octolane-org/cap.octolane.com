import Link from 'next/link'
import Image from 'next/image'
import NewsImage01 from '@/public/images/news-01.jpg'
import NewsImage02 from '@/public/images/news-02.jpg'
import NewsImage03 from '@/public/images/news-03.jpg'
import NewsAuthor01 from '@/public/images/news-author-01.jpg'
import NewsAuthor02 from '@/public/images/news-author-02.jpg'

export default function News() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2">The most innovative businesses choose Simple</h2>
          </div>

          {/* Categories */}
          <div className="mb-12 md:mb-16">
            <ul className="flex flex-wrap justify-center text-sm font-medium -m-2">
              <li className="m-2">
                <a className="inline-flex text-center text-gray-100 py-2 px-4 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out" href="#0">Developers</a>
              </li>
              <li className="m-2">
                <a className="inline-flex text-center text-gray-800 py-2 px-4 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out" href="#0">SaaS</a>
              </li>
              <li className="m-2">
                <a className="inline-flex text-center text-gray-800 py-2 px-4 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out" href="#0">Web Agencies</a>
              </li>
              <li className="m-2">
                <a className="inline-flex text-center text-gray-800 py-2 px-4 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out" href="#0">E-Commerce</a>
              </li>
              <li className="m-2">
                <a className="inline-flex text-center text-gray-800 py-2 px-4 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out" href="#0">Startups</a>
              </li>
            </ul>
          </div>

          {/* Articles list */}
          <div className="max-w-sm mx-auto md:max-w-none">
            <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">

              {/* 1st article */}
              <article className="flex flex-col h-full" data-aos="zoom-y-out">
                <header>
                  <a href="#0" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                      <Image className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" src={NewsImage01} width={352} height={198} alt="News 01" />
                    </figure>
                  </a>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Case studies</a>
                      </li>
                      <li className="m-1">
                        <a className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out" href="#0">Hubspot</a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-xl font-bold leading-snug tracking-tight">
                    <a href="#0" className="hover:underline">“How HubSpot saved 25% on developing costs by switching to Simple.”</a>
                  </h3>
                </header>
                <footer className="text-sm flex items-center mt-4">
                  <div className="flex shrink-0 mr-3">
                    <a className="relative" href="#0">
                      <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                      <Image className="relative rounded-full" src={NewsAuthor01} width="32" height="32" alt="Author 01" />
                    </a>
                  </div>
                  <div>
                    <span className="text-gray-600">By </span>
                    <a className="font-medium hover:underline" href="#0">Lisa Allison</a>
                  </div>
                </footer>
              </article>

              {/* 2nd article */}
              <article className="flex flex-col h-full" data-aos="zoom-y-out" data-aos-delay="150">
                <header>
                  <a href="#0" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                      <Image className="absolute inset-0 w-full h-full object-cover transform scale-105 translate-z-0 hover:-translate-y-1 transition duration-700 ease-out" src={NewsImage02} width={352} height={198} alt="News 02" />
                    </figure>
                  </a>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Case studies</a>
                      </li>
                      <li className="m-1">
                        <a className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out" href="#0">Facebook</a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-xl font-bold leading-snug tracking-tight">
                    <a href="#0" className="hover:underline">“How Facebook brought 13% cost savings to their bottom line with Simple’s products.”</a>
                  </h3>
                </header>
                <footer className="text-sm flex items-center mt-4">
                  <div className="flex shrink-0 mr-3">
                    <a className="relative -ml-2" href="#0">
                      <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                      <Image className="relative rounded-full" src={NewsAuthor02} width="32" height="32" alt="Author 03" />
                    </a>
                  </div>
                  <div>
                    <span className="text-gray-600">By </span>
                    <a className="font-medium hover:underline" href="#0">Knut Mayer</a>
                  </div>
                </footer>
              </article>

              {/* 3rd article */}
              <article className="flex flex-col h-full" data-aos="zoom-y-out" data-aos-delay="300">
                <header>
                  <a href="#0" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                      <Image className="absolute inset-0 w-full h-full object-cover transform scale-105 translate-z-0 hover:-translate-y-1 transition duration-700 ease-out" src={NewsImage03} width={352} height={198} alt="News 03" />
                    </figure>
                  </a>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Case studies</a>
                      </li>
                      <li className="m-1">
                        <a className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out" href="#0">Tinder</a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-xl font-bold leading-snug tracking-tight">
                    <a href="#0" className="hover:underline">“How Tinder grew 115% and saved 120 Hours each week by outsourcing to Simple.”</a>
                  </h3>
                </header>
                <footer className="text-sm flex items-center mt-4">
                  <div className="flex shrink-0 mr-3">
                    <a className="relative" href="#0">
                      <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                      <Image className="relative rounded-full" src={NewsAuthor01} width="32" height="32" alt="Author 01" />
                    </a>
                  </div>
                  <div>
                    <span className="text-gray-600">By </span>
                    <a className="font-medium hover:underline" href="#0">Lisa Allison</a>
                  </div>
                </footer>
              </article>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}