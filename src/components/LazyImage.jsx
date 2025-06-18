import React, { useState, useEffect } from 'react';

const LazyImage = ({
  src,
  alt,
  className = '',
  style = {},
  placeholderText = '🍽️',
  onLoad,
  onError,
  ...props
}) => {
  const [imageStatus, setImageStatus] = useState('loading');
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (!src) {
      setImageStatus('error');
      return;
    }

    setImageStatus('loading');

    const img = new Image();

    img.onload = () => {
      setImageSrc(src);
      setImageStatus('loaded');
      onLoad?.();
    };

    img.onerror = () => {
      setImageStatus('error');
      onError?.();
    };

    img.src = src;
  }, [src, onLoad, onError]);

  if (imageStatus === 'loading') {
    return (
      <div className={`lazy-image-loading ${className}`} style={style} {...props}>
        <div className="lazy-image-content">
          <div className="lazy-image-icon">⏳</div>
          <div className="lazy-image-text">Caricamento...</div>
        </div>
      </div>
    );
  }

  if (imageStatus === 'error') {
    return (
      <div className={`lazy-image-placeholder ${className}`} style={style} {...props}>
        <div className="lazy-image-content">
          <div className="lazy-image-icon">{placeholderText}</div>
          <div className="lazy-image-text">Immagine non disponibile</div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`lazy-image-loaded ${className}`}
      style={style}
      {...props}
    />
  );
};

export default LazyImage;