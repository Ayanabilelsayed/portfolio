
import { TypeAnimation } from "react-type-animation";
import heroVideo from "../assets/mainhome.mp4";

export default function Home() {
  return (
    <section
      id="Home"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950"></div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="mt-12">
          <h2 className="text-center text-4xl font-extrabold leading-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.25)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Hello, I'm Aya Nabil
          </h2>

          <div className="mt-6">
            <TypeAnimation
              sequence={["Frontend Developer", 2000, "", 500]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-lg font-bold tracking-[4px] text-sky-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.8)] sm:text-2xl md:text-3xl lg:text-4xl"
            />
          </div>
        </div>

        <div className="mt-10 max-w-3xl">
          <p className="text-base leading-8 text-slate-300 sm:text-lg">
            I am a passionate{" "}
            <span className="text-sky-400">Frontend Developer</span> who enjoys
            building modern, responsive, and user friendly web applications. I
            specialize in HTML, CSS, JavaScript, React, and Tailwind CSS,
            focusing on creating clean, interactive, and high-performance user
            interfaces. I am always eager to learn new technologies and
            continuously improve my skills to deliver exceptional digital
            experiences.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-5 sm:flex-row">
          <a href="/#Projects">
            <button className="rounded-lg bg-sky-500 px-8 py-3 font-medium text-white shadow-lg shadow-sky-500/30 transition-all duration-300 hover:scale-105 hover:bg-sky-600">
              View My Projects
            </button>
          </a>

          <a href="/#Contact">
            <button className="rounded-lg border border-sky-400 px-8 py-3 text-white transition-all duration-300 hover:scale-105 hover:border-sky-300 hover:bg-sky-500/10">
              Get In Touch
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
