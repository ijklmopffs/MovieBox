import React from "react";
import poster from "../assets/Poster.svg";
import logo from "../assets/Logo.svg";
import menu from "../assets/Menu.svg";
import orange from "../assets/PngItem_1381056 1.svg";
import imdb from "../assets/imdb.svg";
import icon from "../assets/Icon.svg";

export default function Header() {
  return (
    <>
      <header
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: `url('${poster}')` }}
      >
        <nav className="p-4 flex justify-between items-center  text-white">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <input
              type="text"
              placeholder="What do you want to watch?"
              className="p-2 bg-transparent border-2 rounded-lg md:w-[30rem] focus:outline-none hidden md:block"
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <p>Sign in</p>
            <img src={menu} alt="" />
          </div>
        </nav>

        <section className="text-white flex flex-col items-start p-4 gap-8 ">
          <h1 className="font-bold text-3xl md:text-5xl md:w-96 text-start ">
            John Wick 3: Parabellum
          </h1>
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-4">
              <img src={imdb} alt="" />
              <p>86.0/100</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={orange} alt="" />
              <p>97%</p>
            </div>
          </div>
          <p className="md:w-96 text-start">
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
          <button className="flex items-center gap-2 uppercase bg-rose-700 p-2 rounded-md">
            <img src={icon} alt="" />
            Watch trailer
          </button>
        </section>
      </header>
    </>
  );
}
