import { motion } from 'framer-motion';
import portfolioItems from '../data/PortfolioData.js';
import PortfolioItem from '../components/PortfolioItem';

const Portfolio = () => {
  return (
    <section className="portfolio container">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
        <span className="section-eyebrow">Work</span>
        <h1 className="portfolio-title">My <span className="gradient-text">Projects</span></h1>
        <p className="portfolio-sub">
          A selection of things I've built — from real-time web apps to desktop systems.
          Each one taught me something new.
        </p>
      </motion.div>

      <div className="portfolio-grid">
        {portfolioItems.map((item, i) => (
          <PortfolioItem key={item.id} item={item} index={i} />
        ))}
      </div>

      <style>{`
        .portfolio { padding: 5rem 0; }
        .portfolio-title { font-size: clamp(2.4rem, 5vw, 3.6rem); margin-bottom: 1rem; }
        .portfolio-sub { color: var(--beige-dim); font-size: 1.08rem; max-width: 540px; margin-bottom: 3rem; }
        .portfolio-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.6rem; }
      `}</style>
    </section>
  );
};

export default Portfolio;
