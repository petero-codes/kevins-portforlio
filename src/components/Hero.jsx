import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section hero">
      <div className="container">
        <span className="hero-greeting animate-fade-in">Hi, I'm Kennedy Oluoch</span>
        <h1 className="hero-title animate-fade-in animate-delay-1">
          I build interactive worlds that captivate players.
        </h1>
        <p className="hero-subtitle animate-fade-in animate-delay-2">
          Godot Specialist and Game Developer creating immersive digital experiences that push creative boundaries. Gameplay mechanics and optimization are my north star.
        </p>
        <div className="hero-actions animate-fade-in animate-delay-3">
          <a href="#projects" className="glass-button glass-button-primary">
            View Projects
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
