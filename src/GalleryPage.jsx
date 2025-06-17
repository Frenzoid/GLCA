import React, { useState } from 'react';

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
import food9 from './assets/gallery/food9.jpg';
import hotel1 from './assets/gallery/hotel1.jpg';
import hotel2 from './assets/gallery/hotel2.jpg';
import mici from './assets/gallery/mici.jpg';
import mix1 from './assets/gallery/mix1.jpg';
import outside1 from './assets/gallery/outside1.jpg';
import salumi1 from './assets/gallery/salumi1.mp4';
import salumi3 from './assets/gallery/salumi3.jpg';
import table1 from './assets/gallery/table1.jpg';
import table2 from './assets/gallery/table2.jpg';
import table3 from './assets/gallery/table3.jpg';
import table4 from './assets/gallery/table4.jpg';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
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
      title: "Specialità della Casa",
      description: "Piatto principale con ingredienti freschi",
      category: "piatti",
      image: food1,
      type: "image"
    },
    {
      id: 3,
      title: "Antipasti Rumeni",
      description: "Selezione di antipasti tradizionali",
      category: "piatti",
      image: food2,
      type: "image"
    },
    {
      id: 4,
      title: "Piatto del Giorno",
      description: "Specialità preparata con ricette tradizionali",
      category: "piatti",
      image: food3,
      type: "image"
    },
    {
      id: 5,
      title: "Cucina Rumena",
      description: "Autentici sapori della Romania",
      category: "piatti",
      image: food4,
      type: "image"
    },
    {
      id: 6,
      title: "Pranzo Speciale",
      description: "Menu completo con portate tradizionali",
      category: "piatti",
      image: food5,
      type: "image"
    },
    {
      id: 7,
      title: "Griglia Mista",
      description: "Assortimento di carni alla griglia",
      category: "piatti",
      image: food6,
      type: "image"
    },
    {
      id: 8,
      title: "Dolci Tradizionali",
      description: "Dessert della tradizione rumena",
      category: "piatti",
      image: food7,
      type: "image"
    },
    {
      id: 9,
      title: "Cena Romantica",
      description: "Piatti perfetti per una serata speciale",
      category: "piatti",
      image: food8,
      type: "image"
    },
    {
      id: 10,
      title: "Menu Degustazione",
      description: "Selezione dei nostri migliori piatti",
      category: "piatti",
      image: food9,
      type: "image"
    },
    {
      id: 11,
      title: "Antipasti Freddi",
      description: "Selezione di antipasti freddi della casa",
      category: "piatti",
      image: cold2,
      type: "image"
    },
    {
      id: 12,
      title: "Piatto Freddo Speciale",
      description: "Antipasti freddi con ingredienti freschi",
      category: "piatti",
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
      title: "Sala del Grotto",
      description: "L'interno accogliente del nostro ristorante",
      category: "ambiente",
      image: hotel1,
      type: "image"
    },
    {
      id: 18,
      title: "Ambiente Tradizionale",
      description: "Atmosfera autentica e calorosa",
      category: "ambiente",
      image: hotel2,
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
      title: "Cena Intima",
      description: "Tavolo perfetto per una cena romantica",
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
      title: "Serata Speciale",
      description: "Evento con musica tradizionale rumena",
      category: "eventi",
      image: evento,
      type: "image"
    },
    {
      id: 25,
      title: "Celebrazione",
      description: "Momenti di festa nel nostro grotto",
      category: "eventi",
      image: evento2,
      type: "image"
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
                {image.type === 'video' ? (
                  <video 
                    src={image.image} 
                    className="gallery-image"
                    muted
                    loop
                    autoPlay
                  />
                ) : (
                  <img 
                    src={image.image} 
                    alt={image.title}
                    className="gallery-image"
                  />
                )}
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
              {selectedImage.type === 'video' ? (
                <video 
                  src={selectedImage.image} 
                  className="lightbox-media"
                  controls
                  autoPlay
                />
              ) : (
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="lightbox-media"
                />
              )}
            </div>
            <div className="lightbox-info">
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;