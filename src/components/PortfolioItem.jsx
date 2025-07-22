import { Link } from 'react-router-dom';

const PortfolioItem = ({ item }) => {
  return (
    <Link to={`/portfolio/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '280px',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '1rem',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        {}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.1))',
          zIndex: 1,
        }} />

        {}
        <div style={{ zIndex: 2, color: 'var(--beige)', width: '100%' }}>
          <h3 style={{ marginBottom: '0.5rem', fontSize: '1.3rem' }}>{item.title}</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--accent)' }}>{item.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioItem;
