import { Github, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar glass-nav animate-fade-in">
      <div className="container">
        <a href="#" className="nav-logo">
          Kennedy Oluoch
        </a>
        <div className="nav-links">
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="https://github.com/KennedyOuoch" target="_blank" rel="noopener noreferrer" className="glass-button">
            <Github size={16} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
