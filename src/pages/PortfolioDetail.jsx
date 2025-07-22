import { useParams, Link } from 'react-router-dom';
import portfolioItems from '../data/PortfolioData';
import { motion } from 'framer-motion';

const PortfolioDetail = () => {
  const { id } = useParams();
  const project = portfolioItems.find((item) => item.id === id);

  if (!project) {
    return (
      <div style={{ color: 'var(--beige)', textAlign: 'center', padding: '2rem' }}>
        <h2>Project not found</h2>
        <Link to="/portfolio" style={{ color: 'var(--accent)' }}>← Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '2rem',
        color: 'var(--beige)',
      }}
    >
      
      <div style={{
        position: 'relative',
        height: '400px',
        width: '100%',
        borderRadius: '10px',
        overflow: 'hidden',
        marginBottom: '2rem',
        boxShadow: '0 6px 16px rgba(0,0,0,0.5)'
      }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to top, rgba(18, 18, 18, 0.85), rgba(18, 18, 18, 0.2))',
        }} />
      </div>

      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{project.title}</h1>

      <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
        {project.description}
      </p>

      <p style={{
        fontSize: '1rem',
        color: 'var(--accent)',
        lineHeight: '1.6',
        whiteSpace: 'pre-line',
        marginBottom: '2rem',
      }}>
        {project.details}
      </p>

      <Link to="/portfolio" style={{ color: 'var(--accent)', fontWeight: 'bold' }}>
        ← Back to Portfolio
      </Link>
    </motion.section>
  );
};

export default PortfolioDetail;
