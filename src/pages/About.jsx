import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiDownload, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const skills = [
  'React', 'JavaScript', 'Node.js', 'Express', 'Firebase', 'MongoDB',
  'MySQL', 'C#', 'WPF', '.NET', 'C++', 'Java', 'Docker', 'Git/GitHub',
];

const docs = [
  { href: '/Jeims_Molina_Resume.pdf', label: 'Resume' },
  { href: '/Coverletter.pdf', label: 'Cover Letter' },
  { href: '/References.pdf', label: 'References' },
  { href: '/LoR.pdf', label: 'Letter of Recommendation' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

const About = () => {
  return (
    <section className="about container">
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show" className="about-intro">
        <span className="section-eyebrow">About</span>
        <h1 className="about-title">Discipline meets <span className="gradient-text">curiosity</span>.</h1>
      </motion.div>

      <div className="about-grid">
        <motion.div custom={1} variants={fadeUp} initial="hidden" animate="show" className="about-text">
          <p>
            I'm <strong className="accent-text">Jeims Molina</strong>, a Computer Science student and
            NCAA Division I athlete currently based in the United States. Originally from Costa Rica,
            I moved here on an athletic scholarship and learned quickly how to balance high-performance
            athletics with demanding technical coursework.
          </p>
          <p>
            That experience shaped how I approach software engineering: with discipline, consistency,
            and a strong focus on execution. I enjoy building real, usable applications — whether that's
            responsive React apps, full-stack systems, or desktop software — and continuously improving
            both my technical skills and myself.
          </p>
        </motion.div>

        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="show" className="about-cta glass">
          <div className="cta-row">
            <motion.a href="https://linkedin.com/in/jeims-molina-322212264" target="_blank" rel="noopener noreferrer" className="btn btn-primary" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <FiLinkedin /> LinkedIn
            </motion.a>
            <motion.a href="https://github.com/JeimsMolina" target="_blank" rel="noopener noreferrer" className="btn btn-outline" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <FiGithub /> GitHub
            </motion.a>
          </div>
          <Link to="/contact" className="about-contact-link">
            Or send me a message <FiArrowRight />
          </Link>
        </motion.div>
      </div>

      {/* Skills */}
      <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show" className="about-section">
        <span className="section-eyebrow">Stack</span>
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              className="skill-chip"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, scale: 1.05 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Education + Experience */}
      <div className="about-cols">
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="show" className="glass about-card">
          <span className="section-eyebrow">Education</span>
          <h3>Weber State University</h3>
          <p className="about-degree">B.S. in Computer Science & Minor in Data Analytics</p>
          <p className="about-meta">Expected Spring 2027 · GPA 3.5</p>
          <div className="coursework">
            <strong>Relevant Coursework</strong>
            <p>Data Structures & Algorithms, Operating Systems, Advanced Database Systems, Software Engineering, Web & Front-End Development, Database Design and Management</p>
          </div>
        </motion.div>

        <motion.div custom={5} variants={fadeUp} initial="hidden" animate="show" className="glass about-card">
          <span className="section-eyebrow">Experience</span>
          <div className="exp-item">
            <h3>NCAA Division I Track & Field</h3>
            <p className="exp-sub">3 Years · Student Athlete</p>
            <p>Developed discipline, leadership, time management, and performance under pressure while competing at a high level.</p>
          </div>
          <div className="exp-item">
            <h3>Software Projects</h3>
            <p className="exp-sub">Academic & Personal</p>
            <p>Built full-stack web apps, database-driven systems, and desktop applications using React, Node.js, Firebase, MongoDB, C#, and WPF with a strong focus on clean architecture and usability.</p>
          </div>
        </motion.div>
      </div>

      {/* Documents */}
      <motion.div custom={6} variants={fadeUp} initial="hidden" animate="show" className="about-section">
        <span className="section-eyebrow">Documents</span>
        <h2>Download</h2>
        <div className="docs-grid">
          {docs.map((doc) => (
            <motion.a key={doc.href} href={doc.href} download className="doc-card glass" whileHover={{ y: -6 }} whileTap={{ scale: 0.98 }}>
              <FiDownload className="doc-icon" />
              <span>{doc.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      <style>{`
        .about { padding: 5rem 0 4rem; }
        .about-title { font-size: clamp(2.2rem, 5vw, 3.4rem); margin-top: 0.5rem; }
        .about-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 2.5rem; margin-top: 2.5rem; align-items: start; }
        .about-text p { font-size: 1.08rem; color: var(--beige-dim); margin-bottom: 1.2rem; }
        .about-cta { padding: 2rem; display: flex; flex-direction: column; gap: 1.2rem; }
        .cta-row { display: flex; gap: 0.8rem; flex-wrap: wrap; }
        .about-contact-link { display: inline-flex; align-items: center; gap: 0.4rem; color: var(--accent-bright); font-size: 0.92rem; font-weight: 500; }
        .about-section { margin-top: 4rem; }
        .about-section h2 { font-size: 2rem; margin-bottom: 1.5rem; }
        .skills-grid { display: flex; flex-wrap: wrap; gap: 0.7rem; }
        .skill-chip { padding: 0.5rem 1.1rem; border-radius: 50px; background: var(--bg-card); border: 1px solid var(--border-strong); font-size: 0.9rem; font-weight: 500; color: var(--beige); transition: all 0.3s var(--ease); cursor: default; }
        .skill-chip:hover { border-color: var(--accent); color: var(--accent-bright); background: rgba(212,165,116,0.08); }
        .about-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 4rem; }
        .about-card { padding: 2rem; }
        .about-card h3 { font-size: 1.3rem; margin: 0.5rem 0; }
        .about-degree { color: var(--beige-dim); margin-bottom: 0.3rem; }
        .about-meta { color: var(--accent); font-size: 0.9rem; font-family: var(--font-mono); margin-bottom: 1.2rem; }
        .coursework { margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border); }
        .coursework strong { font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--beige-dim); }
        .coursework p { margin-top: 0.5rem; font-size: 0.92rem; color: var(--beige-dim); }
        .exp-item { margin-bottom: 1.4rem; }
        .exp-item:last-child { margin-bottom: 0; }
        .exp-item h3 { font-size: 1.1rem; margin: 0 0 0.2rem; }
        .exp-sub { color: var(--accent); font-size: 0.85rem; font-family: var(--font-mono); margin-bottom: 0.5rem; }
        .exp-item p { font-size: 0.95rem; color: var(--beige-dim); }
        .docs-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; }
        .doc-card { display: flex; align-items: center; gap: 0.8rem; padding: 1.2rem 1.4rem; color: var(--beige); transition: all 0.3s var(--ease); }
        .doc-card:hover { border-color: var(--accent); color: var(--accent-bright); }
        .doc-icon { font-size: 1.3rem; }
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr; }
          .about-cols { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default About;
