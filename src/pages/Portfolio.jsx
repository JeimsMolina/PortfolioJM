import { motion } from 'framer-motion';
import portfolioItems from '../data/portfolioData';
import PortfolioItem from '../components/PortfolioItem';

const Portfolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}
    >
      <h1 style={{ color: 'var(--beige)', fontSize: '2.5rem', marginBottom: '2rem' }}>My Projects</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
      }}>
        {portfolioItems.map(item => (
          <PortfolioItem key={item.id} item={item} />
        ))}
      </div>
    </motion.section>
  );
};

export default Portfolio;
