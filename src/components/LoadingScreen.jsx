import React from 'react';

const LoadingScreen = ({ progress = 0, message = "Caricamento immagini..." }) => {
  return (
    <div className="image-loading-container">
      <div className="loading-overlay">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <h3 style={{
            color: '#1a3d1a',
            marginBottom: '15px',
            fontFamily: 'Georgia, serif'
          }}>
            Casa Ana
          </h3>
          <p style={{
            color: '#6c757d',
            marginBottom: '20px',
            fontSize: '1rem'
          }}>
            {message}
          </p>

          {/* Progress Bar */}
          <div style={{
            width: '100%',
            height: '8px',
            backgroundColor: '#e0e0e0',
            borderRadius: '4px',
            overflow: 'hidden',
            marginBottom: '10px'
          }}>
            <div
              style={{
                width: `${Math.min(progress, 100)}%`,
                height: '100%',
                backgroundColor: '#d4af37',
                borderRadius: '4px',
                transition: 'width 0.3s ease',
                background: 'linear-gradient(90deg, #d4af37, #e6c157)'
              }}
            />
          </div>

          {/* Progress Text */}
          <p style={{
            color: '#1a3d1a',
            fontSize: '0.9rem',
            fontWeight: '600'
          }}>
            {Math.round(progress)}%
          </p>

          {/* Fun message */}
          <p style={{
            color: '#6c757d',
            fontSize: '0.85rem',
            fontStyle: 'italic',
            marginTop: '10px'
          }}>
            Preparando le nostre specialità per voi...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;