import React from 'react';
import choco from '../assets/choco.jpg';
import milk from '../assets/milk.jpg';
import carbory from '../assets/carbory.jpg';
import diary from '../assets/diary.jpg';

const ProductShowcase = () => {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== 'undefined' && window.innerWidth <= 768
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getStyles = (isMobile) => ({
    showcaseContainer: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #FFF8E7, #FFF4D6)'
    },
    nav: {
      display: 'flex',
      justifyContent: 'center',
      gap: '24px',
      padding: '24px',
      flexWrap: 'wrap'
    },
    navItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    navIcon: {
      background: 'white',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      width: '56px',
      height: '56px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    navImage: {
      width: '24px',
      height: '24px',
      objectFit: 'cover'
    },
    navLabel: {
      marginTop: '8px',
      fontSize: '14px',
      color: '#666'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px'
    },
    productSection: (isEven) => ({
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '32px',
      alignItems: 'center',
      marginBottom: '64px',
      padding: '32px 0',
      direction: (isEven && !isMobile) ? 'rtl' : 'ltr'
    }),
    productContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      direction: 'ltr',
      order: isMobile ? 2 : 0
    },
    contentWrapper: {
      display: 'flex',
      gap: '32px',
      alignItems: 'flex-start',
      flexDirection: isMobile ? 'column' : 'row'
    },
    mainContent: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    },
    productIcon: {
      display: 'flex',
      alignItems: 'center',
      gap: '2px'
    },
    iconImage: {
      width: '20px',
      height: '20px',
      objectFit: 'cover'
    },
    productTitle: {
      fontSize: isMobile ? '28px' : '36px',
      fontFamily: 'Georgia, serif',
      color: '#0D9488',
      marginBottom: '16px',
      textAlign: 'center'
    },
    productDescription: {
      color: '#666',
      lineHeight: 1.6,
      marginBottom: '24px',
      fontSize: isMobile ? '14px' : '16px',
      textAlign: 'center'
    },
    bulletList: {
      display: 'flex',
      flexDirection: 'column',
      width: isMobile ? '100%' : '100px'
    },
    bulletItem: {
      display: 'flex',
      alignItems: 'center',
      marginTop: isMobile ? '20px' : '40px',
      gap: '8px'
    },
    // bulletDot: {
    //   width: '8px',
    //   height: '8px',
    //   borderRadius: '50%',
    //   backgroundColor: '#F59E0B',
    //   flexShrink: 0
    // },
    seeMoreBtn: {
      backgroundColor: '#F59E0B',
      color: 'white',
      padding: '8px 24px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      width: 'fit-content',
      fontSize: isMobile ? '14px' : '16px',
      margin:'auto'
      
    },
    imageContainer: {
      display: 'flex',
      justifyContent: isMobile ? 'center' : 'flex-end',
      order: isMobile ? 1 : 0
    },
    productImage: {
      width: isMobile ? '100%' : '80%',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }
  });

  const styles = getStyles(isMobile);

  const navigationItems = [
    { icon: '/api/placeholder/24/24', label: 'cloudly' },
    { icon: '/api/placeholder/24/24', label: 'camera' },
    { icon: '/api/placeholder/24/24', label: 'startup' },
    { icon: '/api/placeholder/24/24', label: 'software' }
  ];

  const products = [
    {
      title: 'Waferollo',
      description: 'At Al Raiqa Dates, we are passionate about sharing the timeless tradition of arabian hospitality through the goodness of fresh dates, as the company',
      image: choco,
      icon: '/api/placeholder/20/20',
      bullets: ['']
    },
    {
      title: 'Dates Shake',
      description: 'At Al Raiqa Dates, we are passionate about sharing the timeless tradition of arabian hospitality through the goodness of fresh dates, as the company',
      image: diary,
      icon: '/api/placeholder/20/20',
      bullets: ['']
    },
    {
      title: 'Waferollo Syrup',
      description: 'At Al Raiqa Dates, we are passionate about sharing the timeless tradition of arabian hospitality through the goodness of fresh dates, as the company',
      image: carbory,
      icon: '/api/placeholder/20/20',
      bullets: ['' ]
    },
    {
      title: 'Dates Shake',
      description: 'At Al Raiqa Dates, we are passionate about sharing the timeless tradition of arabian hospitality through the goodness of fresh dates, as the company',
      image: milk,
      icon: '/api/placeholder/20/20',
      bullets: ['']
    }
  ];

  return (
    <div style={styles.showcaseContainer}>
      <nav style={styles.nav}>
        {navigationItems.map((item, index) => (
          <div key={index} style={styles.navItem}>
            <div style={styles.navIcon}>
              <img src={item.icon} alt={item.label} style={styles.navImage} />
            </div>
            <span style={styles.navLabel}>{item.label}</span>
          </div>
        ))}
      </nav>

      <div style={styles.container}>
        {products.map((product, index) => (
          <section key={index} style={styles.productSection(index % 2 !== 0)}>
            <div style={styles.imageContainer}>
              <img src={product.image} alt={product.title} style={styles.productImage} />
            </div>
            <div style={styles.productContent}>
              <div style={styles.contentWrapper}>
                <div style={styles.mainContent}>
                  <div style={styles.productIcon}>
                    <img src={product.icon} alt="" style={styles.iconImage} />
                  </div>
                  <h2 style={styles.productTitle}>{product.title}</h2>
                  <p style={styles.productDescription}>{product.description}</p>
                  <button 
                    style={styles.seeMoreBtn}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = '#D97706';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = '#F59E0B';
                    }}
                  >
                    See More
                  </button>
                </div>
                <ul style={styles.bulletList}>
                  {product.bullets.map((bullet, idx) => (
                    <li key={idx} style={styles.bulletItem}>
                      <div style={styles.bulletDot}></div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;