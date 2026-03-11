import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content glass-panel" style={{ padding: '3rem 2rem', borderTop: 'none' }}>
          <h2 className="footer-title">Let's Build Something Great</h2>
          <p className="hero-subtitle" style={{ marginBottom: '1.5rem', maxWidth: '500px' }}>
            Looking for a Godot Specialist to bring your game vision to life? 
            My inbox is always open for exciting projects and collaborations.
          </p>
          <a href="mailto:contact@example.com" className="glass-button glass-button-primary">
            <Mail size={16} />
            Get In Touch
          </a>
          <div className="footer-socials" style={{ marginTop: '2rem' }}>
            <a href="https://github.com/KennedyOuoch" className="glass-button" style={{ padding: '0.5rem' }}>
              <Github size={20} />
            </a>
            <a href="#" className="glass-button" style={{ padding: '0.5rem' }}>
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div style={{ marginTop: '2rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} Kennedy Oluoch. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
