// src/components/Navbar.jsx
import { useState } from "react";
import { Logo, PrimaryButton } from "./../UI/UiComponent";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [doOpen, setDoOpen] = useState(false);

  // Desktop dropdown states
  const [workDropdown, setWorkDropdown] = useState(false);
  const [doDropdown, setDoDropdown] = useState(false);
  let workTimer, doTimer;

  const handleMouseEnterWork = () => {
    clearTimeout(workTimer);
    setWorkDropdown(true);
  };
  const handleMouseLeaveWork = () => {
    workTimer = setTimeout(() => setWorkDropdown(false), 300);
  };

  const handleMouseEnterDo = () => {
    clearTimeout(doTimer);
    setDoDropdown(true);
  };
  const handleMouseLeaveDo = () => {
    doTimer = setTimeout(() => setDoDropdown(false), 300);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-25 text-2xl">
          {/* Left: Logo */}
          <Logo />

          {/* Center: Menu (Desktop) */}
          <div className="hidden lg:flex space-x-6">
            <a href="/about" className="text-gray-700 hover:text-orange-500">About</a>

            {/* Our Work dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterWork}
              onMouseLeave={handleMouseLeaveWork}
            >
              <button className="text-gray-700 hover:text-orange-500">Our Work</button>
              {workDropdown && (
                <div className="absolute bg-white shadow-md rounded-md mt-2 text-xl">
                  <ul className="py-2 w-48">
                    <li><a href="/work/project1" className="block px-4 py-2 text-gray-600 hover:text-orange-500">Project One</a></li>
                    <li><a href="/work/project2" className="block px-4 py-2 text-gray-600 hover:text-orange-500">Project Two</a></li>
                    <li><a href="/work/project3" className="block px-4 py-2 text-gray-600 hover:text-orange-500">Project Three</a></li>
                    <li><a href="/work/project4" className="block px-4 py-2 text-gray-600 hover:text-orange-500">Project Four</a></li>
                    <li><a href="/work/project5" className="block px-4 py-2 text-gray-600 hover:text-orange-500">Project Five</a></li>
                  </ul>
                </div>
              )}
            </div>

            <a href="/blogs" className="text-gray-700 hover:text-orange-500">Blogs</a>

            {/* What We Do dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterDo}
              onMouseLeave={handleMouseLeaveDo}
            >
              <button className="text-gray-700 hover:text-orange-500">What We Do</button>
              {doDropdown && (
                <div className="absolute bg-white shadow-md rounded-md text-xl mt-2">
                  <ul className="py-2 w-48">
                    <li><a href="/do/service1" className="block px-4 py-2 text-gray-600 hover:text-orange-500">Service One</a></li>
                    <li><a href="/do/service2" className="block px-4 py-2 text-gray-600 hover:text-orange-500">Service Two</a></li>
                    <li><a href="/do/service3" className="block px-4 py-2 text-gray-600 hover:text-orange-500">Service Three</a></li>
                    <li><a href="/do/service4" className="block px-4 py-2 text-gray-600 hover:text-orange-500">Service Four</a></li>
                    <li><a href="/do/service5" className="block px-4 py-2 text-gray-600 hover:text-orange-500">Service Five</a></li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Right: Contact Button */}
          <div className="hidden lg:block">
            <PrimaryButton href="/contact">Contact</PrimaryButton>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-orange-500 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-2 px-4 py-3">
            <li><a href="/about" className="block text-gray-700 hover:text-orange-500">About</a></li>
            <li><a href="/blogs" className="block text-gray-700 hover:text-orange-500">Blogs</a></li>
           

            {/* Our Work children (collapsible) */}
            <li>
              <button
                onClick={() => setWorkOpen(!workOpen)}
                className="w-full text-left  text-gray-700 hover:text-orange-500 mt-2"
              >
                Our Work {workOpen ? "▲" : "▼"}
              </button>
              {workOpen && (
                <ul className="ml-4 space-y-1 mt-1">
                  <li><a href="/work/project1" className="block text-gray-600 hover:text-orange-500">Project One</a></li>
                  <li><a href="/work/project2" className="block text-gray-600 hover:text-orange-500">Project Two</a></li>
                  <li><a href="/work/project3" className="block text-gray-600 hover:text-orange-500">Project Three</a></li>
                  <li><a href="/work/project4" className="block text-gray-600 hover:text-orange-500">Project Four</a></li>
                  <li><a href="/work/project5" className="block text-gray-600 hover:text-orange-500">Project Five</a></li>
                </ul>
              )}
            </li>

            {/* What We Do children (collapsible) */}
            <li>
              <button
                onClick={() => setDoOpen(!doOpen)}
                className="w-full text-left text-gray-700 hover:text-orange-500 mt-2"
              >
                What We Do {doOpen ? "▲" : "▼"}
              </button>
              {doOpen && (
                <ul className="ml-4 space-y-1 mt-1">
                  <li><a href="/do/service1" className="block text-gray-600 hover:text-orange-500">Service One</a></li>
                  <li><a href="/do/service2" className="block text-gray-600 hover:text-orange-500">Service Two</a></li>
                  <li><a href="/do/service3" className="block text-gray-600 hover:text-orange-500">Service Three</a></li>
                  <li><a href="/do/service4" className="block text-gray-600 hover:text-orange-500">Service Four</a></li>
                  <li><a href="/do/service5" className="block text-gray-600 hover:text-orange-500">Service Five</a></li>
                </ul>
              )}
            </li>
             <li><a href="/contact" className="block text-gray-700 hover:text-orange-500">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}