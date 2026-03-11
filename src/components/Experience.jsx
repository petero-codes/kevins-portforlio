import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Godot Engineer",
      company: "Indie Game Studio",
      date: "2023 - Present",
      description: "Developing visually stunning and highly optimized games using Godot 4.",
      points: [
        "Architected core gameplay loops and underlying entity component systems.",
        "Implemented custom shaders and particle systems for enhanced visual fidelity.",
        "Optimized 3D rendering performance across low-end and high-end hardware.",
        "Collaborated with artists to integrate intricate animations using AnimationTrees."
      ]
    },
    {
      role: "Game Developer",
      company: "Freelance",
      date: "2021 - 2023",
      description: "Built diverse prototypes and full releases across multiple genres.",
      points: [
        "Prototyped 2D platformers and Top-down RPGs in Godot 3.",
        "Wrote clean, modular GDScript for enemy AI and state machines.",
        "Designed UI layouts and responsive menus using Godot's Control nodes.",
        "Published small titles on itch.io as part of game jams."
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">
          <Briefcase size={24} className="text-accent" />
          Work Experience
        </h2>
        <p className="hero-subtitle" style={{ fontSize: '1rem', marginBottom: '2.5rem' }}>
          A journey through my professional game development career and key achievements
        </p>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item glass-panel">
              <div className="experience-header">
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <div className="experience-company">{exp.company}</div>
                </div>
                <span className="experience-date">{exp.date}</span>
              </div>
              <p className="experience-description">{exp.description}</p>
              <ul className="experience-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
