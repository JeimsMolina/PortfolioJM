import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const PortfolioItem = ({ item, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/portfolio/${item.id}`} className="project-card glass">
        <div className="project-image-wrap">
          <img src={item.image} alt={item.title} loading="lazy" />
          <div className="project-overlay" />
          <span className="project-cta">
            <FiArrowUpRight />
          </span>
        </div>
        <div className="project-body">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </Link>

      <style>{`
        .project-card {
          display: block;
          overflow: hidden;
          transition: all 0.4s var(--ease);
          height: 100%;
        }
        .project-card:hover {
          transform: translateY(-8px);
          border-color: var(--border-strong);
          box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(212,165,116,0.08);
        }
        .project-image-wrap {
          position: relative;
          height: 240px;
          overflow: hidden;
        }
        .project-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s var(--ease);
        }
        .project-card:hover .project-image-wrap img {
          transform: scale(1.08);
        }
        .project-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(8,8,12,0.95) 0%, rgba(8,8,12,0.2) 60%, transparent 100%);
        }
        .project-cta {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: var(--accent);
          color: var(--black);
          font-size: 1.2rem;
          opacity: 0;
          transform: translateY(-8px) scale(0.8);
          transition: all 0.4s var(--ease);
          box-shadow: var(--shadow-glow);
        }
        .project-card:hover .project-cta {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .project-body {
          padding: 1.4rem 1.5rem 1.6rem;
        }
        .project-body h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--beige);
          transition: color 0.3s var(--ease);
        }
        .project-card:hover .project-body h3 { color: var(--accent-bright); }
        .project-body p {
          font-size: 0.92rem;
          color: var(--beige-dim);
          line-height: 1.55;
        }
      `}</style>
    </motion.div>
  );
};

export default PortfolioItem;
