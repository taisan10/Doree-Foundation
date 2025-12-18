import { useState } from "react";

export function GradientText({ children, className = "" }) {
  return (
    <span
      className={`bg-gradient-to-r from-white via-orange-300 to-orange-500 bg-clip-text text-transparent font-bold ${className}`}
    >
      {children}
    </span>
  );
}

export function Container({ children, className = "" }) {
  return (
    <div
      className={`
         mx-auto                /* center horizontally */
         /* responsive padding */
        w-full                 /* full width by default */
        sm:max-w-sm            /* small mobile */
        md:max-w-md            /* tablet */
        lg:max-w-7xl            /* laptop */
               
        bg-white               /* default background */
        rounded-lg             /* rounded corners */
        shadow-md    
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function Logo({
  src = "/logo/Doree.png", // default logo path
  alt = "Doree Foundation", // accessibility text
  size = "lg", // sm, md, lg
  link = "/", // optional link
}) {
  const sizes = {
    sm: "h-8 w-auto", // small
    md: "h-12 w-auto", // medium
    lg: "h-16 w-20", // large
  };

  const logoImg = (
    <img src={src} alt={alt} className={`${sizes[size]} object-contain`} />
  );

  // If link is provided, wrap logo in anchor
  return link ? (
    <a href={link} className="inline-block text-gray-700 ">
      {logoImg}
    </a>
  ) : (
    logoImg
  );
}

export function PrimaryButton({
  children,
  href = "#",
  onClick,
  className = "",
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={` inline-block bg-orange-400 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-500 transition  ${className}
      `}
    >
      {children}
    </a>
  );
}

export function SectionTitle({ title, subtitle, className = "" }) {
  return (
    <div
      className={`mx-auto max-w-2xl text-center  ${className}
      `}
    >
      <h2
        className={`text-2xl sm:text-4xl font-semibold  ${className}
      `}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-white/70  ${className}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-orange-500">
          Doree Foundation
        </a>

        {/* Hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-orange-500 focus:outline-none lg:hidden"
        >
          {/* Icon */}
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-2 px-4 py-3">
            <li>
              <a
                href="/"
                className="block text-gray-700 hover:text-orange-500 font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block text-gray-700 hover:text-orange-500 font-medium"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="block text-gray-700 hover:text-orange-500 font-medium"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block text-gray-700 hover:text-orange-500 font-medium"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}



