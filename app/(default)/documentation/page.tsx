export const metadata = {
  title: 'Documentation - Simple',
  description: 'Page description',
}

import Sidebar from './nav-sidebar'
import Content from './content'

export default function Documentation() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Main content */}
          <div className="md:flex md:justify-between">

            {/* Sidebar */}
            <Sidebar />

            {/* Page container */}
            <Content />

          </div>

        </div>
      </div>
    </section>
  )
}
