import React from "react";

const certificates = [

  {
    id: 1,
    title: "Front-End Development",
    organization: "SEF Academy",
    date: "2025",
    image: "/image2/frontend.png",
    link: "https://drive.google.com/file/d/1rSAFfIACD8s1D4hD4WrQJ1xYVZuqLT3Q/view?usp=drivesdk",

  },
  {
    id:2,
    title: "workshop",
    organization: "iAcademy",
    date: "2026",
    image: "/image2/workshop.png",
    link: "https://drive.google.com/file/d/1W1MDg-yQOsESKjHgic7640wShreQYhiN/view?usp=sharing",

  },
  {
    id: 3,
    title: "Artificial Intelligence",
    organization: "British University",
    date: "2026",
    image: "/image2/ai.png",
    link: "https://drive.google.com/file/d/1xINuFjx17xrv6XBBVy3x62iiUAxVoMNW/view?usp=sharing",
  },
   {
    id: 4,
    title: "Software Testing",
    organization: "Rowad Misr",
    date: "2024",
    image: "/image2/softwaretesting.png",
    link: "https://drive.google.com/file/d/1l1WjM9HcePBrfmxxNya7lLZoNPaeO5EK/view?usp=drivesdk",
  },
  
];

export default function Certificates() {
  return (
    <section
      id="Certificates"
      className="min-h-screen bg-[#0F172A] px-5 py-20 text-white md:px-10"
    >
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Certificates
        </h2>

        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-white" />

        <p className="mt-6 text-base font-semibold leading-8 text-slate-300 md:text-xl">
          Certifications and training that showcase my skills, knowledge, and
          continuous growth in technology.
        </p>
      </div>

      {/* Certificates Cards */}
      <div className="mx-auto mt-14 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/70 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-slate-500 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="h-56 overflow-hidden bg-slate-700">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold leading-7">
                {certificate.title}
              </h3>

              <p className="mt-3 text-slate-300">
                {certificate.organization}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                {certificate.date}
              </p>

              {/* Button */}
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-lg bg-white px-5 py-2.5 font-semibold text-[#0F172A] transition-all duration-300 hover:scale-105 hover:bg-slate-200"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}