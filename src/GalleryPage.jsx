import React, { useState } from 'react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      title: "Mici Tradizionali",
      description: "Le nostre famose salsicce rumene alla griglia",
      category: "piatti"
    },
    {
      id: 2,
      title: "Casa Ana di Notte",
      description: "L'atmosfera magica del nostro ristorante",
      category: "ambiente"
    },
    {
      id: 3,
      title: "Mămăligă cu Brânză",
      description: "Polenta tradizionale con formaggio e uovo",
      category: "piatti"
    },
    {
      id: 4,
      title: "Terrazza Estiva",
      description: "Il nostro spazio esterno sotto le viti",
      category: "ambiente"
    },
    {
      id: 5,
      title: "Platto Misto Speciale",
      description: "Assortimento di carni alla griglia",
      category: "piatti"
    },
    {
      id: 6,
      title: "Sala Principale",
      description: "L'interno accogliente del nostro grotto",
      category: "ambiente"
    },
    {
      id: 7,
      title: "Sarmale",
      description: "Involtini di cavolo fatti in casa",
      category: "piatti"
    },
    {
      id: 8,
      title: "Eventi Speciali",
      description: "Serate con musica tradizionale rumena",
      category: "eventi"
    },
    {
      id: 9,
      title: "Papanași",
      description: "Il nostro dolce tradizionale",
      category: "piatti"
    }
  ];

  const [filter, setFilter] = useState('tutti');

  const filteredImages = filter === 'tutti'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="gallery-page">
      {/* Gallery Hero */}
      <section className="gallery-hero">
        <div className="container">
          <h1 className="events-title">La Nostra Galleria</h1>
          <p className="gallery-subtitle">Scopri l'atmosfera unica del Grotto Laura</p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filter === 'tutti' ? 'active' : ''}`}
              onClick={() => setFilter('tutti')}
            >
              Tutti
            </button>
            <button
              className={`filter-btn ${filter === 'piatti' ? 'active' : ''}`}
              onClick={() => setFilter('piatti')}
            >
              Piatti
            </button>
            <button
              className={`filter-btn ${filter === 'ambiente' ? 'active' : ''}`}
              onClick={() => setFilter('ambiente')}
            >
              Ambiente
            </button>
            <button
              className={`filter-btn ${filter === 'eventi' ? 'active' : ''}`}
              onClick={() => setFilter('eventi')}
            >
              Eventi
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="gallery-item"
                onClick={() => setSelectedImage(image)}
              >
                <div className="gallery-item-overlay">
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                </div>
                <div className="gallery-placeholder">
                  {image.category === 'piatti' ? '🍽️' :
                    image.category === 'ambiente' ? '🏛️' : '🎉'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
            <div className="lightbox-image">
              <div className="gallery-placeholder-large">
                {selectedImage.category === 'piatti' ? '🍽️' :
                  selectedImage.category === 'ambiente' ? '🏛️' : '🎉'}
              </div>
            </div>
            <div className="lightbox-info">
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Instagram Section */}
      <section className="instagram-section">
        <div className="container">
          <h2 className="section-title">Seguici su Instagram</h2>
          <p className="instagram-handle">@grottolauracasaana</p>
          <div className="instagram-grid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="instagram-item">
                <div className="instagram-placeholder">📸</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;