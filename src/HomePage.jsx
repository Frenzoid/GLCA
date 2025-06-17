import { FacebookEmbed } from 'react-social-media-embed';
import { useMemo, useState, useRef, useEffect } from 'react';

// Import all menu item images
import item2 from './assets/menu/2.png'
import item3 from './assets/menu/3.png'
import item4 from './assets/menu/4.png'
import item5 from './assets/menu/5.png'
import item6 from './assets/menu/6.png'
import item7 from './assets/menu/7.png'
import item8 from './assets/menu/8.png'
import item10 from './assets/menu/10.png'
import item11 from './assets/menu/11.png'
import item14 from './assets/menu/14.png'
import item15 from './assets/menu/15.png'
import item16 from './assets/menu/16.png'
import item18 from './assets/menu/18.png'
import item19 from './assets/menu/19.png'
import item20 from './assets/menu/20.png'
import item21 from './assets/menu/21.png'
import item24 from './assets/menu/24.png'
import item25 from './assets/menu/25.png'
import item26 from './assets/menu/26.png'
import item27 from './assets/menu/27.png'
import item30 from './assets/menu/30.png'
import item31 from './assets/menu/31.png'
import item32 from './assets/menu/32.png'
import item33 from './assets/menu/33.png'
import item34 from './assets/menu/34.png'
import item35 from './assets/menu/35.png'
import item36 from './assets/menu/36.png'
import item37 from './assets/menu/37.png'
import item41 from './assets/menu/41.png'
import item42 from './assets/menu/42.png'
import item43 from './assets/menu/43.png'
import item44 from './assets/menu/44.png'
import item45 from './assets/menu/45.png'
import item46 from './assets/menu/46.png'
import item47 from './assets/menu/47.png'
import item48 from './assets/menu/48.png'
import mici2 from './assets/menu/mici2.jpg'

// import logos
import bookig from './assets/booking.svg';
import facebook from './assets/facebook.png';
import tiktok from './assets/tiktok.svg';
import whatsapp from './assets/whatsapp.webp';

// Constants
const ALLERGEN_ICONS = {
  glutine: "🌾",
  lattosio: "🥛",
  uova: "🥚",
  pesce: "🐟",
  crostacei: "🦐",
  molluschi: "🦪",
  vegan: "🌱",
  halal: "☪️"
};

const BEVERAGE_CATEGORIES = {
  birre: '🍺 Birre',
  analcoliche: '🥤 Analcoliche',
  aperitivi: '🥃 Aperitivi & Digestivi',
  prosecco: '🍾 Prosecco',
  vini_rossi: '🍷 Vini Rossi',
  vini_bianchi: '🥂 Vini Bianchi',
  caffe: '☕ Caffè',
  cocktails: '🍸 Cocktails'
};

const MENU_SECTIONS = {
  antipasti: { title: "Insalate", emoji: "🥗" },
  carni: { title: "Carne & Taglieri", emoji: "🥩" },
  specialita: { title: "Specialità", emoji: "⭐" },
  pesce: { title: "Pesce", emoji: "🐟" },
  dolci: { title: "Dolci", emoji: "🍰" },
  bevande: { title: "Bevande", emoji: "🍷" }
};

const RESTAURANT_INFO = {
  address: "Caraa de San Fedee 2\n6535 Roveredo Svizzera",
  hours: "Mar-Dom: 11:00 - 16:00 | 18:00 - 22:00\nLun: Chiuso",
  contact: {
    phone: "076 617 00 55",
    email: "casaanaristorante@yahoo.com"
  },
  social: {
    facebook: {
      url: "https://www.facebook.com/profile.php?id=61575433280192",
      icon: facebook,
      name: "Facebook"
    },
    whatsapp: {
      url: "https://wa.me/41766170055",
      icon: whatsapp,
      name: "WhatsApp"
    },
    bookig: {
      url: "https://www.booking.com/Share-QWPJCuU",
      icon: bookig,
      name: "Prenota ora"
    },
    tiktok: {
      url: "https://www.tiktok.com/@ristorante.casa.a",
      icon: tiktok,
      name: "TikTok"
    }
  }
};


// Menu Data
const MENU_DATA = {
  antipasti: [
    {
      name: "Insalata Caesar",
      description: "Con pollo, crostini, pomodorini, salsa caesar, parmigiano. 350–400 g",
      price: "18.50 CHF",
      image: item4,
      allergens: ["uova", "glutine", "lattosio"]
    },
    {
      name: "Insalata Rusa",
      description: "Insalata russa tradizionale. 250-280 g",
      price: "18.50 CHF",
      image: item3,
      allergens: ["uova"]
    },
    {
      name: "Insalata mista",
      description: "Pomodorini, insalata, olive nere, tonno, uova, cipolla rossa. 350–400 g",
      price: "18.50 CHF",
      image: item5,
      allergens: ["pesce", "uova"]
    },
    {
      name: "Mousse di melanzane con maionese",
      description: "Servito con pane tostato, pomodori e formaggio feta. 350 g",
      price: "18.50 CHF",
      image: item2,
      allergens: ["lattosio"]
    }
  ],
  pesce: [
    {
      name: "Pesce alla griglia con verdure (Orata)",
      description: "Gegrillter fisch mit gemüse. 500-600 g",
      price: "27.00 CHF",
      image: item41,
      allergens: ["pesce"]
    },
    {
      name: "Salamoia di pesce con polenta",
      description: "Saramura de peste cu mămăligută. 500-600 g",
      price: "27.00 CHF",
      image: item42,
      allergens: ["pesce"]
    },
    {
      name: "Gamberetti all'aglio",
      description: "Knoblauchgarnelen",
      price: "29.00 CHF",
      image: item43,
      allergens: ["crostacei"]
    },
    {
      name: "Polpo alla galiziana",
      description: "Oktopus nach galizischer Art",
      price: "30.00 CHF",
      image: item44,
      allergens: ["molluschi"]
    },
    {
      name: "Fritto misto alla Spagna",
      description: "Gemischtes fritho. 22.00 / CHF 1 pers - 35.00 / CHF 2 pers",
      price: "22.00 CHF - 35.00 CHF",
      image: item45,
      allergens: ["pesce", "crostacei", "molluschi"]
    }
  ],
  dolci: [
    {
      name: "Traditionelle Papanasi",
      description: "Papanasi tradizionali rumeni. 1/2 porzione - 9.50 CHF",
      price: "21.00 CHF",
      image: item46,
      allergens: ["glutine", "lattosio", "uova"]
    },
    {
      name: "Panna Cotta",
      description: "Dessert italiano classico",
      price: "9.00 CHF",
      image: item47,
      allergens: ["lattosio"]
    },
    {
      name: "Pancake con marmellata",
      description: "Pancake con marmellata di lamponi o cioccolato",
      price: "9.00 CHF",
      image: item48,
      allergens: ["glutine", "lattosio", "uova"]
    }
  ],
  carni: [
    {
      name: "Mix di salumi e formaggi (2 pers.)",
      description: "Mix di salumi e formaggi assortiti con vino bianco incluso. 190-200 g",
      price: "36.00 CHF",
      image: item10,
      allergens: ["glutine", "lattosio"]
    },
    {
      name: "Tagliere salumi & formaggi (4 pers.)",
      description: "Formaggi e salumi regionali con 4 bicchieri di prosecco inclusi. 500-520 g",
      price: "80.00 CHF",
      image: item11,
      allergens: ["glutine", "lattosio"]
    },
    {
      name: "Cevapcici alla griglia",
      description: "Mici la gratar serviti con patatine, formaggio grattugiato, sottaceti",
      price: "25.50 CHF",
      image: mici2,
      allergens: ["glutine"]
    },
    {
      name: "Costolette di agnello",
      description: "Servite con crostini rustici e salsa segreta",
      price: "27.00 CHF",
      image: item31,
      allergens: []
    },
    {
      name: "Cotoleta di pollo con patatine",
      description: "Cotoletta di pollo impanata con patatine fritte.",
      price: "20.00 CHF",
      image: item18,
      allergens: []
    },
    {
      name: "Cosce di pollo disossate",
      description: "Pulpa di pollo grigliata senza ossa. 300 g",
      price: "29.50 CHF",
      image: item30,
      allergens: []
    },
    {
      name: "Collo di maiale grigliato",
      description: "Ceafă di porc grigliata. 300 g",
      price: "28.00 CHF",
      image: item32,
      allergens: []
    },
    {
      name: "Filetto di maiale alla griglia",
      description: "Muschi de porc la gratar. 300 g",
      price: "28.00 CHF",
      image: item33,
      allergens: []
    },
    {
      name: "Costine di maiale alla griglia",
      description: "Coaste de porc la gratar grigliate",
      price: "27.50 CHF",
      image: item34,
      allergens: []
    },
    {
      name: "Entrecot di manzo Swiss",
      description: "Con salsa gorgonzola, asparagi, patatine fritte. 300 g",
      price: "36.00 CHF",
      image: item35,
      allergens: ["lattosio"]
    },
    {
      name: "Filetto di manzo alla griglia",
      description: "Servito con patate rustiche e salsa chimichurri. 250-270 g",
      price: "46.00 CHF",
      image: item36,
      allergens: []
    },
    {
      name: "Grigliata mista Casa Ana (4 pers.)",
      description: "Cevapcici, collo di maiale, cosce di pollo, salsicce, spiedini. Una bottiglia di vino inclusa",
      price: "169.00 CHF",
      image: item37,
      allergens: ["glutine"]
    }
  ],
  specialita: [
    {
      name: "Sarmale tradizionali",
      description: "Involtini in verza serviti con panna acida e polenta. 500 g",
      price: "27.00 CHF",
      image: item14,
      allergens: ["lattosio"]
    },
    {
      name: "Frittura di maiale con polenta",
      description: "Pomana porcului cu mamaliguta si muraturi",
      price: "26.50 CHF",
      image: item15,
      allergens: []
    },
    {
      name: "Mix carne & luganighetta",
      description: "Tochitura moldoveneasca. 500 g",
      price: "27.50 CHF",
      image: item16,
      allergens: []
    },
    {
      name: "Zuppa di trippa di vitello",
      description: "Servita con panna acida. Solo sabato e domenica. 450–500 g",
      price: "19.50 CHF",
      image: item8,
      allergens: ["lattosio"]
    },
    {
      name: "Zuppa di manzo",
      description: "Ciorba de vacuta ardeleneasca con panna acida. 450-500 g",
      price: "18.50 CHF",
      image: item6,
      allergens: ["lattosio"]
    },
    {
      name: "Zuppa di fagioli con carne affumicata",
      description: "Servita con insalata di cipolle rosse e prezzemolo. 450–500 g",
      price: "18.50 CHF",
      image: item7,
      allergens: []
    },
    {
      name: "Spaghetti alla bolognese",
      description: "Spaghetti al ragù tradizionale",
      price: "22.50 CHF",
      image: item19,
      allergens: ["glutine"]
    },
    {
      name: "Spaghetti carbonara",
      description: "Spaghetti con guanciale e uova",
      price: "22.50 CHF",
      image: item20,
      allergens: ["glutine", "uova"]
    },
    {
      name: "Spaghetti ai frutti di mare",
      description: "Spaghetti con pesce e crostacei",
      price: "26.50 CHF",
      image: item24,
      allergens: ["pesce", "crostacei", "molluschi"]
    },
    {
      name: "Paella Valenciana Autentica",
      description: "Pollo o frutti di mare (minimo 2 persone). Pollo: 27.00 CHF / pers | Frutti di mare: 30.00 CHF/pers",
      price: "🐔: 27.00 CHF | 🦐: 30.00 CHF",
      image: item21,
      allergens: ["pesce"]
    },
    {
      name: "Cordon bleu di maiale",
      description: "Con patatine fritte e insalata",
      price: "33.00 CHF",
      image: item26,
      allergens: ["glutine", "lattosio"]
    },
    {
      name: "Chinoise Fondue",
      description: "Manzo & tacchino con riso e patatine (su prenotazione)",
      price: "36.00 CHF",
      image: item25,
      allergens: []
    },
    {
      name: "Tartare di manzo",
      description: "Tartare cruda di manzo. 350 g",
      price: "36.00 CHF",
      image: item27,
      allergens: []
    }
  ],
  bevande: [
    // Birre
    { name: "Birra Erdinger 0,33 cl", price: "4.50 CHF", category: "birre" },
    { name: "Birra Calanda 0,33 cl", price: "4.50 CHF", category: "birre" },
    { name: "Birra Calanda 0,0% 0,33 cl", price: "4.50 CHF", category: "birre" },
    { name: "Birra Desperados 0,33 cl", price: "5.00 CHF", category: "birre" },
    { name: "Birra Heineken 0,25 cl", price: "4.30 CHF", category: "birre" },
    { name: "Birra Spina 0,2 cl", price: "3.50 CHF", category: "birre" },
    { name: "Birra Spina 0,3 cl", price: "4.20 CHF", category: "birre" },
    { name: "Birra Spina 0,5 cl", price: "5.50 CHF", category: "birre" },
    { name: "Ticino beer 0,33 cl", price: "4.50 CHF", category: "birre" },

    // Acque e analcoliche
    { name: "Aqua naturale Henniez 0,75 l", price: "7.50 CHF", category: "analcoliche" },
    { name: "Aqua naturale Henniez 0,5 l", price: "6.00 CHF", category: "analcoliche" },
    { name: "Aqua San Pellegrino 0,5 l", price: "6.00 CHF", category: "analcoliche" },
    { name: "Aqua San Pellegrino 1 l", price: "9.00 CHF", category: "analcoliche" },
    { name: "Gazosa arancia amara 35 cl", price: "5.00 CHF", category: "analcoliche" },
    { name: "Gazosa arancia dolce 35 cl", price: "5.00 CHF", category: "analcoliche" },
    { name: "Gazosa di limone 35 cl", price: "5.00 CHF", category: "analcoliche" },
    { name: "Coca Cola 330 ml", price: "5.00 CHF", category: "analcoliche" },
    { name: "Rivella Zero 0,33 l", price: "5.50 CHF", category: "analcoliche" },
    { name: "Rivella Original 0,33 l", price: "5.50 CHF", category: "analcoliche" },

    // Aperitivi e digestivi
    { name: "Campari", price: "7.00 CHF", category: "aperitivi" },
    { name: "San Bitter", price: "7.00 CHF", category: "aperitivi" },
    { name: "Crodino", price: "7.00 CHF", category: "aperitivi" },
    { name: "Martini", price: "6.50 CHF", category: "aperitivi" },
    { name: "Montenegro", price: "6.50 CHF", category: "aperitivi" },
    { name: "Limoncello", price: "6.00 CHF", category: "aperitivi" },
    { name: "Jägermeister", price: "6.50 CHF", category: "aperitivi" },

    // Prosecco
    { name: "Prosecco Castellengo 0,75 l", description: "Extra dry (Bicchiere: 6.00 CHF)", price: "30.00 CHF", category: "prosecco" },
    { name: "Prosecco DOC Treviso Soligo 0,75 l", price: "35.00 CHF", category: "prosecco" },
    { name: "Prosecco La Brunesca 0,75 l", price: "37.00 CHF", category: "prosecco" },

    // Vini Rossi
    { name: "Crianza Bordon Rioja Spagna", price: "47.00 CHF", category: "vini_rossi" },
    { name: "4 Sorelle Barbera", description: "Bicchiere: 5.50 CHF", price: "36.00 CHF", category: "vini_rossi" },
    { name: "Marengo Merlot", price: "37.00 CHF", category: "vini_rossi" },
    { name: "Riserva Ticino Merlot", price: "39.00 CHF", category: "vini_rossi" },
    { name: "Runchet Ticino Merlot", price: "49.00 CHF", category: "vini_rossi" },
    { name: "Tre Torri Merlot", description: "Bicchiere: 4.00 CHF", price: "Bottiglia", category: "vini_rossi" },
    { name: "J.P Chenet Cabernet France", description: "Bicchiere: 4.00 CHF", price: "29.00 CHF", category: "vini_rossi" },

    // Vini Bianchi
    { name: "Lugana Scolari", description: "Bicchiere: 4.50 CHF", price: "34.00 CHF", category: "vini_bianchi" },
    { name: "La Brunesca Chardonnay (Italia)", price: "32.00 CHF", category: "vini_bianchi" },
    { name: "Senorio de Garci Grande Rueda Spagna", price: "36.00 CHF", category: "vini_bianchi" },
    { name: "Vermentino di Sardegna", price: "35.00 CHF", category: "vini_bianchi" },
    { name: "Roero Arneis", price: "44.00 CHF", category: "vini_bianchi" },
    { name: "Fior Fiore", price: "3.50 CHF", category: "vini_bianchi" },
    { name: "Moscato Monteolivo Bersano", price: "29.00 CHF", category: "vini_bianchi" },

    // Caffè
    { name: "Espresso", price: "3.50 CHF", category: "caffe" },
    { name: "Corretto", price: "4.00 CHF", category: "caffe" },
    { name: "Cappuccino", price: "4.50 CHF", category: "caffe", allergens: ["lattosio"] },
    { name: "Macchiato", price: "3.80 CHF", category: "caffe" },

    // Cocktails
    { name: "Whisky Cola", price: "12.50 CHF", category: "cocktails" },
    { name: "Vodka Red Bull", price: "12.50 CHF", category: "cocktails" },
    { name: "Martini Sprite", price: "11.50 CHF", category: "cocktails" },
    { name: "Gin Tonic", description: "Hendrik's, Bombay Saphire", price: "12.50 CHF", category: "cocktails" }
  ]
};

// Utility functions
const getAllergenIcon = (allergen) => ALLERGEN_ICONS[allergen] || "";

const getBeveragesByCategory = (beverages) => {
  return Object.keys(BEVERAGE_CATEGORIES).map(category => ({
    category,
    title: BEVERAGE_CATEGORIES[category],
    items: beverages.filter(item => item.category === category)
  })).filter(group => group.items.length > 0);
};

// Components
const AllergenIcons = ({ allergens = [] }) => (
  <div className="allergen-icons">
    {allergens.map((allergen, idx) => (
      <span key={idx} className="allergen-icon" title={allergen}>
        {getAllergenIcon(allergen)}
      </span>
    ))}
  </div>
);

const MenuItem = ({ item }) => (
  <div className="menu-item rustic">
    <div className="rustic-frame">
      <div className="item-image-rustic">
        <img
          src={item.image}
          alt={item.name}
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
          <AllergenIcons allergens={item.allergens} />
        </div>
      </div>
    </div>
  </div>
);

const MenuCategory = ({ title, items }) => (
  <div className="menu-category">
    <h3 className="menu-category-title">{title}</h3>
    <div className="menu-grid">
      {items.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </div>
  </div>
);

const BeverageItem = ({ item }) => (
  <div className="beverage-item">
    <div className="beverage-info">
      <span className="beverage-name">{item.name}</span>
      {item.description && <span className="beverage-description">{item.description}</span>}
      {item.allergens?.length > 0 && (
        <div className="allergen-icons-small">
          <AllergenIcons allergens={item.allergens} />
        </div>
      )}
    </div>
    <span className="beverage-price">{item.price}</span>
  </div>
);

const BeverageCategory = ({ title, items }) => (
  <div className="beverage-category">
    <h4 className="beverage-category-title">{title}</h4>
    <div className="beverage-list">
      {items.map((item, index) => (
        <BeverageItem key={index} item={item} />
      ))}
    </div>
  </div>
);

const MenuSubmenu = ({ activeSection, onSectionChange }) => {
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
        {Object.entries(MENU_SECTIONS).map(([key, section]) => (
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
        <img
          src={icon}
          alt={children}
          className="social-icon-image"
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
  const [activeMenuSection, setActiveMenuSection] = useState('antipasti');
  const beverageGroups = useMemo(() => getBeveragesByCategory(MENU_DATA.bevande), []);

  const renderActiveSection = () => {
    if (activeMenuSection === 'bevande') {
      return (
        <div className="menu-category">
          {beverageGroups.map(group => (
            <BeverageCategory
              key={group.category}
              title={group.title}
              items={group.items}
            />
          ))}
        </div>
      );
    }

    return (
      <MenuCategory
        title={MENU_SECTIONS[activeMenuSection]?.title}
        items={MENU_DATA[activeMenuSection] || []}
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
              content={RESTAURANT_INFO.address}
            />
            <InfoCard
              icon="📞"
              title="Prenotazioni o ordini da asporto"
              content={`${RESTAURANT_INFO.contact.phone}\n${RESTAURANT_INFO.contact.email}`}
            />
            <InfoCard
              icon="🕐"
              title="Orari di Apertura"
              content={RESTAURANT_INFO.hours}
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
                {Object.entries(RESTAURANT_INFO.social).map(([key, social]) => (
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