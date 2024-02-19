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
  const [imageLinks, setImageLinks] = useState<string[]>(pageImages);
  const [auctionList,setAuctionList] = useState<string>('');
  useEffect(() => {
    if (!imageLinks.length) return
    setAuctionList(imageLinks[0])
    setImageLinks(imageLinks.slice(1));
  }, []);

  return (
    <div>
      <ImageGallery additionalClass="CarPageGallery" showFullscreenButton={true} showPlayButton={false}
        items={imageLinks.map(str => {
          return { original: str, thumbnail: str }
        })}
      />
      <ImageGallery additionalClass="AuctionList"  items={[{original:auctionList}]} showPlayButton={false}></ImageGallery >
    </div>);
};

export default CarPageDescriptionImages;
