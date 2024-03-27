import Hero from "@/components/hero";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Hero />
      </div>
      <div className="text-center py-12 w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to</h1>
        <h2 className="text-4xl font-bold text-rose-600 mb-4">
          Jaya Real Estate
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Leaders in the business of making your dreams come true, Bhoomi Realty
          Holdings is a premier real estate, property, land, and housing company
          in Sri Lanka. Our lands are hand-picked from some of Sri Lanka’s
          fastest growing urban and suburban areas by our team of real estate
          experts.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          We are vastly different from the typical land sale companies in Sri
          Lanka. We offer a comprehensive range of services that will completely
          put your mind at ease and help make your land or housing dream a
          reality.
        </p>
        <button className="bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50">
          READ MORE
        </button>
      </div>
      <div className="flex justify-center items-center h-full mb-10">
        <div className="bg-white rounded-lg shadow-xl p-6 w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3">
          <div className="flex justify-between items-center ">
            <div>
              <h2 className="text-4xl font-semibold text-gray-800">
                New Properties
              </h2>
              <p className="text-gray-500">
                Explore our latest listings and find your dream home.
              </p>
            </div>
            <button className="flex items-center text-blue-500 hover:underline">
              View More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-xl shadow-md p-6">
              <div className="flex items-center">
                <div className="w-16 h-16 mr-4">
                  <img
                    src="property-1.jpg"
                    alt="Property 1"
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Malabe</h3>
                  <p className="text-gray-500">2 bedrooms, 2 bathrooms</p>
                  <p className="text-gray-900 mt-2">$450,000</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-md p-6">
              <div className="flex items-center">
                <div className="w-16 h-16 mr-4">
                  <img
                    src="property-2.jpg"
                    alt="Property 2"
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Kesbewa</h3>
                  <p className="text-gray-500">3 bedrooms, 2 bathrooms</p>
                  <p className="text-gray-900 mt-2">$550,000</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-md p-6">
              <div className="flex items-center">
                <div className="w-16 h-16 mr-4">
                  <img
                    src="property-3.jpg"
                    alt="Property 3"
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Matara</h3>
                  <p className="text-gray-500">4 bedrooms, 3 bathrooms</p>
                  <p className="text-gray-900 mt-2">$650,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
