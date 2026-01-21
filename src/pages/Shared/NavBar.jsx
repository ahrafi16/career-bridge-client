import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-black flex items-center border mx-auto w-full justify-between border-slate-700 px-6 py-4 my-8 rounded-full text-white text-sm">
      
      {/* Logo */}
      <a href="/" className="flex items-center">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
          <circle cx="16.001" cy="4.706" r="4.706" fill="#D9D9D9" />
          <circle cx="16.001" cy="27.294" r="4.706" fill="#D9D9D9" />
          <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
        </svg>
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 ml-7">
        {["Products", "Stories", "Pricing", "Docs"].map((item) => (
          <a key={item} href="#" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              {item}
            </span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
              {item}
            </span>
          </a>
        ))}
      </div>

      {/* Desktop Buttons */}
      <div className="hidden ml-14 md:flex items-center gap-4">
        <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
          Contact
        </button>
        <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300 shadow-[0px_0px_30px_7px] hover:shadow-[0px_0px_30px_14px] shadow-white/50 hover:shadow-white/50">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-300"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 bg-black w-full flex flex-col items-center gap-4 py-6 text-base rounded-xl md:hidden">
          {["Products", "Customer Stories", "Pricing", "Docs"].map((item) => (
            <a key={item} href="#" className="hover:text-indigo-600">
              {item}
            </a>
          ))}

          <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
            Contact
          </button>
          <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
