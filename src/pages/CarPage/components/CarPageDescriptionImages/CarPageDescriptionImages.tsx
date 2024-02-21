import * as React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./CarPageDescriptionImages.scss"
import { useEffect, useState } from 'react';

interface ICarPageDescriptionImagesProps {
  className?: string;
  pageImages: string[];
}
const CarPageDescriptionImages: React.FunctionComponent<ICarPageDescriptionImagesProps> = ({ pageImages }) => {

  return (
      <ImageGallery additionalClass="CarPageGallery" showFullscreenButton={true} showPlayButton={false} 
        items={pageImages.map(str => {
          return { original: str, thumbnail: str }
        })}
      />
      );
};

export default CarPageDescriptionImages;
