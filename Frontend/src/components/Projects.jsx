function Projects() {
  const projectData = [
    {
      title: "Healthcare Appointment System",
      description:
        "A full-stack healthcare booking system using MERN stack.",
    },

    {
      title: "Automatic Page Turner",
      description:
        "An assistive technology project for physically challenged users.",
    },

    {
      title: "Portfolio Website",
      description:
        "Modern responsive portfolio using React and Tailwind CSS.",
    },
  ];

  return (
   <section
  id="projects"
  className="px-10 py-24 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#030712]"
>

      <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
  Projects
</h2>

      <div className="grid md:grid-cols-3 gap-8">

        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl hover:scale-105 hover:border-cyan-400 hover:shadow-cyan-500/20 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400">
              {project.description}
            </p>

            <button className="mt-6 bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg">
              View Project
            </button>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;