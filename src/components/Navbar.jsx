import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="navbar"
      data-scrolled={scrolled}
    >
      <div className="navbar-inner container">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">JM</span>
          <span className="brand-name">Jeims<span className="accent-text">.</span></span>
        </Link>

        <div className="nav-links">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className="nav-link">
              {({ isActive }) => (
                <span className={isActive ? 'nav-link-inner active' : 'nav-link-inner'}>
                  {link.label}
                  <span className="nav-underline" />
                </span>
              )}
            </NavLink>
          ))}
        </div>

        <div className="nav-socials">
          <a href="https://github.com/JeimsMolina" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://linkedin.com/in/jeims-molina-322212264" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
        </div>

        <button className="menu-toggle" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => 'mobile-link' + (isActive ? ' active' : '')}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mobile-socials">
              <a href="https://github.com/JeimsMolina" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
              <a href="https://linkedin.com/in/jeims-molina-322212264" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar { position: sticky; top: 0; z-index: 100; transition: all 0.4s var(--ease); border-bottom: 1px solid transparent; }
        .navbar[data-scrolled='true'] { background: rgba(8, 8, 12, 0.7); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); border-bottom: 1px solid var(--border); }
        .navbar-inner { display: flex; align-items: center; justify-content: space-between; padding: 1.1rem 0; }
        .brand { display: flex; align-items: center; gap: 0.6rem; font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; }
        .brand-mark { display: grid; place-items: center; width: 38px; height: 38px; border-radius: 10px; background: linear-gradient(135deg, var(--accent), var(--accent-bright)); color: var(--black); font-size: 0.9rem; font-weight: 800; box-shadow: var(--shadow-glow); }
        .nav-links { display: flex; gap: 2.4rem; }
        .nav-link { color: var(--beige-dim); font-size: 0.98rem; font-weight: 500; position: relative; }
        .nav-link-inner { position: relative; padding: 0.3rem 0; transition: color 0.3s var(--ease); }
        .nav-link-inner.active { color: var(--accent-bright); }
        .nav-underline { position: absolute; left: 0; bottom: -4px; width: 0; height: 2px; background: linear-gradient(90deg, var(--accent), var(--accent-bright)); border-radius: 2px; transition: width 0.35s var(--ease); }
        .nav-link:hover .nav-underline, .nav-link-inner.active .nav-underline { width: 100%; }
        .nav-socials { display: flex; gap: 1.1rem; font-size: 1.2rem; }
        .nav-socials a { color: var(--beige-dim); transition: all 0.3s var(--ease); }
        .nav-socials a:hover { color: var(--accent-bright); transform: translateY(-2px); }
        .menu-toggle { display: none; background: none; border: none; color: var(--beige); font-size: 1.6rem; cursor: pointer; }
        .mobile-menu { overflow: hidden; background: rgba(8, 8, 12, 0.95); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); border-top: 1px solid var(--border); display: flex; flex-direction: column; padding: 0 1.5rem; }
        .mobile-link { padding: 1rem 0; color: var(--beige-dim); font-weight: 500; border-bottom: 1px solid var(--border); font-size: 1.05rem; }
        .mobile-link.active { color: var(--accent-bright); }
        .mobile-socials { display: flex; gap: 1.5rem; padding: 1.2rem 0; font-size: 1.4rem; }
        @media (max-width: 820px) { .nav-links, .nav-socials { display: none; } .menu-toggle { display: block; } }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
