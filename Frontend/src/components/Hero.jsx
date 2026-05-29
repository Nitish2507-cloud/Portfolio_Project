import profileImage from "../assets/profile.jpeg";
function Hero() {
  return (
  <section className="h-[85vh] flex items-center px-10 md:px-20">

    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10">

      {/* Left Side */}
      <div className="text-center md:text-left max-w-2xl">

        <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Nitish
          </span>
        </h1>

        <p className="text-3xl text-cyan-100 mb-8">
          Full Stack Developer
        </p>

        <p className="text-lg text-gray-300 leading-8">
          I build modern responsive web applications using React,
          Node.js, MongoDB and modern technologies.
        </p>

        <div className="mt-10 flex gap-6 flex-wrap justify-center md:justify-start">

          <a
            href="#projects"
            className="bg-cyan-400 hover:bg-cyan-500 text-black px-8 py-3 rounded-2xl text-lg font-bold transition shadow-lg"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 px-8 py-3 rounded-2xl text-lg font-semibold transition"
          >
            Download Resume
          </a>

        </div>

      </div>

      {/* Right Side Image */}
      <div className="flex justify-center">

        <img
  src={profileImage}
  alt="Nitish"
  className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.5)]"
/>

      </div>

    </div>

  </section>
);
}

export default Hero;