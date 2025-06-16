import { FacebookEmbed } from 'react-social-media-embed';

const HomePage = () => {
  const menuItems = {
    antipasti: [
      {
        name: "Salată de Icre",
        description: "Crema di uova di pesce con cipolla rossa e limone",
        price: "12.50 CHF",
        image: "🥚",
        allergens: ["pesce", "glutine"]
      },
      {
        name: "Salată de Vinete",
        description: "Crema di melanzane affumicate con pomodori freschi",
        price: "10.50 CHF",
        image: "🍆",
        allergens: ["vegan"]
      },
      {
        name: "Zacuscă",
        description: "Verdure grigliate rumene con peperoni e melanzane",
        price: "9.50 CHF",
        image: "🫑",
        allergens: ["vegan"]
      }
    ],
    carni: [
      {
        name: "Mici Tradizionali",
        description: "Salsicce rumene alla griglia con spezie tradizionali, servite con senape e pane fresco",
        price: "18.50 CHF",
        image: "🥩",
        allergens: ["glutine"]
      },
      {
        name: "Sarmale",
        description: "Involtini di cavolo ripieni di carne macinata e riso",
        price: "22.00 CHF",
        image: "🥬",
        allergens: ["glutine"]
      },
      {
        name: "Mămăligă cu Brânză și Ou",
        description: "Polenta tradizionale con formaggio rumeno e uovo fritto",
        price: "16.00 CHF",
        image: "🧀",
        allergens: ["lattosio", "uova"]
      },
      {
        name: "Platto Misto alla Griglia",
        description: "Assortimento di carni alla griglia con mici, cârnați e frigărui",
        price: "28.00 CHF",
        image: "🍖",
        allergens: ["glutine"]
      }
    ],
    specialita: [
      {
        name: "Ciorbă de Burtă",
        description: "Zuppa di trippa tradizionale con panna acida e aglio",
        price: "16.00 CHF",
        image: "🍲",
        allergens: ["lattosio"]
      },
      {
        name: "Tochitură Moldovenească",
        description: "Stufato di maiale con polenta e uovo",
        price: "24.00 CHF",
        image: "🍳",
        allergens: ["uova", "lattosio"]
      },
      {
        name: "Papanași",
        description: "Dolce tradizionale rumeno con ricotta, panna acida e marmellata",
        price: "12.00 CHF",
        image: "🍩",
        allergens: ["glutine", "lattosio", "uova"]
      }
    ],
    bevande: [
      {
        name: "Țuică",
        description: "Grappa di prugne tradizionale rumena",
        price: "8.00 CHF",
        image: "🥃",
        allergens: []
      },
      {
        name: "Vino Rumeno",
        description: "Selezione di vini rumeni rossi e bianchi",
        price: "35.00 CHF",
        image: "🍷",
        allergens: []
      },
      {
        name: "Socată",
        description: "Bevanda tradizionale ai fiori di sambuco",
        price: "5.50 CHF",
        image: "🌸",
        allergens: []
      }
    ]
  };

  const getAllergenIcon = (allergen) => {
    const icons = {
      glutine: "🌾",
      lattosio: "🥛",
      uova: "🥚",
      pesce: "🐟",
      vegan: "🌱",
      halal: "☪️"
    };
    return icons[allergen] || "";
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

      {/* Menu Section */}
      <section className="menu-section container">
        <h2 className="section-title">Il Nostro Menu</h2>

        {/* Antipasti */}
        <div className="menu-category">
          <h3 className="category-title">Antipasti</h3>
          <div className="menu-grid">
            {menuItems.antipasti.map((item, index) => (
              <div key={index} className="menu-item rustic">
                <div className="rustic-frame">
                  <div className="item-image-rustic">
                    <span className="item-emoji">{item.image}</span>
                    <div className="rustic-overlay"></div>
                  </div>
                  <div className="item-content-rustic">
                    <h4 className="item-name">{item.name}</h4>
                    <p className="item-description">{item.description}</p>
                    <div className="item-footer">
                      <span className="item-price">{item.price}</span>
                      <div className="allergen-icons">
                        {item.allergens.map((allergen, idx) => (
                          <span key={idx} className="allergen-icon" title={allergen}>
                            {getAllergenIcon(allergen)}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carni */}
        <div className="menu-category">
          <h3 className="category-title">Carni alla Griglia</h3>
          <div className="menu-grid">
            {menuItems.carni.map((item, index) => (
              <div key={index} className="menu-item rustic">
                <div className="rustic-frame">
                  <div className="item-image-rustic">
                    <span className="item-emoji">{item.image}</span>
                    <div className="rustic-overlay"></div>
                  </div>
                  <div className="item-content-rustic">
                    <h4 className="item-name">{item.name}</h4>
                    <p className="item-description">{item.description}</p>
                    <div className="item-footer">
                      <span className="item-price">{item.price}</span>
                      <div className="allergen-icons">
                        {item.allergens.map((allergen, idx) => (
                          <span key={idx} className="allergen-icon" title={allergen}>
                            {getAllergenIcon(allergen)}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specialità */}
        <div className="menu-category">
          <h3 className="category-title">Specialità della Casa</h3>
          <div className="menu-grid">
            {menuItems.specialita.map((item, index) => (
              <div key={index} className="menu-item rustic">
                <div className="rustic-frame">
                  <div className="item-image-rustic">
                    <span className="item-emoji">{item.image}</span>
                    <div className="rustic-overlay"></div>
                  </div>
                  <div className="item-content-rustic">
                    <h4 className="item-name">{item.name}</h4>
                    <p className="item-description">{item.description}</p>
                    <div className="item-footer">
                      <span className="item-price">{item.price}</span>
                      <div className="allergen-icons">
                        {item.allergens.map((allergen, idx) => (
                          <span key={idx} className="allergen-icon" title={allergen}>
                            {getAllergenIcon(allergen)}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bevande */}
        <div className="menu-category">
          <h3 className="category-title">Bevande</h3>
          <div className="menu-grid">
            {menuItems.bevande.map((item, index) => (
              <div key={index} className="menu-item rustic">
                <div className="rustic-frame">
                  <div className="item-image-rustic">
                    <span className="item-emoji">{item.image}</span>
                    <div className="rustic-overlay"></div>
                  </div>
                  <div className="item-content-rustic">
                    <h4 className="item-name">{item.name}</h4>
                    <p className="item-description">{item.description}</p>
                    <div className="item-footer">
                      <span className="item-price">{item.price}</span>
                      <div className="allergen-icons">
                        {item.allergens.map((allergen, idx) => (
                          <span key={idx} className="allergen-icon" title={allergen}>
                            {getAllergenIcon(allergen)}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="info-card">
                <h4>📍 Dove Siamo</h4>
                <p>Caraa de San Fedee 2 <br /> 6535 Roveredo Svizzera</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info-card">
                <h4>🕐 Orari di Apertura</h4>
                <p>Mar-Dom: 11:00 - 16:00 | 18:00 - 22:00<br />
                  Lun: Chiuso</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info-card">
                <h4>📞 Prenotazioni o ordini da asporto</h4>
                <p>076 617 00 55<br />
                  casaanaristorante@yahoo.com</p>
              </div>
            </div>
          </div>
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
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="social-title">Seguici sui Social</h3>
              <div className="social-links">
                <a href="https://www.facebook.com/profile.php?id=61575433280192" className="social-link facebook">
                  <span className="social-icon">📘</span>
                  <span>Facebook</span>
                </a>
                <a href="https://www.tiktok.com/@ristorante.casa.a" className="social-link instagram">
                  <span className="social-icon">🎵</span>
                  <span>TikTok</span>
                </a>
                <a href="#" className="social-link whatsapp">
                  <span className="social-icon">💬</span>
                  <span>WhatsApp</span>
                </a>
                <a href="#" className="social-link tripadvisor">
                  <span className="social-icon">🦉</span>
                  <span>TripAdvisor</span>
                </a>
              </div>
              <div className="social-feed">
                <h4>Ultime dal nostro Facebook</h4>
                <div className="mb-2">
                  <FacebookEmbed
                    width={500}
                    url="https://www.facebook.com/permalink.php?story_fbid=122121324356847776&id=61575433280192"
                    placeholder={<div>Caricamento…</div>}
                  />
                </div>
                <div className="mb-2">
                  <FacebookEmbed
                    width={500}
                    url="https://www.facebook.com/permalink.php?story_fbid=122121066182847776&id=61575433280192"
                    placeholder={<div>Caricamento…</div>}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
};

export default HomePage;