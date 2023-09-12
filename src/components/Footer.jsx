import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="mt-10 my-2">
        <div className="flex gap-8 items-center justify-center">
          <FaFacebook size={20} />
          <FaInstagram size={20} />
          <FaTwitter size={20} />
          <FaYoutube size={20} />
        </div>
        <div className="flex gap-4 justify-center my-4">
          <a href="/">Conditions of Use</a>
          <a href="/">Privacy & Policy</a>
          <a href="/">Press Room</a>
        </div>
        <div>
          <p>© 2023 MovieBox by Nuel Elekwachi </p>
        </div>
      </footer>
    </>
  );
}
