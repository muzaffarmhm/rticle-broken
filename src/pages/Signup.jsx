import React from "react";
import logo from "../images/asvg.svg";
import { Link } from "react-router-dom";
import InputTemplate from "../components/InputTemplate";
import FormButton from "../components/FormButton";
import FormTop from "../components/FormTop";

export default function Signup() {
  return (
    <div>
      <div>
        {/* component */}
        {/* url('/img/hero-pattern.svg') */}
        <div className="flex min-h-screen bg-white">
          <div
            className="w-1/2 bg-cover md:block hidden"
            style={{
              backgroundImage:
                "url(https://source.unsplash.com/720x600/?business)",
            }}
          />
          <div className="bg-no-repeat bg-right bg-cover max-w-max max-h-8 h-12 p-4">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="md:w-1/2 max-w-lg mx-auto mt-10 px-4 py-5 shadow-none">
            <FormTop
              heading="Create an account for free"
              desc="Explore rticle! Make articles! Become Popular!"
            />

            <form action="#" className="p-0">
              <InputTemplate type="text" placeholder="First Name" required />
              <InputTemplate type="text" placeholder="Last Name" required />
              <InputTemplate type="text" placeholder="Email" required />
              <InputTemplate type="password" placeholder="Password" required />
              <InputTemplate
                type="password"
                placeholder="Confirm Password"
                required
              />

              <div className="mt-5">
                <textarea
                  className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                  name="description"
                  rows={4}
                  cols={50}
                  placeholder="Let people know about you! Introduce yourself"
                  style={{ resize: "none" }}
                />
              </div>

              <label>Your Selfie over here 😁</label>
              <InputTemplate
                type="file"
                placeholder="Confirm Password"
                accept="image/*"
              >
                {" "}
              </InputTemplate>

              <FormButton />
            </form>
            <Link to="/login">
              <span className="block  p-5 text-center text-gray-800  text-xs ">
                Already have an account? Sign in here!
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
