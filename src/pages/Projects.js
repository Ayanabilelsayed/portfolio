import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Coffee Shop Website",
      category: "Web App",
      description:
        "A responsive coffee shop website created with HTML and CSS.",
      image: "/Image/coffee.png",
      par: "HTML",
      tech: "CSS",
      link: "https://github.com/Ayanabilelsayed/project1",
    },
    {
      id: 2,
      title: "Beauty App",
      category: "Web App",
      description:
        "A modern and responsive makeup website built with HTML5 and CSS3.",
      image: "/Image/beauty.png",
      par: "HTML5",
      tech: "CSS3",
      link: "https://github.com/Ayanabilelsayed/project2",
    },
    {
      id: 3,
      title: "Tailwind CSS Website",
      category: "Web App",
      description:
        "A responsive website developed with Tailwind CSS. It features a clean and modern design.",
      image: "/Image/tailwind.png",
      par: "UI/UX",
      tech: "Tailwind CSS",
      link: "https://ayanabilelsayed.github.io/project3/",
      github: "https://github.com/Ayanabilelsayed/project3",
    },
    {
      id: 4,
      title: "Portfolio",
      category: "Web App",
      description: "A modern personal portfolio website built with React.",
      image: "/Image/profile.png",
      par: "UI/UX",
      tech: "React",
      link: "#",
    },
    {
      id: 5,
      title: "CRUDS",
      category: "Task",
      description:
        "A CRUD application built with React and Firebase. It allows users to create, read and update.",
      image: "/Image/developer.png",
      par: "JavaScript",
      tech: "React",
      link: "https://ayanabilelsayed.github.io/CRUDS/",
    },
    {
      id: 6,
      title: "E-Commerce",
      category: "Task",
      description:
        "A responsive e-commerce website built with React and Firebase. It allows users to browse, add, and purchase products.",
      image: "/Image/E-Commerce.png",
      par: "JavaScript",
      tech: "React",
      link: "https://ayanabilelsayed.github.io/project4/",
    },
    {
      id: 7,
      title: "To-Do List",
      category: "Task",
      description:
        "A simple to-do list application built with React. It allows users to add, edit, and delete tasks.",
      image: "/Image/todo.png",
      par: "JavaScript",
      tech: "React",
      link: "https://to-do-chi-ashen.vercel.app/",
    },
    {
      id: 8,
      title: "Calculator",
      category: "Task",
      description:
        "A simple calculator application built with React. It allows users to perform basic arithmetic operations.",
      image: "/Image/calculator.png",
      par: "JavaScript",
      tech: "React",
      link: "https://ayanabilelsayed.github.io/Oasis-Infobyte-Calculator/",
    },
    {
      id: 9,
      title: "Landing Page",
      category: "Task",
      description:
        "A responsive landing page built with React and Tailwind CSS.",
      image: "/Image/Landing Page.png",
      par: "UI/UX",
      tech: "React, Tailwind CSS",
      link: "https://ayanabilelsayed.github.io/tribute-page/",
    },
    {
      id: 10,
      title: "Todo List",
      category: "Task",
      description:
        "A simple todo list application built with React and Tailwind CSS.",
      image: "/Image/todo2.png",
      par: "JavaScript",
      tech: "React, Tailwind CSS",
      link: "https://ayanabilelsayed.github.io/task3-todo-web-app/",
    },
    {
      id: 11,
      title: "Authentication System",
      category: "Task",
      description:
        "A simple authentication system built with React and Firebase.",
      image: "/Image/authentication.png",
      par: "JavaScript",
      tech: "React, Firebase",
      link: "https://ayanabilelsayed.github.io/task4-authentication-system/",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Web App", "Task"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="Projects"
      className="bg-[#0F172A] min-h-screen px-5 py-16 text-white md:px-10 scroll-mt-12"
    >
      <hr className="mb-12 border-slate-700" />

      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
        My Projects
      </h2>

      <div className="h-[5px] w-24 md:w-36 bg-sky-400 rounded-full mx-auto shadow-[0_0_25px_#38bdf8]"></div>

      <p className="mx-auto mt-8 max-w-3xl text-center text-slate-300 md:text-xl font-semibold leading-8">
        Real-world applications built with modern technologies and best
        practices.
      </p>

      {/* Filter */}
      <div className="mx-auto mt-12 flex flex-wrap justify-center gap-3 rounded-full bg-slate-800 p-2 w-fit">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-5 py-2 text-sm md:text-base font-semibold transition duration-300 ${
              activeCategory === category
                ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                : "text-slate-300 hover:bg-slate-700 hover:text-white"
            }`}
          >
            {category === "All" ? "All Projects" : category}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-sky-400 hover:shadow-[0_0_25px_rgba(56,189,248,0.25)]"
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-slate-950/70 opacity-0 transition duration-300 group-hover:opacity-100"
              >
                <span className="rounded-lg bg-sky-500 px-5 py-2 font-semibold hover:bg-sky-600">
                  View Project
                </span>
              </a>
            </div>

            {/* Content */}
            <div className="p-5">
              <span className="rounded-full bg-sky-500/20 px-3 py-1 text-sm font-semibold text-sky-400">
                {project.category}
              </span>

              <h3 className="mt-4 text-lg font-bold">{project.title}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.par && (
                  <span className="rounded-lg bg-sky-500/20 px-3 py-1 text-sm text-sky-300">
                    {project.par}
                  </span>
                )}

                {project.tech && (
                  <span className="rounded-lg bg-cyan-500/20 px-3 py-1 text-sm text-cyan-300">
                    {project.tech}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="mt-12 border-slate-700" />
    </section>
  );
}