import * as React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./CarPageDescriptionImages.scss"

interface ICarPageDescriptionImagesProps {
  className?: string;
  pageImages: string[];
}
const CarPageDescriptionImages: React.FunctionComponent<ICarPageDescriptionImagesProps> = ({ pageImages }) => {

  return (
      <ImageGallery lazyLoad={true} additionalClass="CarPageGallery" showFullscreenButton={true} showPlayButton={false} 
        items={pageImages.map(str => {
          return { original: str, thumbnail: str, thumbnailLoading:"lazy" }
        })}
      />
      );
};

export default CarPageDescriptionImages;
