import { TypeAnimation } from "react-type-animation";
import heroVideo from "../assets/mainhome.mp4";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section
      id="Home"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">

        {/* Heading */}
        <div className="mt-12">
          <h2 className="font-extrabold leading-tight">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white text-center leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]">
  Hello, I'm Aya Nabil
</h2>
          </h2>

          {/* Animation */}
          <div className="mt-6">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "",
                500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="tracking-[4px] text-sky-400 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]"
            />
          </div>
        </div>

        {/* About */}
        <div className="max-w-3xl mt-10">
          <p className="text-slate-300 text-base sm:text-lg leading-8">
            I am a passionate <span className="text-sky-400">Frontend Developer</span>
            {" "}who enjoys building modern, responsive, and user friendly web
            applications. I specialize in HTML, CSS, JavaScript, React, and
            Tailwind CSS, focusing on creating clean, interactive, and
            high-performance user interfaces. I am always eager to learn new
            technologies and continuously improve my skills to deliver
            exceptional digital experiences.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-5">
          <a href="/#Projects">
          <button className="px-8 py-3 rounded-lg bg-sky-500 hover:bg-sky-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-sky-500/30 text-white font-medium">
            View My Projects
          </button>
            </a>
            <a href="/#Contact">
          <button className="px-8 py-3 rounded-lg border border-sky-400 text-white hover:bg-sky-500/10 hover:border-sky-300 transition-all duration-300 hover:scale-105">
            Get In Touch
          </button>
            </a>
        </div>
           
           
      </div>
    </section>
  );
}