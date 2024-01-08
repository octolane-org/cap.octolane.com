import Image from 'next/image'
import AboutImage from '@/public/images/about-01.jpg'

export default function AboutIntro() {  
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4">We enable developers to build amazing things</h1>
            <p className="text-xl text-gray-600">
              We have transformed product development, making it faster, simpler... better! That's why in just three years we now help more developers build projects than anyone else.
            </p>
          </div>

          <figure className="flex justify-center items-start">
            <Image className="rounded shadow-2xl" src={AboutImage} width={768} height={432} priority alt="About us" />
          </figure>

        </div>
      </div>
    </section>
  )
}