import { FacebookEmbed } from 'react-social-media-embed';
import { useState, useRef, useEffect } from 'react';
import { useAppData } from './components/DataProvider';
import LazyImage from './components/LazyImage';

// Utility functions
const getAllergenIcon = (allergen, allergenIcons) => allergenIcons[allergen] || "";

// Components
const AllergenIcons = ({ allergens = [], allergenIcons }) => (
  <div className="allergen-icons">
    {allergens.map((allergen, idx) => (
      <span key={idx} className="allergen-icon" title={allergen}>
        {getAllergenIcon(allergen, allergenIcons)}
      </span>
    ))}
  </div>
);

const MenuItem = ({ item, allergenIcons }) => (
  <div className="menu-item rustic">
    <div className="rustic-frame">
      <div className="item-image-rustic">
        <LazyImage
          src={item.image}
          alt={item.name}
          placeholderText="🍽️"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block'
          }}
        />
      </div>
      <div className="item-content-rustic">
        <h4 className="item-name">{item.name}</h4>
        <p className="item-description">{item.description}</p>
        <div className="item-footer">
          <span className="item-price">{item.price}</span>
          <AllergenIcons allergens={item.allergens} allergenIcons={allergenIcons} />
        </div>
      </div>
    </div>
  </div>
);

const MenuCategory = ({ title, items, allergenIcons }) => (
  <div className="menu-category">
    <h3 className="menu-category-title">{title}</h3>
    <div className="menu-grid">
      {items.map((item, index) => (
        <MenuItem key={index} item={item} allergenIcons={allergenIcons} />
      ))}
    </div>
  </div>
);

const BeverageItem = ({ item, allergenIcons }) => (
  <div className="beverage-item">
    <div className="beverage-info">
      <span className="beverage-name">{item.name}</span>
      {item.description && <span className="beverage-description">{item.description}</span>}
      {item.allergens?.length > 0 && (
        <div className="allergen-icons-small">
          <AllergenIcons allergens={item.allergens} allergenIcons={allergenIcons} />
        </div>
      )}
    </div>
    <span className="beverage-price">{item.price}</span>
  </div>
);

const BeverageCategory = ({ title, items, allergenIcons }) => (
  <div className="beverage-category">
    <h4 className="beverage-category-title">{title}</h4>
    <div className="beverage-list">
      {items.map((item, index) => (
        <BeverageItem key={index} item={item} allergenIcons={allergenIcons} />
      ))}
    </div>
  </div>
);

const MenuSubmenu = ({ activeSection, onSectionChange, menuSections }) => {
  const [underlineStyle, setUnderlineStyle] = useState({});
  const submenuRef = useRef(null);
  const buttonRefs = useRef({});

  useEffect(() => {
    const updateUnderline = () => {
      if (buttonRefs.current[activeSection] && submenuRef.current) {
        const button = buttonRefs.current[activeSection];
        const submenu = submenuRef.current;
        const submenuRect = submenu.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();

        setUnderlineStyle({
          width: buttonRect.width,
          left: buttonRect.left - submenuRect.left,
          top: buttonRect.bottom - submenuRect.top - 4,
        });
      }
    };

    updateUnderline();
    window.addEventListener('resize', updateUnderline);
    return () => window.removeEventListener('resize', updateUnderline);
  }, [activeSection]);

  return (
    <div className="menu-submenu" ref={submenuRef}>
      <div className="submenu-buttons">
        {Object.entries(menuSections).map(([key, section]) => (
          <button
            key={key}
            ref={el => buttonRefs.current[key] = el}
            className={`submenu-button ${activeSection === key ? 'active' : ''}`}
            onClick={() => onSectionChange(key)}
          >
            <span className="submenu-emoji">{section.emoji}</span>
            <span className="submenu-text">{section.title}</span>
          </button>
        ))}
      </div>
      <div
        className="submenu-underline"
        style={underlineStyle}
      />
    </div>
  );
};

const InfoCard = ({ icon, title, content }) => (
  <div className="col-md-4">
    <div className="info-card">
      <h4>{icon} {title}</h4>
      <p style={{ whiteSpace: 'pre-line' }}>{content}</p>
    </div>
  </div>
);

const SocialLink = ({ href, icon, children, iconType = "emoji" }) => (
  <a href={href} className="social-link" target="_blank" rel="noopener noreferrer">
    <span className="social-icon">
      {iconType === "image" ? (
        <LazyImage
          src={icon}
          alt={children}
          className="social-icon-image"
          placeholderText="🔗"
        />
      ) : (
        icon
      )}
    </span>
    <span className="social-text">{children}</span>
  </a>
);

const FacebookPost = ({ url }) => (
  <div className="mb-2">
    <FacebookEmbed
      url={url}
      placeholder={<div>Caricamento…</div>}
    />
  </div>
);

// Main Component
const HomePage = () => {
  const {
    menuData,
    restaurantInfo,
    allergenIcons,
    menuSections,
    beverageGroups
  } = useAppData();

  const [activeMenuSection, setActiveMenuSection] = useState('specialita');

  const renderActiveSection = () => {
    if (activeMenuSection === 'bevande') {
      return (
        <div className="menu-category">
          {beverageGroups.map(group => (
            <BeverageCategory
              key={group.category}
              title={group.title}
              items={group.items}
              allergenIcons={allergenIcons}
            />
          ))}
        </div>
      );
    }

    return (
      <MenuCategory
        title={menuSections[activeMenuSection]?.title}
        items={menuData[activeMenuSection] || []}
        allergenIcons={allergenIcons}
      />
    );
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section-compact">
        <div className="hero-overlay-compact">
          <h1 className="hero-title">Casa Ana</h1>
          <p className="hero-description">Autentica Cucina Rumena nel Cuore della Svizzera</p>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="container">
          <div className="row">
            <InfoCard
              icon="📍"
              title="Dove Siamo"
              content={restaurantInfo.address}
            />
            <InfoCard
              icon="📞"
              title="Prenotazioni o ordini da asporto"
              content={`${restaurantInfo.contact.phone}\n${restaurantInfo.contact.email}`}
            />
            <InfoCard
              icon="🕐"
              title="Orari di Apertura"
              content={restaurantInfo.hours}
            />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu-section container">
        <h2 className="section-title">Il Nostro Menu</h2>

        <MenuSubmenu
          activeSection={activeMenuSection}
          onSectionChange={setActiveMenuSection}
          menuSections={menuSections}
        />

        <div className="menu-content">
          {renderActiveSection()}
        </div>
      </section>

      {/* Map and Social Section */}
      <section className="map-social-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="map-title">Trovaci</h3>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2759.99094970622!2d9.124327776761273!3d46.230524681982644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47844f7998cd5f2b%3A0xf28d0ea9b6db59c8!2sGrotto%20Laura!5e0!3m2!1sen!2sch!4v1749294652232!5m2!1sen!2sch"
                  width="100%"
                  height="770"
                  style={{ border: 0, borderRadius: '10px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Restaurant Location"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="social-title">Seguici sui Social</h3>
              <div className="social-links">
                {Object.entries(restaurantInfo.social).map(([key, social]) => (
                  <SocialLink
                    key={key}
                    href={social.url}
                    icon={social.icon}
                    iconType="image"
                  >
                    {social.name}
                  </SocialLink>
                ))}
              </div>
              <div className="social-feed">
                <h4>Ultime dal nostro Facebook</h4>
                <FacebookPost url="https://www.facebook.com/permalink.php?story_fbid=122121324356847776&id=61575433280192" />
                <FacebookPost url="https://www.facebook.com/permalink.php?story_fbid=122121066182847776&id=61575433280192" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;