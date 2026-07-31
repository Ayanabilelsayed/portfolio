import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const [Data, setData] = useState({
    Name: "",
    lastName: "",
    Email: "",
    Phone: "",
    Message: "",
  });


  function sendMessage(e) {
    e.preventDefault();

    if (
      Data.Name === "" ||
      Data.lastName === "" ||
      Data.Email === "" ||
      Data.Message === ""
    ) {
      alert("Please fill all the fields");
    } else {

      emailjs
        .send(
          "service_gtew72e",
          "template_zf90057",
          {
            name: Data.Name,
            lastname: Data.lastName,
            email: Data.Email,
            phone: Data.Phone,
            message: Data.Message,
            time: new Date().toLocaleString(),
          },
          "ChHlvArhx2hTTQb7Y"
        )
        .then(() => {
          alert("Message sent successfully!");
          clearData();
        })
        .catch((error) => {
          console.log(error);
          alert(error.text);
        });
    }
  }


  function clearData() {
    setData({
      Name: "",
      lastName: "",
      Email: "",
      Phone: "",
      Message: "",
    });
  }


  return (
    <section
      id="Contact"
      className="scroll-mt-12 min-h-screen bg-[#0F172A] text-white py-16 px-5 md:px-10"
    >


      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-5">
        Contact Me
      </h2>


     <div className="h-[5px] w-24 md:w-36 bg-sky-400 rounded-full mx-auto shadow-[0_0_25px_#38bdf8]"></div>


      <div className="max-w-3xl mx-auto mt-8">
        <p className="text-center text-slate-300 md:text-xl font-semibold tracking-wide leading-8 text-slate-300">
          Open to freelance projects, internships, and full-time opportunities.
          Let's build something great together.
        </p>
      </div>



      <div className="mt-14 flex flex-col lg:flex-row gap-8 justify-center items-stretch">



        {/* Left Card */}

        <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-800 p-6 transition duration-300 hover:border-sky-400 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)]">


          <div className="text-5xl text-sky-400">
            <i className="fa-solid fa-laptop-code"></i>
          </div>



          <h2 className="text-2xl font-bold mt-5">
            Aya Nabil
          </h2>



          <p className="text-slate-300 mt-4 leading-7">
            Frontend Developer specializing in React and modern web
            technologies.
          </p>




          {/* Location */}

          <div className="flex items-start mt-8">

            <i className="fa-solid fa-location-dot text-2xl text-sky-400"></i>

            <div className="ml-4">
              <h3 className="font-semibold">
                Location
              </h3>

              <p className="text-slate-300">
                Egypt, Cairo
              </p>
            </div>

          </div>





          {/* Email */}

          <div className="flex items-start mt-6">

            <i className="fa-solid fa-envelope text-2xl text-sky-400"></i>


            <div className="ml-4">

              <h3 className="font-semibold">
                Email
              </h3>


              <p className="text-slate-300 break-all">
                ayanabilelsayed.55@gmail.com
              </p>


            </div>


          </div>





          {/* Focus */}

          <div className="flex items-start mt-6">

            <i className="fa-solid fa-briefcase text-2xl text-sky-400"></i>


            <div className="ml-4">

              <h3 className="font-semibold">
                Focus
              </h3>


              <p className="text-slate-300">
                Frontend Development
              </p>


            </div>


          </div>


        </div>





        {/* Right Card */}

        <div className="w-full max-w-2xl rounded-2xl border border-slate-700 bg-slate-800 p-6 transition duration-300 hover:border-sky-400 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)]">


          <h2 className="text-2xl font-bold mb-6">
            Send a Message
          </h2>




          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


            <input
              type="text"
              value={Data.Name}
              onChange={(e) =>
                setData({ ...Data, Name: e.target.value })
              }
              placeholder="First Name"
              className="p-3 rounded-lg bg-transparent border border-slate-500 outline-none focus:border-sky-400"
            />



            <input
              type="text"
              value={Data.lastName}
              onChange={(e) =>
                setData({ ...Data, lastName: e.target.value })
              }
              placeholder="Last Name"
              className="p-3 rounded-lg bg-transparent border border-slate-500 outline-none focus:border-sky-400"
            />



            <input
              type="email"
              value={Data.Email}
              onChange={(e) =>
                setData({ ...Data, Email: e.target.value })
              }
              placeholder="Email"
              className="p-3 rounded-lg bg-transparent border border-slate-500 outline-none focus:border-sky-400"
            />



            <input
              type="text"
              value={Data.Phone}
              onChange={(e) =>
                setData({ ...Data, Phone: e.target.value })
              }
              placeholder="WhatsApp phone (optional)"
              className="p-3 rounded-lg bg-transparent border border-slate-500 outline-none focus:border-sky-400"
            />


          </div>





          <textarea
            value={Data.Message}
            onChange={(e) =>
              setData({ ...Data, Message: e.target.value })
            }
            placeholder="Message..."
            className="w-full h-40 mt-6 p-3 rounded-lg bg-transparent border border-slate-500 outline-none focus:border-sky-400 resize-none"
          />





          <button
            type="button"
            onClick={sendMessage}
            className="mt-6 w-full md:w-auto px-8 py-3 rounded-lg bg-sky-500 hover:bg-sky-600 transition duration-300 shadow-lg shadow-sky-500/30 font-semibold"
          >
            Send Message
          </button>



        </div>



      </div>


    </section>
  );
}