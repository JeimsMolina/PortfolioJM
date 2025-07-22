import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkStyle = {
    color: 'var(--beige)',
    textDecoration: 'none',
    margin: '0 1rem',
    fontSize: '1.1rem',
    position: 'relative',
    padding: '0.3rem 0',
    transition: 'color 0.3s ease',
  };

  const activeStyle = {
    color: 'var(--accent)',
  };

  return (
    <nav style={{
      backgroundColor: 'var(--black)',
      borderBottom: '1px solid var(--accent)',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '3rem', 
      position: 'sticky',
      top: 0,
      zIndex: 10,
    }}>
      <NavLink to="/" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
        Home
      </NavLink>
      <NavLink to="/about" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
        About
      </NavLink>
      <NavLink to="/portfolio" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
        Portfolio
      </NavLink>
      <NavLink to="/contact" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
