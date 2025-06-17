import { FacebookEmbed } from 'react-social-media-embed';

const HomePage = () => {
  const menuItems = {
    antipasti: [
      {
        name: "Insalata Caesar",
        description: "Con pollo, crostini, pomodorini, salsa caesar, parmigiano. 350–400 g",
        price: "18.50 CHF",
        image: "",
        allergens: ["uova", "glutine", "lattosio"]
      },
      {
        name: "Insalata Rusa",
        description: "Insalata russa tradizionale. 250-280 g",
        price: "18.50 CHF",
        image: "",
        allergens: ["uova"]
      },
      {
        name: "Insalata mista",
        description: "Pomodorini, insalata, olive nere, tonno, uova, cipolla rossa. 350–400 g",
        price: "18.50 CHF",
        image: "",
        allergens: ["pesce", "uova"]
      },
      {
        name: "Mousse di melanzane con maionese",
        description: "Servito con pane tostato, pomodori e formaggio feta. 350 g",
        price: "18.50 CHF",
        image: "",
        allergens: ["lattosio"]
      }
    ],
    pesce: [
      {
        name: "Pesce alla griglia con verdure (Orata)",
        description: "Gegrillter fisch mit gemüse. 500-600 g",
        price: "27.00 CHF",
        image: "",
        allergens: ["pesce"]
      },
      {
        name: "Salamoia di pesce con polenta",
        description: "Saramura de peste cu mămăligută. 500-600 g",
        price: "27.00 CHF",
        image: "",
        allergens: ["pesce"]
      },
      {
        name: "Gamberetti all'aglio",
        description: "Knoblauchgarnelen",
        price: "29.00 CHF",
        image: "",
        allergens: ["crostacei"]
      },
      {
        name: "Polpo alla galiziana",
        description: "Oktopus nach galizischer Art",
        price: "30.00 CHF",
        image: "",
        allergens: ["molluschi"]
      },
      {
        name: "Fritto misto alla Spagna",
        description: "Gemischtes fritho. 22.00 CHF / 35.00 CHF per 2 pers.",
        price: "22.00 CHF",
        image: "",
        allergens: ["pesce", "crostacei", "molluschi"]
      }
    ],
    dolci: [
      {
        name: "Traditionelle Papanasi",
        description: "Papanasi tradizionali rumeni. 1/2 porzione - 9.50 CHF",
        price: "21.00 CHF",
        image: "",
        allergens: ["glutine", "lattosio", "uova"]
      },
      {
        name: "Panna Cotta",
        description: "Dessert italiano classico",
        price: "9.00 CHF",
        image: "",
        allergens: ["lattosio"]
      },
      {
        name: "Pancake con marmellata",
        description: "Pancake con marmellata di lamponi o cioccolato",
        price: "9.00 CHF",
        image: "",
        allergens: ["glutine", "lattosio", "uova"]
      }
    ],
    carni: [
      {
        name: "Piatto Herciu (2 pers.)",
        description: "Mix di salumi e formaggi assortiti con vino bianco incluso. 190–200 g",
        price: "36.00 CHF",
        image: "",
        allergens: ["glutine", "lattosio"]
      },
      {
        name: "Tagliere salumi & formaggi (4 pers.)",
        description: "Formaggi e salumi regionali con 4 bicchieri di prosecco inclusi. 500–520 g",
        price: "70.00 CHF",
        image: "",
        allergens: ["glutine", "lattosio"]
      },
      {
        name: "Cevapcici alla griglia",
        description: "Mici la gratar serviti con patatine, formaggio grattugiato, sottaceti",
        price: "25.50 CHF",
        image: "",
        allergens: ["glutine"]
      },
      {
        name: "Costolette di agnello",
        description: "Servite con crostini rustici e salsa segreta",
        price: "27.00 CHF",
        image: "",
        allergens: []
      },
      {
        name: "Cosce di pollo disossate",
        description: "Pulpa di pollo grigliata senza ossa. 300 g",
        price: "29.50 CHF",
        image: "",
        allergens: []
      },
      {
        name: "Collo di maiale grigliato",
        description: "Ceafă di porc grigliata. 300 g",
        price: "28.00 CHF",
        image: "",
        allergens: []
      },
      {
        name: "Filetto di maiale alla griglia",
        description: "Muschi de porc la gratar. 300 g",
        price: "28.00 CHF",
        image: "",
        allergens: []
      },
      {
        name: "Costine di maiale alla griglia",
        description: "Coaste de porc la gratar grigliate",
        price: "27.50 CHF",
        image: "",
        allergens: []
      },
      {
        name: "Entrecot di manzo Swiss",
        description: "Con salsa gorgonzola, asparagi, patatine fritte. 300 g",
        price: "36.00 CHF",
        image: "",
        allergens: ["lattosio"]
      },
      {
        name: "Filetto di manzo alla griglia",
        description: "Servito con patate rustiche e salsa chimichurri. 250-270 g",
        price: "46.00 CHF",
        image: "",
        allergens: []
      },
      {
        name: "Grigliata mista Casa Ana (4 pers.)",
        description: "Cevapcici, collo di maiale, cosce di pollo, salsicce, spiedini. Una bottiglia di vino inclusa",
        price: "169.00 CHF",
        image: "",
        allergens: ["glutine"]
      }
    ],
    specialita: [
      {
        name: "Sarmale tradizionali",
        description: "Involtini in verza serviti con panna acida e polenta. 500 g",
        price: "26.50 CHF",
        image: "",
        allergens: ["lattosio"]
      },
      {
        name: "Frittura di maiale con polenta",
        description: "Pomana porcului cu mamaliguta si muraturi",
        price: "27.00 CHF",
        image: "",
        allergens: []
      },
      {
        name: "Mix carne & luganighetta",
        description: "Tochitura moldoveneasca. 500 g",
        price: "27.50 CHF",
        image: "",
        allergens: []
      },
      {
        name: "Zuppa di trippa di vitello",
        description: "Servita con panna acida. Solo sabato e domenica. 450–500 g",
        price: "19.50 CHF",
        image: "",
        allergens: ["lattosio"]
      },
      {
        name: "Zuppa di manzo",
        description: "Ciorba de vacuta ardeleneasca con panna acida. 450-500 g",
        price: "18.50 CHF",
        image: "",
        allergens: ["lattosio"]
      },
      {
        name: "Zuppa di fagioli con carne affumicata",
        description: "Servita con insalata di cipolle rosse e prezzemolo. 450–500 g",
        price: "18.50 CHF",
        image: "",
        allergens: []
      },
      {
        name: "Spaghetti alla bolognese",
        description: "Spaghetti al ragù tradizionale",
        price: "22.50 CHF",
        image: "",
        allergens: ["glutine"]
      },
      {
        name: "Spaghetti carbonara",
        description: "Spaghetti con guanciale e uova",
        price: "22.50 CHF",
        image: "",
        allergens: ["glutine", "uova"]
      },
      {
        name: "Spaghetti ai frutti di mare",
        description: "Spaghetti con pesce e crostacei",
        price: "26.50 CHF",
        image: "",
        allergens: ["pesce", "crostacei", "molluschi"]
      },
      {
        name: "Paella Valenciana Autentica",
        description: "Pollo o frutti di mare (minimo 2 persone)",
        price: "27.00/30.00 CHF/pers",
        image: "",
        allergens: ["pesce"]
      },
      {
        name: "Cordon bleu di maiale",
        description: "Con patatine fritte e insalata",
        price: "33.00 CHF",
        image: "",
        allergens: ["glutine", "lattosio"]
      },
      {
        name: "Chinoise Fondue",
        description: "Manzo & tacchino con riso e patatine (su prenotazione)",
        price: "36.00 CHF",
        image: "",
        allergens: []
      },
      {
        name: "Tartare di manzo",
        description: "Tartare cruda di manzo. 350 g",
        price: "36.00 CHF",
        image: "",
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
  
  const getAllergenIcon = (allergen) => {
    const icons = {
      glutine: "🌾",
      lattosio: "🥛",
      uova: "🥚",
      pesce: "🐟",
      crostacei: "🦐",
      molluschi: "🦪",
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
          <h3 className="category-title">Insalate</h3>
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
          <h3 className="category-title">Carne alla Griglia & Taglieri</h3>
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
          <h3 className="category-title">Specialità & Piatti Tradizionali</h3>
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

        {/* Pesce */}
        <div className="menu-category">
          <h3 className="category-title">Pesce e Frutti di Mare</h3>
          <div className="menu-grid">
            {menuItems.pesce.map((item, index) => (
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

        {/* Dolci */}
        <div className="menu-category">
          <h3 className="category-title">Dolci</h3>
          <div className="menu-grid">
            {menuItems.dolci.map((item, index) => (
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
          
          {/* Group beverages by category */}
          {['birre', 'analcoliche', 'aperitivi', 'prosecco', 'vini_rossi', 'vini_bianchi', 'caffe', 'cocktails'].map(category => (
            <div key={category} className="beverage-category">
              <h4 className="beverage-category-title">
                {category === 'birre' && '🍺 Birre'}
                {category === 'analcoliche' && '🥤 Analcoliche'}
                {category === 'aperitivi' && '🥃 Aperitivi & Digestivi'}
                {category === 'prosecco' && '🍾 Prosecco'}
                {category === 'vini_rossi' && '🍷 Vini Rossi'}
                {category === 'vini_bianchi' && '🥂 Vini Bianchi'}
                {category === 'caffe' && '☕ Caffè'}
                {category === 'cocktails' && '🍸 Cocktails'}
              </h4>
              <div className="beverage-list">
                {menuItems.bevande
                  .filter(item => item.category === category)
                  .map((item, index) => (
                    <div key={index} className="beverage-item">
                      <div className="beverage-info">
                        <span className="beverage-name">{item.name}</span>
                        {item.description && <span className="beverage-description">{item.description}</span>}
                        {item.allergens && item.allergens.length > 0 && (
                          <div className="allergen-icons-small">
                            {item.allergens.map((allergen, idx) => (
                              <span key={idx} className="allergen-icon" title={allergen}>
                                {getAllergenIcon(allergen)}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <span className="beverage-price">{item.price}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
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
                    url="https://www.facebook.com/permalink.php?story_fbid=122121324356847776&id=61575433280192"
                    placeholder={<div>Caricamento…</div>}
                  />
                </div>
                <div className="mb-2">
                  <FacebookEmbed
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