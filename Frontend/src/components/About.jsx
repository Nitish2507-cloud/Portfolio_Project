function About() {
  return (
   <section
  id="about"
  className="px-10 py-24 bg-gradient-to-b from-[#1e3a8a] via-[#172554] to-[#0f172a]"
>

      <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
        About Me
      </h2>

      <div className="max-w-4xl mx-auto text-center">

        <p className="text-gray-300 text-lg leading-8">
          I'm a passionate Full Stack Developer and Computer Science student.
          I enjoy building modern, responsive, and scalable web applications.

          I have experience with React.js, Node.js, MongoDB,
          Express.js, JavaScript, and modern UI technologies.
        </p>

      </div>

    </section>
  );
}

export default About;