export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-10 md:px-10 min-h-screen"
    >
       
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-5 mt-12">
        My Skills
      </h2>

      <div className="h-[5px] w-24 md:w-36 bg-sky-400 rounded-full mx-auto shadow-[0_0_25px_#38bdf8]"></div>

      <div className="max-w-3xl mx-auto mt-8">
        <p className="text-center text-slate-300 md:text-xl font-semibold tracking-wide leading-8">
          Turning ideas into modern, responsive, and engaging web experiences
          through clean code, creativity, and continuous learning.
        </p>
      </div>


      <div className="max-w-7xl mx-auto mt-20">

        <div className="skills">

          <div className="skill">
            <label>HTML / HTML5</label>
            <div className="progress">
              <div className="progress-bar html"></div>
            </div>
            <span>95%</span>
          </div>


          <div className="skill">
            <label>CSS / CSS3</label>
            <div className="progress">
              <div className="progress-bar css"></div>
            </div>
            <span>90%</span>
          </div>


          <div className="skill">
            <label>JavaScript</label>
            <div className="progress">
              <div className="progress-bar javascript"></div>
            </div>
            <span>85%</span>
          </div>


          <div className="skill">
            <label>Tailwind CSS</label>
            <div className="progress">
              <div className="progress-bar tailwind"></div>
            </div>
            <span>90%</span>
          </div>


          <div className="skill">
            <label>React</label>
            <div className="progress">
              <div className="progress-bar react"></div>
            </div>
            <span>85%</span>
          </div>


          <div className="skill">
            <label>Next.js</label>
            <div className="progress">
              <div className="progress-bar nextjs"></div>
            </div>
            <span>80%</span>
          </div>


        
        </div>

      </div>

    </section>
  );
}