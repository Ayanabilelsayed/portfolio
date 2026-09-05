import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-12 bg-[#0F172A]/95 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-5">

        {/* Logo */}
        <a href="/">
          <h2 className="text-xl font-extrabold tracking-[3px] text-white [text-shadow:0_0_8px_#38BDF8,0_0_15px_#38BDF8]">
            Portfolio
          </h2>
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-slate-300 font-medium">
          <li>
            <a href="#Home" className="hover:text-sky-400 duration-300">
              Home
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-sky-400 duration-300">
              Skills
            </a>
          </li>

          <li>
            <a href="#Projects" className="hover:text-sky-400 duration-300">
              Projects
            </a>
          </li>

          <li>
            <a href="#Contact" className="hover:text-sky-400 duration-300">
              Contact
            </a>
          </li>

          <li>
            <a href="#Certificates" className="hover:text-sky-400 duration-300">
              Certificates
            </a>
          </li>
        </ul>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center gap-4">

          <a
            href="https://www.linkedin.com/in/aya-nabil-861720380/"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-transparent hover:border-sky-400 hover:bg-sky-500/10 transition-all duration-300"
          >
            <i className="fa-brands fa-linkedin text-base text-white duration-300"></i>
          </a>

          <a
            href="https://github.com/Ayanabilelsayed"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-transparent hover:border-sky-400 hover:bg-sky-500/10 transition-all duration-300"
          >
            <i className="fa-brands fa-github text-base text-white duration-300"></i>
          </a>

          <a
            href="https://wa.me/201206292495"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-transparent hover:border-sky-400 hover:bg-sky-500/10 transition-all duration-300"
          >
            <i className="fa-brands fa-whatsapp text-base text-white duration-300"></i>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ayanabilelsayed.55@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-transparent hover:border-sky-400 hover:bg-sky-500/10 transition-all duration-300"
          >
            <i className="fa-solid fa-envelope text-base text-white duration-300"></i>
          </a>

          <a href="/#Contact">
            <button className="px-4 py-1 rounded-md bg-sky-500 text-white text-sm hover:bg-sky-600 duration-300">
              Let's Connect
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
        >
          <i className={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0F172A] border-t border-slate-800">
          <ul className="flex flex-col items-center gap-5 py-6 text-slate-300 font-medium">

            <li>
              <a href="#Home" onClick={() => setOpen(false)}>
                Home
              </a>
            </li>

            <li>
              <a href="#skills" onClick={() => setOpen(false)}>
                Skills
              </a>
            </li>

            <li>
              <a href="#Projects" onClick={() => setOpen(false)}>
                Projects
              </a>
            </li>

            <li>
              <a href="#Contact" onClick={() => setOpen(false)}>
                Contact
              </a>
            </li>

            {/* Icons */}
            <div className="flex gap-6 text-xl pt-2">

              <a href="https://www.linkedin.com/in/aya-nabil-861720380/">
                <i className="fa-brands fa-linkedin text-white hover:text-sky-400"></i>
              </a>

              <a href="https://github.com/Ayanabilelsayed">
                <i className="fa-brands fa-github text-white hover:text-sky-400"></i>
              </a>

              <a href="https://wa.me/201206292495">
                <i className="fa-brands fa-whatsapp text-green-400"></i>
              </a>

              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ayanabilelsayed.55@gmail.com">
                <i className="fa-solid fa-envelope text-white hover:text-sky-400"></i>
              </a>

            </div>

            <a
              href="/#Contact"
              className="mt-3 px-5 py-2 rounded-md bg-sky-500 text-white text-sm hover:bg-sky-600 duration-300"
            >
              Let's Connect
            </a>

          </ul>
        </div>
      )}
    </nav>
  );
}

