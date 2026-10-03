export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">

      <hr className="border-slate-700" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* About */}
        <div>

          <h2 className="text-2xl font-extrabold tracking-[3px] text-white [text-shadow:0_0_8px_#38BDF8,0_0_15px_#38BDF8]">
            Portfolio
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            Creating responsive and interactive web experiences with modern
            Front-End technologies. Passionate about writing clean code,
            improving user experience, and continuously learning new tools
            and frameworks.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">

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

          </div>

        </div>

        {/* Navigation */}
        <div className="md:text-center">

          <h3 className="text-xl font-bold mb-5">
            Navigation
          </h3>

          <ul className="space-y-3 text-slate-300">

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

          </ul>

        </div>

        {/* What I Do */}
        <div>

          <h3 className="text-xl font-bold mb-5">
            What I Do?
          </h3>

          <p className="text-sm leading-7 text-slate-300">
            I am a passionate Frontend Developer who enjoys building modern,
            responsive, and user-friendly web applications. I specialize in
            HTML, CSS, JavaScript, React, and Tailwind CSS, focusing on
            creating clean and interactive user interfaces.
          </p>

        </div>

      </div>

      <hr className="border-slate-700" />

      <div className="py-5 text-center">

        <p className="text-sm text-slate-300">
          © 2026 Aya Nabil. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

