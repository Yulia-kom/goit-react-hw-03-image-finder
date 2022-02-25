import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import style from './ImageGallery.module.css';

export default function ImageGallery({ images, handleTogleModal }) {
  return (
    <ul className={style.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          handleTogleModal={handleTogleModal}
          key={id}
          img={webformatURL}
          modalImg={largeImageURL}
        />
      ))}
    </ul>
  );
}
