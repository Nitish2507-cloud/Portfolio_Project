import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={40} /> },
    { name: "CSS", icon: <FaCss3Alt size={40} /> },
    { name: "JavaScript", icon: <FaJs size={40} /> },
    { name: "React.js", icon: <FaReact size={40} /> },
    { name: "Node.js", icon: <FaNodeJs size={40} /> },
    { name: "Express.js", icon: <SiExpress size={40} /> },
    { name: "MongoDB", icon: <SiMongodb size={40} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
    { name: "GitHub", icon: <FaGithub size={40} /> },
  ];

  return (
    <section
      id="skills"
      className="px-10 py-24 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#172554]"
    >
      <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              w-40 h-40
              bg-white/5
              backdrop-blur-lg
              border border-white/10
              rounded-3xl
              flex flex-col
              items-center
              justify-center
              gap-4
              hover:scale-110
              hover:border-cyan-400
              hover:shadow-cyan-500/20
              transition-all duration-300
            "
          >
            <div className="text-cyan-400">
              {skill.icon}
            </div>

            <p className="font-semibold text-white text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;