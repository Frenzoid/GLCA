import { useState, useEffect, useCallback } from 'react';

const useImagePreloader = (imageUrls) => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [failedImages, setFailedImages] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const preloadImage = useCallback((url) => {
    return new Promise((resolve) => {
      // Skip if already loaded or failed
      if (loadedImages.has(url) || failedImages.has(url)) {
        resolve(url);
        return;
      }

      // Skip video files from preloading
      if (url.includes('.mp4') || url.includes('.webm') || url.includes('.mov')) {
        resolve(url);
        return;
      }

      const img = new Image();

      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, url]));
        resolve(url);
      };

      img.onerror = () => {
        setFailedImages(prev => new Set([...prev, url]));
        resolve(url); // Resolve anyway to continue loading
      };

      img.src = url;
    });
  }, [loadedImages, failedImages]);

  useEffect(() => {
    if (!imageUrls?.length) {
      setIsLoading(false);
      return;
    }

    const preloadImages = async () => {
      setIsLoading(true);
      setProgress(0);

      const uniqueUrls = [...new Set(imageUrls)];
      let loadedCount = 0;

      // Load images in batches to avoid overwhelming the browser
      const batchSize = 5;
      for (let i = 0; i < uniqueUrls.length; i += batchSize) {
        const batch = uniqueUrls.slice(i, i + batchSize);

        await Promise.all(
          batch.map(async (url) => {
            await preloadImage(url);
            loadedCount++;
            setProgress((loadedCount / uniqueUrls.length) * 100);
          })
        );
      }

      setIsLoading(false);
    };

    preloadImages();
  }, [imageUrls, preloadImage]);

  const isImageLoaded = useCallback((url) => {
    return loadedImages.has(url);
  }, [loadedImages]);

  const isImageFailed = useCallback((url) => {
    return failedImages.has(url);
  }, [failedImages]);

  return {
    isLoading,
    progress,
    isImageLoaded,
    isImageFailed,
    loadedCount: loadedImages.size,
    failedCount: failedImages.size,
    totalCount: imageUrls?.length || 0
  };
};

export default useImagePreloader;