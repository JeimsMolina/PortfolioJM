import { useParams, Link } from 'react-router-dom';
import portfolioItems from '../data/PortfolioData';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const PortfolioDetail = () => {
  const { id } = useParams();
  const project = portfolioItems.find((item) => item.id === id);
  const index = portfolioItems.findIndex((item) => item.id === id);

  const images = project?.galleryImages?.length ? project.galleryImages : [project?.image];
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    setImgIndex(0);
  }, [id]);

  useEffect(() => {
    if (!images || images.length < 2) return;
    const timer = setInterval(() => {
      setImgIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length, id]);

  if (!project) {
    return (
      <section className="detail container" style={{ textAlign: 'center', padding: '6rem 0' }}>
        <h1 style={{ fontSize: '2.4rem', marginBottom: '1rem' }}>Project not found</h1>
        <Link to="/portfolio" className="btn btn-outline"><FiArrowLeft /> Back to Portfolio</Link>
      </section>
    );
  }

  const next = portfolioItems[(index + 1) % portfolioItems.length];

  return (
    <motion.section
      className="detail container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to="/portfolio" className="back-link"><FiArrowLeft /> All projects</Link>

      <div className="detail-hero glass">
        <img src={images[imgIndex]} alt={project.title} />
        <div className="detail-hero-overlay" />
        {images.length > 1 && (
          <div className="detail-dots">
            {images.map((_, d) => (
              <span key={d} className={`detail-dot ${d === imgIndex ? 'active' : ''}`} />
            ))}
          </div>
        )}
      </div>

      <div className="detail-body">
        <span className="section-eyebrow">Project {project.id} / {portfolioItems.length}</span>
        <h1 className="detail-title">{project.title}</h1>
        <p className="detail-desc">{project.description}</p>
        <p className="detail-details">{project.details}</p>
      </div>

      <div className="detail-nav">
        <Link to="/portfolio" className="btn btn-outline"><FiArrowLeft /> Back to Portfolio</Link>
        <Link to={`/portfolio/${next.id}`} className="next-link">
          Next project <strong>{next.title}</strong> <FiArrowUpRight />
        </Link>
      </div>

      <style>{`
        .detail { padding: 4rem 0 5rem; }
        .back-link { display: inline-flex; align-items: center; gap: 0.5rem; color: var(--beige-dim); font-size: 0.92rem; margin-bottom: 2rem; transition: color 0.3s var(--ease); }
        .back-link:hover { color: var(--accent-bright); }
        .detail-hero { position: relative; height: clamp(280px, 45vw, 440px); overflow: hidden; border-radius: var(--radius); margin-bottom: 2.5rem; }
        .detail-hero img { width: 100%; height: 100%; object-fit: cover; }
        .detail-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(8,8,12,0.5), transparent 60%); }
        .detail-dots { position: absolute; bottom: 1.1rem; left: 50%; transform: translateX(-50%); display: flex; gap: 0.5rem; z-index: 3; }
        .detail-dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(245,240,225,0.4); transition: all 0.3s var(--ease); }
        .detail-dot.active { background: var(--accent-bright); width: 16px; border-radius: 4px; }
        .detail-body { max-width: 760px; }
        .detail-title { font-size: clamp(2rem, 4.5vw, 3rem); margin: 0.5rem 0 1.2rem; }
        .detail-desc { font-size: 1.15rem; color: var(--beige-dim); margin-bottom: 1.5rem; }
        .detail-details { font-size: 1rem; color: var(--beige-dim); line-height: 1.8; white-space: pre-line; padding-left: 1.2rem; border-left: 2px solid var(--accent); }
        .detail-nav { display: flex; justify-content: space-between; align-items: center; margin-top: 3.5rem; padding-top: 2rem; border-top: 1px solid var(--border); flex-wrap: wrap; gap: 1rem; }
        .next-link { display: inline-flex; align-items: center; gap: 0.5rem; color: var(--beige-dim); font-size: 0.92rem; transition: color 0.3s var(--ease); }
        .next-link strong { color: var(--accent-bright); margin-left: 0.3rem; }
        .next-link:hover { color: var(--accent-bright); }
      `}</style>
    </motion.section>
  );
};

export default PortfolioDetail;
