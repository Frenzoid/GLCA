import React from 'react';

const EventsPage = () => {
  const weeklyEvents = [
    {
      day: "Martedì",
      title: "Serata Ciorbă",
      description: "Tutte le zuppe tradizionali rumene a prezzo speciale",
      price: "12.00 CHF",
      icon: "🍲"
    },
    {
      day: "Mercoledì",
      title: "Mici & Birra",
      description: "Mici illimitati con birra artigianale rumena",
      price: "25.00 CHF",
      icon: "🍺"
    },
    {
      day: "Giovedì",
      title: "Serata Vegetariana",
      description: "Menu speciale con piatti vegetariani tradizionali",
      price: "Menu da 18.00 CHF",
      icon: "🥗"
    },
    {
      day: "Venerdì",
      title: "Musica Live Rumena",
      description: "Cena con musica folk tradizionale dal vivo",
      time: "Dalle 19:30",
      icon: "🎵"
    },
    {
      day: "Sabato",
      title: "Grigliata Speciale",
      description: "Assortimento completo di carni alla griglia",
      price: "35.00 CHF per 2 persone",
      icon: "🔥"
    },
    {
      day: "Domenica",
      title: "Pranzo della Famiglia",
      description: "Menu tradizionale domenicale come in Romania",
      time: "12:00 - 15:00",
      icon: "👨‍👩‍👧‍👦"
    }
  ];

  const specialEvents = [
    {
      date: "1 Dicembre 2024",
      title: "Festa Nazionale della Romania",
      description: "Celebriamo la nostra patria con un menu speciale, musica tradizionale e danze folkloristiche. Prenotazione obbligatoria.",
      icon: "🇷🇴"
    },
    {
      date: "24-25 Dicembre 2024",
      title: "Natale Rumeno",
      description: "Menu tradizionale natalizio con sarmale, cozonac e vin brulé rumeno. Atmosfera festiva garantita!",
      icon: "🎄"
    },
    {
      date: "31 Dicembre 2024",
      title: "Capodanno al Grotto",
      description: "Cenone di 5 portate, musica dal vivo, brindisi di mezzanotte con țuică. Posti limitati!",
      price: "120.00 CHF per persona",
      icon: "🎊"
    },
    {
      date: "Ogni Primo Sabato del Mese",
      title: "Corso di Cucina Rumena",
      description: "Impara a preparare i piatti tradizionali rumeni con la nostra chef Ana. Include pranzo e ricettario.",
      price: "80.00 CHF",
      icon: "👩‍🍳"
    }
  ];

  const privateEvents = {
    title: "Eventi Privati",
    description: "Il Grotto Laura è la location perfetta per i tuoi eventi speciali",
    services: [
      {
        type: "Compleanni",
        capacity: "Fino a 40 persone",
        icon: "🎂"
      },
      {
        type: "Matrimoni",
        capacity: "Fino a 60 persone",
        icon: "💒"
      },
      {
        type: "Eventi Aziendali",
        capacity: "Sale private disponibili",
        icon: "💼"
      },
      {
        type: "Battesimi e Comunioni",
        capacity: "Menu personalizzati",
        icon: "⛪"
      }
    ]
  };

  return (
    <div className="events-page">
      {/* Events Hero */}
      <section className="events-hero">
        <div className="container">
          <h1 className="events-title">Eventi & Serate Speciali</h1>
          <p className="events-subtitle">Vivi l'esperienza autentica della tradizione rumena</p>
        </div>
      </section>

      {/* Weekly Events */}
      <section className="weekly-events-section">
        <div className="container">
          <h2 className="section-title">Eventi Settimanali</h2>
          <div className="weekly-events-grid">
            {weeklyEvents.map((event, index) => (
              <div key={index} className="event-card weekly-event">
                <div className="event-icon">{event.icon}</div>
                <div className="event-day">{event.day}</div>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                {event.price && <div className="event-price">{event.price}</div>}
                {event.time && <div className="event-time">{event.time}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="special-events-section">
        <div className="container">
          <h2 className="section-title">Eventi Speciali</h2>
          <div className="special-events-list">
            {specialEvents.map((event, index) => (
              <div key={index} className="special-event-card">
                <div className="special-event-header">
                  <div className="special-event-icon">{event.icon}</div>
                  <div className="special-event-info">
                    <h3 className="special-event-title">{event.title}</h3>
                    <div className="special-event-date">{event.date}</div>
                  </div>
                </div>
                <p className="special-event-description">{event.description}</p>
                {event.price && <div className="special-event-price">{event.price}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Events */}
      <section className="private-events-section">
        <div className="container">
          <h2 className="section-title">{privateEvents.title}</h2>
          <p className="section-description">{privateEvents.description}</p>
          <div className="private-events-grid">
            {privateEvents.services.map((service, index) => (
              <div key={index} className="private-event-card">
                <div className="private-event-icon">{service.icon}</div>
                <h4 className="private-event-type">{service.type}</h4>
                <p className="private-event-capacity">{service.capacity}</p>
              </div>
            ))}
          </div>
          <div className="contact-cta">
            <h3>Richiedi un Preventivo</h3>
            <p>Contattaci per organizzare il tuo evento perfetto</p>
            <div className="contact-buttons">
              <a href="tel:+41918273587" className="cta-button">
                📞 Chiama Ora
              </a>
              <a href="mailto:eventi@grottolauracasaana.ch" className="cta-button secondary">
                ✉️ Invia Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;