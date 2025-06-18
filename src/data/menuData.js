// Menu item images
import item2 from '../assets/menu/2.png'
import item3 from '../assets/menu/3.png'
import item4 from '../assets/menu/4.png'
import item5 from '../assets/menu/5.png'
import item6 from '../assets/menu/6.png'
import item7 from '../assets/menu/7.png'
import item8 from '../assets/menu/8.png'
import item10 from '../assets/menu/10.png'
import item11 from '../assets/menu/11.png'
import item14 from '../assets/menu/14.png'
import item15 from '../assets/menu/15.png'
import item16 from '../assets/menu/16.png'
import item18 from '../assets/menu/18.png'
import item19 from '../assets/menu/19.png'
import item20 from '../assets/menu/20.png'
import item21 from '../assets/menu/21.png'
import item24 from '../assets/menu/24.png'
import item25 from '../assets/menu/25.png'
import item26 from '../assets/menu/26.png'
import item27 from '../assets/menu/27.png'
import item30 from '../assets/menu/30.png'
import item31 from '../assets/menu/31.png'
import item32 from '../assets/menu/32.png'
import item33 from '../assets/menu/33.png'
import item34 from '../assets/menu/34.png'
import item35 from '../assets/menu/35.png'
import item36 from '../assets/menu/36.png'
import item37 from '../assets/menu/37.png'
import item41 from '../assets/menu/41.png'
import item42 from '../assets/menu/42.png'
import item43 from '../assets/menu/43.png'
import item44 from '../assets/menu/44.png'
import item45 from '../assets/menu/45.png'
import item46 from '../assets/menu/46.png'
import item47 from '../assets/menu/47.png'
import item48 from '../assets/menu/48.png'
import mici2 from '../assets/menu/mici2.jpg'

// Logo imports
import bookig from '../assets/booking.svg';
import facebook from '../assets/facebook.png';
import tiktok from '../assets/tiktok.svg';
import whatsapp from '../assets/whatsapp.webp';

// Constants
export const ALLERGEN_ICONS = {
  glutine: "🌾",
  lattosio: "🥛",
  uova: "🥚",
  pesce: "🐟",
  crostacei: "🦐",
  molluschi: "🦪",
  vegan: "🌱",
  halal: "☪️"
};

export const BEVERAGE_CATEGORIES = {
  birre: '🍺 Birre',
  analcoliche: '🥤 Analcoliche',
  aperitivi: '🥃 Aperitivi & Digestivi',
  prosecco: '🍾 Prosecco',
  vini_rossi: '🍷 Vini Rossi',
  vini_bianchi: '🥂 Vini Bianchi',
  caffe: '☕ Caffè',
  cocktails: '🍸 Cocktails'
};

export const MENU_SECTIONS = {
  specialita: { title: "Specialità", emoji: "⭐" },
  carni: { title: "Carne & Taglieri", emoji: "🥩" },
  pesce: { title: "Pesce", emoji: "🐟" },
  antipasti: { title: "Insalate", emoji: "🥗" },
  dolci: { title: "Dolci", emoji: "🍰" },
  bevande: { title: "Bevande", emoji: "🍷" }
};

export const RESTAURANT_INFO = {
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
export const MENU_DATA = {
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

// Utility function to get all menu images
export const getAllMenuImages = () => {
  const allImages = [];

  // Extract images from menu items
  Object.values(MENU_DATA).forEach(category => {
    if (Array.isArray(category)) {
      category.forEach(item => {
        if (item.image) {
          allImages.push(item.image);
        }
      });
    }
  });

  // Add social media images
  Object.values(RESTAURANT_INFO.social).forEach(social => {
    if (social.icon) {
      allImages.push(social.icon);
    }
  });

  return allImages;
};