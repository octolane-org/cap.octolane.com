import Image from 'next/image'
import DocsImage01 from '@/public/images/docs-image-01.png'
import DocsImage02 from '@/public/images/docs-image-02.png'

export default function DocumentationContent() {
  return (
    <div className="md:grow">

      <div className="text-lg text-gray-600">
        <h2 className="h2 text-gray-900 mb-4">Introduction to Simple</h2>
        <p className="mb-8">
          Aenean sed adipiscing diam donec <strong className="font-medium text-gray-900">adipiscing tristique risus</strong> nec feugiat auctor urna nunc id cursus metus aliquam eleifend, arcu dictum varius duis at consectetur lorem donec massa sapien, sed risus ultricies tristique nulla aliquet. <strong className="font-medium text-gray-900">Morbi tristique senectus</strong> et netus et, nibh nisl condimentum id venenatis a condimentum vitae sapien.
        </p>
        <h3 id="installation" className="h3 text-gray-900 mb-4" style={{ scrollMarginTop: '100px' }}>Installation</h3>
        <p className="mb-8">
          Sit amet cursus sit amet dictum sit amet. Mattis pellentesque id nibh tortor id nulla aliquet porttitor lacus luctus accumsan, tortor posuere pellentesque habitant morbi tristique senectus et netus. Lacinia quis vel eros donec ac odio tempor duis ut diam quam nulla. Tellus orci ac auctor augue mauris augue.
        </p>
        <figure className="mb-8">
          <Image className="w-full rounded" src={DocsImage01} width={768} height={390} priority alt="Docs 01" />
        </figure>
        <p className="mb-8">
          Sit amet cursus sit amet dictum sit amet mattis pellentesque id nibh tortor id, nulla aliquet porttitor lacus luctus accumsan tortor posuere. <strong className="font-medium text-gray-900">Pellentesque habitant morbi</strong> tristique senectus et netus, lacinia quis vel eros donec ac odio tempor. Duis ut diam quam nulla tellus orci ac auctor augue mauris augue.
        </p>
        <p className="flex items-center text-base px-3 py-4 text-gray-800 bg-blue-100 border border-blue-200 rounded mb-8">
          <svg className="w-4 h-4 fill-current text-blue-500 shrink-0 mr-2" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm2.629 11.618L8 10.236l-2.629 1.382.5-2.927-2.124-2.073 2.939-.427L8 3.528l1.314 2.663 2.939.427-2.126 2.073.502 2.927z" fill="#338CF5" fillRule="nonzero" />
          </svg>
          <span>Check out the <a className="text-blue-600 hover:underline" href="#0">Terms and license page</a> to know more about our license.</span>
        </p>
        <h3 id="quick" className="h3 text-gray-900 mb-8" style={{ scrollMarginTop: '100px' }}>Quick start</h3>
        <h4 className="h4 text-gray-900 mb-4">Customising settings</h4>
        <p className="mb-8">
          Orci ac auctor augue mauris augue neque gravida in sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis senectus et <a className="text-gray-900 underline" href="#0">netus et malesuada fames</a> ut faucibus pulvinar elementum integer pellentesque habitant morbi.
        </p>
        <figure className="mb-8">
          <Image className="w-full rounded" src={DocsImage02} width={768} height={390} alt="Docs 02" />
        </figure>
        <p className="mb-8">
          Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat auctor urna nunc id cursus metus aliquam eleifend, arcu dictum varius duis at consectetur lorem donec massa sapien, sed risus ultricies tristique nulla aliquet. Morbi tristique senectus et netus et, nibh nisl condimentum id venenatis a condimentum vitae sapien.
        </p>
        <p className="flex items-center text-base px-3 py-4 text-gray-800 bg-blue-100 border border-blue-200 rounded mb-8">
          <svg className="w-4 h-4 fill-current text-blue-500 shrink-0 mr-2" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm2.629 11.618L8 10.236l-2.629 1.382.5-2.927-2.124-2.073 2.939-.427L8 3.528l1.314 2.663 2.939.427-2.126 2.073.502 2.927z" fill="#338CF5" fillRule="nonzero" />
          </svg>
          <span>Learn more about <a className="text-blue-600 hover:underline" href="#0">Customising settings</a>.</span>
        </p>
        <h3 id="folder" className="h3 text-gray-900 mb-8" style={{ scrollMarginTop: '100px' }}>Folder content</h3>
        <p className="mb-8">
          Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat auctor urna nunc id cursus metus aliquam eleifend, arcu dictum varius duis at consectetur lorem donec massa sapien, sed risus ultricies tristique nulla aliquet. Morbi tristique senectus et netus et, nibh nisl condimentum id venenatis a condimentum vitae sapien.
        </p>
        <p className="mb-8">
          Orci ac auctor augue mauris augue neque gravida in sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis senectus et <a className="text-gray-900 underline" href="#0">netus et malesuada fames</a> ut faucibus pulvinar elementum integer pellentesque habitant morbi.
        </p>
        <p>
          For more information on what to do next, we recommend the following articles:
        </p>
      </div>

      {/* Related content */}
      <div className="mt-8">
        <h3 className="h3 mb-8">Related</h3>
        <a className="flex justify-between items-center p-4 rounded border border-gray-200 transition duration-300 ease-in-out bg-white shadow-md hover:shadow-lg mb-4" href="#0">
          <div>
            <div className="text-normal font-medium mb-1">Folder components</div>
            <div className="text-sm text-gray-600">Learn more about orci ac auctor augue mauris augue neque gravida.</div>
          </div>
          <svg className="w-4 h-4 fill-current text-blue-600 shrink-0 ml-6" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
          </svg>
        </a>
        <a className="flex justify-between items-center p-4 rounded border border-gray-200 transition duration-300 ease-in-out bg-white shadow-md hover:shadow-lg mb-4" href="#0">
          <div>
            <div className="text-normal font-medium mb-1">Deploy hooks</div>
            <div className="text-sm text-gray-600">Learn more about risus nullam eget felis eget nunc.</div>
          </div>
          <svg className="w-4 h-4 fill-current text-blue-600 shrink-0 ml-6" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
          </svg>
        </a>
        <hr className="w-full h-px pt-px bg-gray-200 border-0 mt-8" />
      </div>

      {/* Feedback */}
      <div className="pt-6">
        <div className="flex flex-col text-center sm:text-left sm:flex-row sm:justify-between sm:items-center">
          <div className="font-medium mb-4 md:mb-0">Was this page helpful?</div>
          <ul className="inline-flex justify-center -m-2">
            <li className="p-2">
              <a href="#0" title="No, at all">
                <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12" fill="#FFCC4D" />
                  <path d="M11.11 7.029a.334.334 0 00-.395.098c-.006.008-.653.802-2.224 1.23a5.696 5.696 0 01-1.496.212c-.662 0-1.04-.141-1.042-.142a.332.332 0 00-.38.521c.047.058 1.186 1.431 2.75 1.431.234 0 .468-.031.695-.093 1.903-.519 2.273-2.805 2.288-2.903a.333.333 0 00-.197-.354zm7.316 1.436a.335.335 0 00-.393-.106c-.004.002-.422.171-1.158.171-.441 0-.906-.06-1.382-.177-1.58-.388-2.246-1.166-2.252-1.172a.333.333 0 00-.586.27c.018.097.446 2.374 2.36 2.845.207.051.419.077.63.077 1.598 0 2.733-1.44 2.78-1.501a.336.336 0 00.001-.407zM6.666 6.667a.667.667 0 01-.164-1.313c.024-.006 2.395-.64 3.568-2.985a.666.666 0 111.193.596C9.809 5.873 6.949 6.617 6.828 6.647a.678.678 0 01-.163.02zm10.667 0a.672.672 0 01-.161-.02c-.121-.03-2.981-.775-4.435-3.682a.667.667 0 011.193-.597c1.172 2.345 3.543 2.98 3.568 2.985a.668.668 0 01-.165 1.314zM12 19.31c-2.415 0-4.018.281-6 .667-.453.087-1.333 0-1.333-1.334 0-2.666 3.063-6 7.333-6s7.333 3.334 7.333 6c0 1.334-.88 1.422-1.333 1.334-1.982-.386-3.585-.667-6-.667z" fill="#664500" />
                  <path d="M6.667 16.667S8.667 16 12 16s5.333.667 5.333.667S16 14 12 14s-5.333 2.667-5.333 2.667z" fill="#FFF" />
                </svg>
              </a>
            </li>
            <li className="p-2">
              <a href="#0" title="Not really">
                <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle fill="#FFCC4D" cx="12" cy="12" r="12" />
                  <circle fill="#F4F7F9" cx="16.333" cy="9" r="3.667" />
                  <circle fill="#F4F7F9" cx="7.667" cy="9" r="3.667" />
                  <path d="M15.406 15.616c-1.842-.445-5.915-.04-7.441 2.937a.249.249 0 00.222.364c.057 0 .114-.02.161-.058 2.056-1.72 4.957-1.72 6.69-1.72 1.09 0 1.691 0 1.691-.472s-.47-.846-1.323-1.051zM7 8.666a1.662 1.662 0 00.25-3.308A3.627 3.627 0 005.8 5.85c-.287.3-.466.704-.466 1.151 0 .92.746 1.667 1.667 1.667zm8.667 0a1.662 1.662 0 00.25-3.308 3.624 3.624 0 00-1.451.491C14.179 6.15 14 6.553 14 7c0 .92.746 1.667 1.667 1.667z" fill="#65471B" />
                </svg>
              </a>
            </li>
            <li className="p-2">
              <a href="#0" title="It was useful">
                <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle fill="#FFCC4D" cx="12" cy="12" r="12" />
                  <path d="M10.667 11.305a.667.667 0 01-.633-.456c-.135-.399-.679-1.544-1.367-1.544-.708 0-1.259 1.218-1.368 1.544a.666.666 0 11-1.264-.422c.083-.251.869-2.456 2.632-2.456 1.764 0 2.549 2.205 2.633 2.456a.666.666 0 01-.633.878zm6.666 0a.666.666 0 01-.632-.456c-.135-.399-.679-1.544-1.368-1.544-.708 0-1.259 1.218-1.368 1.544a.667.667 0 01-1.265-.422c.084-.251.87-2.456 2.633-2.456 1.762 0 2.548 2.205 2.632 2.456a.666.666 0 01-.632.878zm.89 2.489a.334.334 0 00-.423-.02c-.026.02-2.615 1.934-5.8 1.934-3.177 0-5.775-1.914-5.8-1.933a.333.333 0 00-.486.438c.086.143 2.145 3.495 6.286 3.495s6.2-3.352 6.286-3.495a.333.333 0 00-.063-.419z" fill="#664500" />
                  <path d="M14.153 2.631c0 .16.02.315.054.464.284 1.762 2.243 3.621 3.647 4.132 1.11-.404 2.564-1.651 3.265-3.026A12.018 12.018 0 0015.833.626a2.04 2.04 0 00-1.68 2.005zM9.162 19.385a2.213 2.213 0 00-3.95-1.79 2.21 2.21 0 00-1.799-.925c-.827 0-1.54.46-1.92 1.132a12.047 12.047 0 005.379 5.05c1.091-.901 2.087-2.205 2.29-3.467zm13.705-2.29a1.527 1.527 0 00-2.708-.457 1.532 1.532 0 00-2.737 1.24c.205 1.27 1.566 2.597 2.607 3.04a12.03 12.03 0 002.838-3.823z" fill="#FFAC33" />
                  <path d="M22.417 2.18A2.042 2.042 0 0018.715.991a2.042 2.042 0 00-3.647 1.651c.285 1.762 2.243 3.621 3.647 4.132 1.404-.511 3.363-2.37 3.646-4.131a2.02 2.02 0 00.056-.465zM8.139 18.938a2.213 2.213 0 00-4.011-1.287 2.213 2.213 0 00-3.951 1.79c.307 1.908 2.429 3.922 3.95 4.475 1.522-.552 3.644-2.566 3.951-4.475.039-.163.06-.33.06-.503zm15.826-1.521a1.532 1.532 0 00-2.778-.891 1.532 1.532 0 00-2.737 1.24c.213 1.321 1.683 2.716 2.737 3.099 1.054-.383 2.524-1.778 2.736-3.1.027-.112.042-.228.042-.348z" fill="#DD2E44" />
                </svg>
              </a>
            </li>
            <li className="p-2">
              <a href="#0" title="Excellent">
                <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12" fill="#FFCC4D" />
                  <path d="M12 14c-2.415 0-4.018-.281-6-.667-.453-.087-1.333 0-1.333 1.334 0 2.666 3.063 6 7.333 6s7.333-3.334 7.333-6c0-1.334-.88-1.422-1.333-1.334-1.982.386-3.585.667-6 .667z" fill="#664500" />
                  <path d="M6 14.667s2 .666 6 .666 6-.666 6-.666-1.333 2.666-6 2.666-6-2.666-6-2.666z" fill="#FFF" />
                  <path d="M10.455 2.942l-3.028.534L5.867.641a.835.835 0 00-1.554.274l-.497 3.198-3.028.534A.834.834 0 00.576 6.22l2.713 1.288-.498 3.208a.835.835 0 001.417.713l2.341-2.374 3.012 1.43a.834.834 0 001.088-1.154L9.083 6.487l2.11-2.139a.834.834 0 00-.738-1.406zm3.09 0l3.028.534 1.56-2.835a.835.835 0 011.554.274l.496 3.198 3.028.534a.834.834 0 01.212 1.573L20.71 7.508l.499 3.208a.835.835 0 01-1.418.713L17.45 9.055l-3.012 1.43a.834.834 0 01-1.087-1.154l1.565-2.844-2.11-2.139a.834.834 0 01.74-1.406z" fill="#E95F28" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <hr className="w-full h-px pt-px bg-gray-200 border-0 mt-6" />
      </div>

    </div>
  )
}
