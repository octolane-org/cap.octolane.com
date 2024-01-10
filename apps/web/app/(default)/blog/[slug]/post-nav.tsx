'use client'

import { useState, useEffect } from 'react'

export default function PostNav() {

  const [targets, setTargets] = useState<HTMLElement[]>([])
  const [links, setLinks] = useState<HTMLElement[]>([])
  
  // select targets
  useEffect(() => {
    const targets = document.querySelectorAll('h2') as NodeListOf<HTMLElement>
    setTargets(Array.from(targets))
  }, [])  

  // populate the right sidebar
  useEffect(() => {
    let linksArray: HTMLElement[]  = []
    targets.map((target) => {
      linksArray.push(target)
    })
    setLinks(linksArray)
  }, [targets])

  return (
    <aside className="relative hidden lg:block w-64 mr-20 shrink-0">
      {links.length > 0 &&
        <div className="sticky top-28">
          <h4 className="text-lg font-bold leading-snug tracking-tight mb-4">Table of contents</h4>
          <ul className="font-medium -my-1">
          {links.map((link, linkIndex) => (
            <li key={linkIndex} className="py-1">
              <a
                data-scrollspy-link
                className="flex items-center hover:underline"
                href={`#${link.id}`}
              >
                <svg className="w-4 h-4 fill-current text-gray-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                </svg>                
                <span>{link.innerHTML}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      }
    </aside>
  )
}