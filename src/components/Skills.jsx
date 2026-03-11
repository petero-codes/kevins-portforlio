import { Wrench, Terminal, Cpu } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "Game Engines",
      icon: <Cpu size={20} className="text-accent" />,
      skills: ["Godot 3 & 4", "Unity 3D", "Unreal Engine (Familiar)"]
    },
    {
      title: "Languages",
      icon: <Terminal size={20} className="text-accent" />,
      skills: ["GDScript", "C#", "C++", "Python", "GLSL / ShaderLab"]
    },
    {
      title: "Tools & Skills",
      icon: <Wrench size={20} className="text-accent" />,
      skills: ["Git & GitHub", "Blender (Basic 3D)", "Aseprite", "Performance Optimization", "Game Design"]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">
          <Terminal size={24} className="text-accent" />
          Technical Proficiency
        </h2>
        <p className="hero-subtitle" style={{ fontSize: '1rem', marginBottom: '2.5rem' }}>
          A comprehensive overview of my technical expertise across game development domains and tools.
        </p>

        <div className="skills-grid">
          {categories.map((category, index) => (
            <div key={index} className="glass-panel" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                {category.icon}
                <h3 className="skill-category-title" style={{ margin: 0 }}>{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, i) => (
                  <li key={i} className="skill-item">
                    <span style={{ color: 'var(--text-accent)' }}>▸</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
