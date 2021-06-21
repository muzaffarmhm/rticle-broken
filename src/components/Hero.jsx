import React from "react";

export default function Hero() {
  return (
    <div className = "bg-gray-50">
      <section class="text-blueGray-700 ">
        <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
          <div class="flex flex-col items-start w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0 ">
            <h1 class="mb-8 text-3xl font-bold tracking-tighter text-left text-black lg:text-3xl title-font">
              {" "}
              Hello Visitor, Welcome to our Website!
              {" "}
            </h1>
            <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600 ">
              {" "}
              Deploy your mvp in minutes, not days. WT offers you a a wide
              selection swapable sections for your landing page.You are going to
              have fun building it, I did.{" "}
            </p>
            <p class="flex items-center mb-2 text-blueGray-600 ">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>{" "}
              Ain't no sunshine when she's gone.{" "}
            </p>
            <p class="flex items-center mb-2 text-blueGray-600 ">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>{" "}
              Expensive feature.
            </p>
            <p class="flex items-center mb-6 text-blueGray-600">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>{" "}
              Really good feauture.
            </p>
          </div>
          <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
            <img
              className="object-cover object-center rounded-lg "
              alt="hero"
              src="https://source.unsplash.com/720x600/?sunset"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
