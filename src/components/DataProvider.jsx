import React, { createContext, useContext, useMemo } from 'react';
import { MENU_DATA, RESTAURANT_INFO, ALLERGEN_ICONS, BEVERAGE_CATEGORIES, MENU_SECTIONS, getAllMenuImages } from '../data/menuData';
import { GALLERY_DATA, FILTER_CATEGORIES, getAllGalleryImages } from '../data/galleryData';
import useImagePreloader from '../hooks/useImagePreloader';
import LoadingScreen from './LoadingScreen';

// Create the context
const DataContext = createContext();

// Custom hook to use the data context
export const useAppData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useAppData must be used within a DataProvider');
  }
  return context;
};

// Utility functions
const getBeveragesByCategory = (beverages) => {
  return Object.keys(BEVERAGE_CATEGORIES).map(category => ({
    category,
    title: BEVERAGE_CATEGORIES[category],
    items: beverages.filter(item => item.category === category)
  })).filter(group => group.items.length > 0);
};

const filterGalleryItems = (items, filter) => {
  return filter === 'tutti' ? items : items.filter(item => item.category === filter);
};

const DataProvider = ({ children }) => {
  // Combine all images for preloading
  const allImages = useMemo(() => {
    const menuImages = getAllMenuImages();
    const galleryImages = getAllGalleryImages();
    return [...menuImages, ...galleryImages];
  }, []);

  // Use the image preloader hook
  const {
    isLoading,
    progress,
    isImageLoaded,
    isImageFailed,
    loadedCount,
    failedCount,
    totalCount
  } = useImagePreloader(allImages);

  // Memoized data for performance
  const beverageGroups = useMemo(() => getBeveragesByCategory(MENU_DATA.bevande), []);

  // Context value
  const contextValue = {
    // Menu data
    menuData: MENU_DATA,
    restaurantInfo: RESTAURANT_INFO,
    allergenIcons: ALLERGEN_ICONS,
    beverageCategories: BEVERAGE_CATEGORIES,
    menuSections: MENU_SECTIONS,
    beverageGroups,

    // Gallery data
    galleryData: GALLERY_DATA,
    filterCategories: FILTER_CATEGORIES,

    // Utility functions
    getBeveragesByCategory,
    filterGalleryItems,

    // Loading state
    isLoading,
    progress,
    isImageLoaded,
    isImageFailed,
    loadedCount,
    failedCount,
    totalCount
  };

  // Show loading screen while images are preloading
  if (isLoading) {
    return <LoadingScreen progress={progress} />;
  }

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;