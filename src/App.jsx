import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomePage from './HomePage';
import GalleryPage from './GalleryPage';
import EventsPage from './EventsPage';

import logo from './assets/logo.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './styles.css';

function App() {
  // a ref to the collapse container
  const collapseRef = useRef(null);

  // helper to close the menu
  const closeNavbar = () => {
    const collapseEl = collapseRef.current;
    if (collapseEl.classList.contains('show')) {
      // Option A: directly remove the Bootstrap class
      collapseEl.classList.remove('show');
    }
  };

  // add click listeners to all nav-links once
  useEffect(() => {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.addEventListener('click', closeNavbar);
    });
    // cleanup
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', closeNavbar);
      });
    };
  }, []);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="app">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <Link className="navbar-brand" to="/" onClick={closeNavbar}>
              <img src={logo} alt="Grotto Laura by Casa Ana" className="logo-img" />
              Grotto Laura by<br /> Casa Ana
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarNav"
              ref={collapseRef}
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gallery">Galleria</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/events">Eventi</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>

        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h5>Grotto Laura by Casa Ana</h5>
                <p>Autentica cucina rumena nel cuore della Svizzera</p>
              </div>
              <div className="col-md-4">
                <h5>Orari</h5>
                <p>
                  Mar-Dom: 11:00 - 16:00 | 18:00 - 22:00<br />
                  Lun: Chiuso<br />
                </p>
              </div>
              <div className="col-md-4">
                <h5>Contatti</h5>
                <p>Caraa de San Fedee 2 <br /> 6535 Roveredo Svizzera</p>
                <p>Tel: 076 617 00 55</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
