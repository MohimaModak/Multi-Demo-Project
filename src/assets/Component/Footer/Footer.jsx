import React from "react";
import fb from "../../../Gallery/fb.png"
import instagram from "../../../Gallery/instagram.png"
import linkedin from "../../../Gallery/linkedin.png"

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold text-white">About This Project</h2>
          <p className="mt-2 text-sm">
            This is a multi-demo web project showcasing different layouts and themes.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-white">All Demos</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold text-white">Follow Us</h2>
          <div className="mt-2 flex space-x-4">
           <img src={fb} className="w-7" />
           <img src={instagram} className="w-7" />
           <img src={linkedin} className="w-7" />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Brand. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
