import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-5 gap-8 text-sm">
        {/* Logo & Social */}
        <div className="col-span-2 space-y-4">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <span className="text-blue-600">◆</span>
            <span>Future Intelligence & Investement</span>
          </div>
          <p className="text-gray-500">Hassle-free platform for Inspection , Valuation and Automation.</p>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <Twitter size={18} className="text-gray-500 hover:text-black" />
            <Linkedin size={18} className="text-gray-500 hover:text-black" />
            <Instagram size={18} className="text-gray-500 hover:text-black" />
            <Youtube size={18} className="text-gray-500 hover:text-black" />
            <Facebook size={18} className="text-gray-500 hover:text-black" />
          </div>

          <div className="mt-2">
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
              ● All Systems Will Be Operational Soon
            </span>
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-semibold mb-3">Product</h4>
          <ul className="space-y-1 text-gray-600">
            <li className="flex items-center gap-2">
              Headless Valuation
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                New
              </span>
            </li>
            <li>Pricing</li>
            <li>Open source Starter-kit</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-1 text-gray-600">
            <li>About Future Intelligence & Investement</li>
            <li>Careers</li>
            <li>Logos and Media</li>
            <li>Changelog</li>
            <li>Feature Requests</li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-1 text-gray-600">
            <li>My feed</li>
            <li>Case studies</li>
            <li>Referral Program</li>
          </ul>

          <h4 className="font-semibold mt-6 mb-3">Partner with us</h4>
          <ul className="space-y-1 text-gray-600">
            <li>Host a Hackathon</li>
          </ul>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t text-xs text-gray-400 py-4 px-6 flex flex-col md:flex-row justify-between max-w-7xl mx-auto">
        <p>© 2025 Developed By Future Intelligence & Investiment</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Code of conduct</a>
        </div>
      </div>
    </footer>
  );
}
