import React, { useState, useMemo } from 'react';

// Gallery asset imports
import cold2 from './assets/gallery/cold2.jpg';
import coldp1 from './assets/gallery/coldp1.jpg';
import costite from './assets/gallery/costite.jpg';
import evento from './assets/gallery/evento.jpg';
import evento2 from './assets/gallery/evento2.jpg';
import food1 from './assets/gallery/food1.jpg';
import food2 from './assets/gallery/food2.jpg';
import food3 from './assets/gallery/food3.jpg';
import food4 from './assets/gallery/food4.jpg';
import food5 from './assets/gallery/food5.jpg';
import food6 from './assets/gallery/food6.jpg';
import food7 from './assets/gallery/food7.jpg';
import food8 from './assets/gallery/food8.jpg';
import hotel1 from './assets/gallery/hotel1.jpg';
import mici from './assets/gallery/mici.jpg';
import mix1 from './assets/gallery/mix1.jpg';
import outside1 from './assets/gallery/outside1.jpg';
import salumi1 from './assets/gallery/salumi1.mp4';
import salumi3 from './assets/gallery/salumi3.jpg';
import table1 from './assets/gallery/table1.jpg';
import table2 from './assets/gallery/table2.jpg';
import table3 from './assets/gallery/table3.jpg';
import table4 from './assets/gallery/table4.jpg';

// Constants
const FILTER_CATEGORIES = {
  tutti: 'Tutti',
  piatti: 'Piatti',
  ambiente: 'Ambiente',
  eventi: 'Eventi'
};

const GALLERY_DATA = [
  {
    id: 1,
    title: "Mici Tradizionali",
    description: "Le nostre famose salsicce rumene alla griglia",
    category: "piatti",
    image: mici,
    type: "image"
  },
  {
    id: 2,
    title: "Spezzatino di Manzo con Verdure",
    description: "Bocconcini di carne, patate e carote",
    category: "piatti",
    image: food1,
    type: "image"
  },
  {
    id: 3,
    title: "Pane Arabo con Hummus Piccante",
    description: "Focaccine grigliate e hummus con salsa",
    category: "piatti",
    image: food2,
    type: "image"
  },
  {
    id: 4,
    title: "Tagliere Rustico con Formaggi",
    description: "Pane grigliato, feta, crema e pomodorini",
    category: "piatti",
    image: food3,
    type: "image"
  },
  {
    id: 5,
    title: "Panna Cotta e Narghilè",
    description: "Dolce cremoso con frutti di bosco e menta",
    category: "piatti",
    image: food4,
    type: "image"
  },
  {
    id: 6,
    title: "Peperone Ripieno al Sugo",
    description: "Peperone con carne e riso in salsa",
    category: "piatti",
    image: food5,
    type: "image"
  },
  {
    id: 7,
    title: "Fegatini con Purè e Verdure",
    description: "Fegatini saltati, purè cremoso e sottaceti",
    category: "piatti",
    image: food6,
    type: "image"
  },
  {
    id: 8,
    title: "Fegato alla Griglia con Contorni",
    description: "Purè, peperoni dolci e fegato saltato",
    category: "piatti",
    image: food7,
    type: "image"
  },
  {
    id: 9,
    title: "Gelatina ai Frutti di Bosco",
    description: "Dolce fresco con frutti rossi e fiore",
    category: "piatti",
    image: food8,
    type: "image"
  },
  {
    id: 11,
    title: "Casa Ana premiata in sala eventi",
    description: "Selezione di antipasti freddi della casa",
    category: "eventi",
    image: cold2,
    type: "image"
  },
  {
    id: 12,
    title: "Casa Ana premiata in sala eventi",
    description: "Selezione di antipasti freddi della casa",
    category: "eventi",
    image: coldp1,
    type: "image"
  },
  {
    id: 13,
    title: "Salumi Artigianali",
    description: "Preparazione dei nostri salumi fatti in casa",
    category: "piatti",
    image: salumi1,
    type: "video"
  },
  {
    id: 14,
    title: "Tagliere di Salumi",
    description: "Selezione di salumi e formaggi",
    category: "piatti",
    image: salumi3,
    type: "image"
  },
  {
    id: 15,
    title: "Costolette alla Griglia",
    description: "Costolette preparate secondo tradizione",
    category: "piatti",
    image: costite,
    type: "image"
  },
  {
    id: 16,
    title: "Piatto Misto",
    description: "Assortimento delle nostre specialità",
    category: "piatti",
    image: mix1,
    type: "image"
  },
  {
    id: 17,
    title: "Camera Matrimoniale Casa Ana – Roveredo",
    description: "Comfort rustico con TV e luce naturale",
    category: "ambiente",
    image: hotel1,
    type: "image"
  },
  {
    id: 19,
    title: "Terrazza Esterna",
    description: "Il nostro spazio all'aperto",
    category: "ambiente",
    image: outside1,
    type: "image"
  },
  {
    id: 20,
    title: "Tavolo Preparato",
    description: "Mise en place per i nostri ospiti",
    category: "ambiente",
    image: table1,
    type: "image"
  },
  {
    id: 21,
    title: "Sala Ristorante",
    description: "I nostri tavoli pronti per accogliervi",
    category: "ambiente",
    image: table2,
    type: "image"
  },
  {
    id: 22,
    title: "Tavolo Estivo nel Giardino di Casa Ana",
    description: "Cena all’aperto tra luci e fiori",
    category: "ambiente",
    image: table3,
    type: "image"
  },
  {
    id: 23,
    title: "Allestimento Elegante",
    description: "Tavoli elegantemente apparecchiati",
    category: "ambiente",
    image: table4,
    type: "image"
  },
  {
    id: 24,
    title: "Casa Ana al Festival del Cibo Internazionale",
    description: "Specialità rumene presentate all’evento di Paradiso",
    category: "eventi",
    image: evento,
    type: "image"
  },
  {
    id: 25,
    title: "Orgoglio Rumeno al Festival di Paradiso",
    description: "Casa Ana presenta piatti tipici e tradizione",
    category: "eventi",
    image: evento2,
    type: "image"
  }
];

// Utility functions
const filterGalleryItems = (items, filter) => {
  return filter === 'tutti' ? items : items.filter(item => item.category === filter);
};

// Components
const FilterButton = ({ category, label, isActive, onClick }) => (
  <button
    className={`filter-btn ${isActive ? 'active' : ''}`}
    onClick={() => onClick(category)}
  >
    {label}
  </button>
);

const GalleryItemMedia = ({ item }) => (
  item.type === 'video' ? (
    <video
      src={item.image}
      className="gallery-image"
      muted
      loop
      autoPlay
      aria-label={item.title}
    />
  ) : (
    <img
      src={item.image}
      alt={item.title}
      className="gallery-image"
    />
  )
);

const GalleryItemOverlay = ({ title, description }) => (
  <div className="gallery-item-overlay">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const GalleryItem = ({ item, onClick }) => (
  <div
    className={`gallery-item ${item.type === 'video' ? 'video-item' : ''}`}
    onClick={() => onClick(item)}
  >
    <GalleryItemOverlay title={item.title} description={item.description} />
    <GalleryItemMedia item={item} />
  </div>
);

const LightboxMedia = ({ item }) => (
  item.type === 'video' ? (
    <video
      src={item.image}
      className="lightbox-media"
      controls
      autoPlay
      aria-label={item.title}
    />
  ) : (
    <img
      src={item.image}
      alt={item.title}
      className="lightbox-media"
    />
  )
);

const LightboxContent = ({ item, onClose }) => (
  <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
    <button
      className="lightbox-close"
      onClick={onClose}
      aria-label="Chiudi lightbox"
    >
      ×
    </button>
    <div className="lightbox-image">
      <LightboxMedia item={item} />
    </div>
    <div className="lightbox-info">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  </div>
);

const Lightbox = ({ selectedImage, onClose }) => {
  if (!selectedImage) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <LightboxContent item={selectedImage} onClose={onClose} />
    </div>
  );
};

const GalleryHero = () => (
  <section className="gallery-hero">
    <div className="container">
      <h1 className="events-title">La Nostra Galleria</h1>
      <p className="gallery-subtitle">Scopri l'atmosfera unica del Grotto Laura</p>
    </div>
  </section>
);

const FilterSection = ({ filter, onFilterChange }) => (
  <section className="filter-section">
    <div className="container">
      <div className="filter-buttons">
        {Object.entries(FILTER_CATEGORIES).map(([category, label]) => (
          <FilterButton
            key={category}
            category={category}
            label={label}
            isActive={filter === category}
            onClick={onFilterChange}
          />
        ))}
      </div>
    </div>
  </section>
);

const GalleryGrid = ({ items, onItemClick }) => (
  <section className="gallery-section">
    <div className="container">
      <div className="gallery-grid">
        {items.map((item) => (
          <GalleryItem
            key={item.id}
            item={item}
            onClick={onItemClick}
          />
        ))}
      </div>
    </div>
  </section>
);

// Main Component
const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('tutti');

  const filteredImages = useMemo(
    () => filterGalleryItems(GALLERY_DATA, filter),
    [filter]
  );

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleItemClick = (item) => {
    setSelectedImage(item);
  };

  const handleLightboxClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-page">
      <GalleryHero />
      <FilterSection filter={filter} onFilterChange={handleFilterChange} />
      <GalleryGrid items={filteredImages} onItemClick={handleItemClick} />
      <Lightbox selectedImage={selectedImage} onClose={handleLightboxClose} />
    </div>
  );
};

export default GalleryPage;