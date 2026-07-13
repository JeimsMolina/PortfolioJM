import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowDown, FiArrowUpRight } from 'react-icons/fi';
import jeimsImg from '../assets/MyPic.jpg';
import portfolioItems from '../data/PortfolioData.js';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const Home = () => {
  const featured = portfolioItems.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="hero container">
        <motion.div className="hero-content" variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="hero-badge">
            <span className="pulse-dot" /> Available for opportunities
          </motion.div>

          <motion.h1 variants={item} className="hero-title">
            Hey, I'm <span className="gradient-text">Jeims Molina</span>
          </motion.h1>

          <motion.p variants={item} className="hero-sub">
            Computer Science student & NCAA Division I athlete crafting performant,
            human-centered software — from full-stack web apps to desktop systems.
          </motion.p>

          <motion.div variants={item} className="hero-actions">
            <Link to="/portfolio" className="btn btn-primary">
              View my work <FiArrowRight />
            </Link>
            <Link to="/contact" className="btn btn-outline">Get in touch</Link>
          </motion.div>

          <motion.div variants={item} className="hero-stats">
            <div className="stat"><span className="stat-num">3+</span><span className="stat-label">Years D1 Athletics</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="stat-num">10+</span><span className="stat-label">Technologies</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="stat-num">4</span><span className="stat-label">Featured Projects</span></div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait-glow" />
          <div className="portrait-frame">
            <img src={jeimsImg} alt="Jeims Molina" />
          </div>
        </motion.div>

        <motion.div className="scroll-hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}>
          <FiArrowDown /><span>Scroll</span>
        </motion.div>

        <style>{`
          .hero { min-height: 100vh; display: grid; grid-template-columns: 1.1fr 0.9fr; align-items: center; gap: 3rem; padding-top: 4rem; padding-bottom: 4rem; position: relative; }
          .hero-badge { display: inline-flex; align-items: center; gap: 0.55rem; padding: 0.45rem 1rem; border-radius: 50px; background: var(--bg-card); border: 1px solid var(--border-strong); font-size: 0.85rem; color: var(--beige-dim); margin-bottom: 1.6rem; backdrop-filter: blur(10px); }
          .pulse-dot { width: 8px; height: 8px; border-radius: 50%; background: #4ade80; box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.6); animation: pulse 2s infinite; }
          @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.6); } 70% { box-shadow: 0 0 0 10px rgba(74, 222, 128, 0); } 100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0); } }
          .hero-title { font-size: clamp(2.6rem, 6vw, 4.6rem); line-height: 1.05; margin-bottom: 1.4rem; }
          .hero-sub { font-size: 1.12rem; color: var(--beige-dim); max-width: 520px; margin-bottom: 2.2rem; }
          .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 3rem; }
          .hero-stats { display: flex; align-items: center; gap: 1.5rem; }
          .stat { display: flex; flex-direction: column; }
          .stat-num { font-family: var(--font-display); font-size: 1.9rem; font-weight: 700; color: var(--accent-bright); line-height: 1; }
          .stat-label { font-size: 0.8rem; color: var(--beige-dim); margin-top: 0.3rem; }
          .stat-divider { width: 1px; height: 36px; background: var(--border-strong); }
          .hero-portrait { position: relative; display: grid; place-items: center; max-width: 460px; width: 100%; justify-self: end; }
          .portrait-glow { position: absolute; inset: -20px; background: radial-gradient(circle, var(--accent-glow), transparent 70%); filter: blur(50px); opacity: 0.6; }
          .portrait-frame { position: relative; width: 100%; aspect-ratio: 4/5; border-radius: 28px; overflow: hidden; border: 1px solid var(--border-strong); box-shadow: 0 30px 80px rgba(0,0,0,0.5); }
          .portrait-frame img { width: 100%; height: 100%; object-fit: cover; }
          .portrait-frame::after { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, transparent 60%, rgba(212,165,116,0.18)); }
          .scroll-hint { position: absolute; bottom: 1.5rem; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 0.4rem; color: var(--beige-dim); font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; animation: bob 2.2s var(--ease) infinite; }
          @keyframes bob { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(8px); } }
          @media (max-width: 920px) { .hero { grid-template-columns: 1fr; text-align: center; min-height: auto; padding-top: 3rem; } .hero-portrait { justify-self: center; order: -1; max-width: 360px; } .hero-badge, .hero-actions, .hero-stats { justify-content: center; } .hero-stats { flex-wrap: wrap; gap: 1rem; } .hero-sub { margin-left: auto; margin-right: auto; } .scroll-hint { display: none; } }
        `}</style>
      </section>

      {/* FEATURED WORK */}
      <section className="home-section container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="home-section-head"
        >
          <span className="section-eyebrow">Selected work</span>
          <div className="home-section-title-row">
            <h2 className="home-section-title">Featured <span className="gradient-text">projects</span></h2>
            <Link to="/portfolio" className="home-section-link">View all <FiArrowUpRight /></Link>
          </div>
        </motion.div>

        <div className="home-featured-grid">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={`/portfolio/${p.id}`} className="home-feature-card glass">
                <div className="home-feature-img">
                  <img src={p.image} alt={p.title} loading="lazy" />
                  <div className="home-feature-overlay" />
                </div>
                <div className="home-feature-body">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <span className="home-feature-cta">Read more <FiArrowRight /></span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <style>{`
          .home-section { padding: 5rem 0; }
          .home-section-head { margin-bottom: 2.5rem; }
          .home-section-title-row { display: flex; align-items: flex-end; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
          .home-section-title { font-size: clamp(1.8rem, 4vw, 2.8rem); }
          .home-section-link { display: inline-flex; align-items: center; gap: 0.35rem; color: var(--accent-bright); font-size: 0.95rem; font-weight: 500; transition: gap 0.3s var(--ease); }
          .home-section-link:hover { gap: 0.7rem; }
          .home-featured-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
          .home-feature-card { display: block; overflow: hidden; transition: all 0.4s var(--ease); height: 100%; }
          .home-feature-card:hover { transform: translateY(-8px); border-color: var(--border-strong); box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
          .home-feature-img { position: relative; height: 200px; overflow: hidden; }
          .home-feature-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s var(--ease); }
          .home-feature-card:hover .home-feature-img img { transform: scale(1.08); }
          .home-feature-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(8,8,12,0.6), transparent 70%); }
          .home-feature-body { padding: 1.3rem 1.4rem 1.5rem; }
          .home-feature-body h3 { font-size: 1.2rem; margin-bottom: 0.4rem; transition: color 0.3s var(--ease); }
          .home-feature-card:hover .home-feature-body h3 { color: var(--accent-bright); }
          .home-feature-body p { font-size: 0.9rem; color: var(--beige-dim); line-height: 1.55; margin-bottom: 0.8rem; }
          .home-feature-cta { display: inline-flex; align-items: center; gap: 0.35rem; color: var(--accent); font-size: 0.88rem; font-weight: 500; transition: gap 0.3s var(--ease); }
          .home-feature-card:hover .home-feature-cta { gap: 0.6rem; }
        `}</style>
      </section>

      {/* ABOUT TEASER */}
      <section className="container">
        <motion.div
          className="home-about glass"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="home-about-text">
            <span className="section-eyebrow">About</span>
            <h2 className="home-section-title">Discipline meets <span className="gradient-text">curiosity</span>.</h2>
            <p>
              I'm a Computer Science student and NCAA Division I athlete originally from Costa Rica,
              now studying in the US on an athletic scholarship. I build full-stack web apps,
              database-driven systems, and desktop software with a focus on clean architecture and usability.
            </p>
            <Link to="/about" className="btn btn-outline" style={{ marginTop: '1.4rem' }}>
              More about me <FiArrowRight />
            </Link>
          </div>
          <div className="home-about-chips">
            {['React', 'Node.js', 'Firebase', 'C#', '.NET', 'MongoDB', 'Java', 'Docker'].map((s) => (
              <span key={s} className="skill-chip">{s}</span>
            ))}
          </div>
        </motion.div>
        <style>{`
          .home-about { display: grid; grid-template-columns: 1.3fr 1fr; gap: 2.5rem; padding: 3rem; align-items: center; margin-bottom: 5rem; }
          .home-about-text p { color: var(--beige-dim); font-size: 1.05rem; margin-top: 1rem; }
          .home-about-chips { display: flex; flex-wrap: wrap; gap: 0.6rem; justify-content: flex-end; }
          .skill-chip { padding: 0.5rem 1.1rem; border-radius: 50px; background: var(--bg-card); border: 1px solid var(--border-strong); font-size: 0.88rem; font-weight: 500; color: var(--beige); transition: all 0.3s var(--ease); }
          .skill-chip:hover { border-color: var(--accent); color: var(--accent-bright); background: rgba(212,165,116,0.08); }
          @media (max-width: 820px) { .home-about { grid-template-columns: 1fr; padding: 2rem; } .home-about-chips { justify-content: flex-start; } }
        `}</style>
      </section>

      {/* CTA */}
      <section className="container">
        <motion.div
          className="home-cta"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2>Have a project in mind?</h2>
          <p>I'm always open to talking about new work, collaborations, or ideas.</p>
          <Link to="/contact" className="btn btn-primary">Let's talk <FiArrowRight /></Link>
        </motion.div>
        <style>{`
          .home-cta { text-align: center; padding: 5rem 1rem; margin-bottom: 4rem; }
          .home-cta h2 { font-size: clamp(2rem, 4.5vw, 3.2rem); margin-bottom: 1rem; }
          .home-cta p { color: var(--beige-dim); font-size: 1.1rem; margin-bottom: 2rem; }
        `}</style>
      </section>
    </>
  );
};

export default Home;
