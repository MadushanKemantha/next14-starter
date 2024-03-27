// Add this line at the top of the file
"use client";

import React, { useEffect, useState } from "react";

const imageUrls = [
  "https://images.unsplash.com/photo-1434434319959-1f886517e1fe?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=2017&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Hero = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    `url(${imageUrls[0]})`
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * imageUrls.length);
      setBackgroundImage(`url(${imageUrls[randomIndex]})`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-no-repeat h-4/5 overflow-hidden"
        style={{ backgroundImage }}
      >
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" />

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div
            className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
            // style={{
            //   backgroundColor: "rgba(0, 0, 0, 0.1)",
            //   boxShadow: "2px 2px 6px rgba(248, 248, 248, 0.7)",
            //   backdropFilter: "blur(10px)",
            //   color: "aliceblue",
            //   borderRadius: "10px",
            //   padding: "10px",
            // }}
          >
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Discover Your
              <strong className="block font-extrabold text-rose-600">
                {" "}
                Dream Home with Jaya Real Estate.{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-black sm:text-white">
              We are dedicated to helping you find the perfect place for you and
              your family.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="#"
                className="block rounded-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-600 hover:to-yellow-700 px-12 py-3 text-sm font-medium text-white shadow-lg transform transition hover:scale-105 focus:outline-none focus:ring focus:ring-pink-400 active:bg-pink-600 sm:w-auto"
              >
                About Us
              </a>

              <a
                href="#"
                className="block rounded-full bg-white px-12 py-3 text-sm font-medium text-yellow-600 shadow-lg hover:text-yellow-700 transform transition hover:scale-105 focus:outline-none focus:ring focus:ring-pink-400 active:text-pink-600 sm:w-auto"
              >
                View Properties
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
