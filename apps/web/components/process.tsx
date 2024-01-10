export default function Process() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-16 border-t border-gray-200">
          {/* Items */}
          <div className="relative max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none">
            <div
              className="absolute top-1/2 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-300 hidden lg:block"
              aria-hidden="true"
            ></div>

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="flex justify-center items-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold mb-3">
                1
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Apply
              </h4>
              <p className="text-gray-600 text-center">
                Duis aute irure dolor in reprehenderitin volupta velit esse
                cillum sint occaecat cupidatat.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="flex justify-center items-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold mb-3">
                2
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Screening
              </h4>
              <p className="text-gray-600 text-center">
                Duis aute irure dolor in reprehenderitin volupta velit esse
                cillum sint occaecat cupidatat.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="flex justify-center items-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold mb-3">
                3
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Interview
              </h4>
              <p className="text-gray-600 text-center">
                Duis aute irure dolor in reprehenderitin volupta velit esse
                cillum sint occaecat cupidatat.
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="flex justify-center items-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold mb-3">
                4
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Job Offer
              </h4>
              <p className="text-gray-600 text-center">
                Duis aute irure dolor in reprehenderitin volupta velit esse
                cillum sint occaecat cupidatat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
