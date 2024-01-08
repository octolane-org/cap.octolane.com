import Image from 'next/image'
import TeamMember01 from '@/public/images/team-member-01.jpg'
import TeamMember02 from '@/public/images/team-member-02.jpg'
import TeamMember03 from '@/public/images/team-member-03.jpg'
import TeamMember04 from '@/public/images/team-member-04.jpg'
import TeamMember05 from '@/public/images/team-member-05.jpg'
import TeamMember06 from '@/public/images/team-member-06.jpg'
import TeamMember07 from '@/public/images/team-member-07.jpg'
import TeamMember08 from '@/public/images/team-member-08.jpg'
import TeamMember09 from '@/public/images/team-member-09.jpg'

export default function Team() {  
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2">The humans behind the product</h2>
          </div>

          {/* Team members */}
          <div className="max-w-sm sm:max-w-5xl mx-auto sm:flex sm:flex-wrap sm:justify-center -my-6 sm:-my-8 sm:-mx-3" data-aos-id-team>

            {/* 1st member */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamMember01} width={120} height={120} alt="Team member 01" />
                <h4 className="text-xl font-bold mb-1">Mark Lamprecht</h4>
                <div className="text-blue-600 font-medium mb-2">CEO & Co-founder</div>
                <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div>
              </div>
            </div>

            {/* 2nd member */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="150" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamMember02} width={120} height={120} alt="Team member 02" />
                <h4 className="text-xl font-bold mb-1">Jessie Pietrasiak</h4>
                <div className="text-blue-600 font-medium mb-2">CTO & Co-founder</div>
                <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div>
              </div>
            </div>

            {/* 3rd member */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="300" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamMember03} width={120} height={120} alt="Team member 03" />
                <h4 className="text-xl font-bold mb-1">Marina Hoffman</h4>
                <div className="text-blue-600 font-medium mb-2">Community Manager</div>
                <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div>
              </div>
            </div>

            {/* 4th member */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="450" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamMember04} width={120} height={120} alt="Team member 04" />
                <h4 className="text-xl font-bold mb-1">Anthony McGargle</h4>
                <div className="text-blue-600 font-medium mb-2">Lead Front-end Engineer</div>
                <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div>
              </div>
            </div>

            {/* 5th member */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="600" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamMember05} width={120} height={120} alt="Team member 05" />
                <h4 className="text-xl font-bold mb-1">Jessie Pietrasiak</h4>
                <div className="text-blue-600 font-medium mb-2">Head of Design</div>
                <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div>
              </div>
            </div>

            {/* 6th member */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="750" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamMember06} width={120} height={120} alt="Team member 06" />
                <h4 className="text-xl font-bold mb-1">Marina Hoffman</h4>
                <div className="text-blue-600 font-medium mb-2">Front-end Engineer</div>
                <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div>
              </div>
            </div>

            {/* 7th member */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="900" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamMember07} width={120} height={120} alt="Team member 07" />
                <h4 className="text-xl font-bold mb-1">Tamara Hastings</h4>
                <div className="text-blue-600 font-medium mb-2">Product Developer</div>
                <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div>
              </div>
            </div>

            {/* 8th member */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="1050" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamMember08} width={120} height={120} alt="Team member 08" />
                <h4 className="text-xl font-bold mb-1">Rachel Vervack</h4>
                <div className="text-blue-600 font-medium mb-2">Senior Data Scientist</div>
                <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div>
              </div>
            </div>

            {/* 9th member */}
            <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="1200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamMember09} width={120} height={120} alt="Team member 09" />
                <h4 className="text-xl font-bold mb-1">Andrew Laurencio</h4>
                <div className="text-blue-600 font-medium mb-2">Front-end Engineer</div>
                <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}