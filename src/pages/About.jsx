import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="about-container"
      style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem', color: 'var(--beige)' }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About Me</h1>

      <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.7' }}>
      I'm Jeims Molina, a Costa Rican who decided to pursue a career in the United States on an athletic 
      scholarship. I'm currently studying Computer Science and minoring in Business Administration at 
      Weber State University. I bring a unique combination of discipline, creativity, and logic to each of my projects.
      </p>

      <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--accent)' }}>Skills</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        {['React', 'JavaScript', 'CSS', 'Firebase', 'SQL', 'WPF', 'C#', 'C++', 'Excellent work ethic', 'Trilingual'].map((skill, i) => (
          <span
            key={i}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: 'var(--accent)',
              color: 'var(--black)',
              borderRadius: '25px',
              fontWeight: 'bold',
              fontSize: '0.95rem',
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--accent)' }}>Education</h2>
      <p style={{ marginBottom: '1rem' }}>
        🎓 <strong>Universidad Latina de Costa Rica</strong> —  2 semesters of Aerospace Engineering
      </p>
      <p>
      🎓 <strong>Weber State University</strong> — B.S. in Computer Science (Expected 2026)
      </p>

      <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--accent)' }}>Experience</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        <li style={{ marginBottom: '1rem' }}>
          <strong>Track & Field Athlete</strong> — Discus and Shot Put for Costa Rica national team and Weber State University
        </li>
        <li>
          <strong>Frontend, Backend, Databases</strong> — Worked for industrial system company as developer for 6 months.
        </li>
      </ul>
    </motion.section>
  );
};

export default About;
