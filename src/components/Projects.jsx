import { Code, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Neon Horizon",
      description: "A fast-paced cyberpunk 3D platformer featuring wall-running, gravity shifts, and neon aesthetics built entirely in Godot 4.",
      tags: ["Godot 4", "GDScript", "3D", "Shaders"],
      github: "#",
      demo: "#"
    },
    {
      title: "Pixel RPG Framework",
      description: "An open-source boilerplate for 2D top-down RPGs in Godot, including dialogue systems, inventory management, and quest tracking.",
      tags: ["Godot 3", "2D", "Tooling", "Open Source"],
      github: "#",
      demo: "#"
    },
    {
      title: "Voxel Terrain Generator",
      description: "A custom C++ GDNative plugin for real-time procedural voxel terrain generation and manipulation.",
      tags: ["Godot", "C++", "Procedural Generation"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          <Code size={24} className="text-accent" />
          Featured Projects
        </h2>
        <p className="hero-subtitle" style={{ fontSize: '1rem', marginBottom: '2.5rem' }}>
          Check out my public game development projects and plugins
        </p>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-panel">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <a href={project.github} className="glass-button" style={{ padding: '0.25rem 0.5rem' }}>
                    <Github size={16} />
                  </a>
                  <a href={project.demo} className="glass-button" style={{ padding: '0.25rem 0.5rem' }}>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
