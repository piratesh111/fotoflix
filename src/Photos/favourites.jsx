import React from 'react';
import Photos from './photos.jsx'; 
import { Link } from 'react-router-dom';

const Favourite = ({ favoritePhotos, handleRemoveFavorite }) => {
  return (
    <div>
      
      <nav className="navbar">
        <div className="navbar__logo">FotoFlix</div>
        <div className="navbar__links">
          <Link to="/">Home</Link>
        </div>
      </nav>

      <main>
        <section className="photos">
          <div className="photos-center">
            {favoritePhotos.map((image, index) => {
              return (
                <Photos
                  key={index}
                  {...image}
                  isFavorite={true} 
                  onFavoriteClick={() => handleRemoveFavorite(image)} 
                >
                  
                  <span>Added to Favorites</span>
                </Photos>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Favourite;