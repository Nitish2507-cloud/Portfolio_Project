function Navbar() {
  return (
    <nav className="backdrop-blur-md bg-white/10 border-b border-white/10 text-white px-6 md:px-10 py-4 flex justify-between items-center sticky top-0 z-50">

      <h1 className="text-3xl font-bold text-cyan-300">
        Nitish Portfolio
      </h1>

      <ul className="hidden md:flex gap-8 text-lg">

        <li>
          <a href="#" className="hover:text-cyan-300 transition">
            Home
          </a>
        </li>

        <li>
          <a href="#about" className="hover:text-cyan-300 transition">
            About
          </a>
        </li>

        <li>
          <a href="#projects" className="hover:text-cyan-300 transition">
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" className="hover:text-cyan-300 transition">
            Contact
          </a>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;