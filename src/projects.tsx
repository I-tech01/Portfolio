type Project = { title: string; description: string; link: string };

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio build with React and Tailwind",
    link: "#",
  },
  {
    title: "Admin Dashboard",
    description: "A responsive dashboard with charts and dark mode.",
    link: "#",
  },
];

const Projects = () => (
  <section id="projects" className="py-20 bg-white text-center">
    <h2 className="text-3xl font-bold mb-8">Projects</h2>
    <div className="grid md: grid-cols-2 gap-8 max-w-4xl mx-auto">
      {projects.map((project, idx) => (
        <div key={idx} className="bg-gray-100 p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <a href="{project.link}" className="text-indigo-600 font-medium">
            View Project →
          </a>
        </div>
      ))}{" "}
    </div>{" "}
  </section>
);
export default Projects;
