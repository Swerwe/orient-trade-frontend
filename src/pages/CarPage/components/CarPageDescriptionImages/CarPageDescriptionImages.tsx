import * as React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./CarPageDescriptionImages.scss"
import { useEffect, useState } from 'react';
import { getImageSize } from 'react-image-size';

interface ICarPageDescriptionImagesProps {
    className?:string;
    pageImages:string[];
}
async function fetchImageSize(link:string) {
  try {
      const dimensions = await getImageSize(link);
      return dimensions
  } catch (error) {
    return {width:1,height:1}
  }
}
const CarPageDescriptionImages: React.FunctionComponent<ICarPageDescriptionImagesProps> = ({pageImages}) => {
  const [imageLinks, setImageLinks] = useState<string[]>([]);
  useEffect(() => {
    const filterImages = async () => {
      const filteredImages = await Promise.all(
        pageImages.map(async (str) => {
          const { width, height } = await fetchImageSize(str);
          console.log(width, height);
          if (width === 1 && height === 1) return false;
          if (width === 319 && height === 239) return false;
          return true;
        })
      );
      
      const finalFilteredImages = pageImages.filter((_, index) => filteredImages[index]);
      setImageLinks(finalFilteredImages);
    };
  
    filterImages();
  },[]);
  return (<div>
    <ImageGallery additionalClass="CarPageGallery" showFullscreenButton={false} showPlayButton={false} 
    items={imageLinks.map(str => {
      return {original:str,thumbnail:str}
    })}
    />
  </div>);
};

export default CarPageDescriptionImages;
