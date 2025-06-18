import { useState, useMemo } from 'react';
import { useAppData } from './components/DataProvider';

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

const FilterSection = ({ filter, onFilterChange, filterCategories }) => (
  <section className="filter-section">
    <div className="container">
      <div className="filter-buttons">
        {Object.entries(filterCategories).map(([category, label]) => (
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
  const { galleryData, filterCategories, filterGalleryItems } = useAppData();

  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('tutti');

  const filteredImages = useMemo(
    () => filterGalleryItems(galleryData, filter),
    [galleryData, filter, filterGalleryItems]
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
      <FilterSection
        filter={filter}
        onFilterChange={handleFilterChange}
        filterCategories={filterCategories}
      />
      <GalleryGrid items={filteredImages} onItemClick={handleItemClick} />
      <Lightbox selectedImage={selectedImage} onClose={handleLightboxClose} />
    </div>
  );
};

export default GalleryPage;