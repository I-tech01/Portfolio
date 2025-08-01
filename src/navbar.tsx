const Navbar = () => (
  <nav className="fixed top-0 w-full bg-white shadow z-50">
    <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">Isaac</h1>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li>
          <a href="#about">About</a>
        </li>
         <li>
          <a href="#projects">Projects</a>
        </li>
         <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
  
);
export default Navbar;