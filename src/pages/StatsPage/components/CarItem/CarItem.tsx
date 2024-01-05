import React, { useEffect, useState } from 'react';
import './CarItem.scss';
import CarObject from '../../../../types/types';
import CarItemDescription from './components/CarItemDescription/CarItemDescription';
import { getImageSize } from 'react-image-size';

async function fetchImageSize(link:string) {
  try {
      const dimensions = await getImageSize(link);
      return dimensions
  } catch (error) {
    return {width:1,height:1}
  }
}
interface IProps {
    obj: CarObject
}

const CarItem: React.FC<IProps> = (props) => {
    const [imageLinks, setImageLinks] = useState<string[]>([]);
    useEffect(() => {
      const filterImages = async () => {
        const filteredImages = await Promise.all(
            props.obj.images.map(async (str) => {
            const { width, height } = await fetchImageSize(str);
            console.log(width, height);
            if (width === 1 && height === 1) return false;
            if (width === 319 && height === 239) return false;
            return true;
          })
        );
        const finalFilteredImages = props.obj.images.filter((_, index) => filteredImages[index]);
        setImageLinks(finalFilteredImages);
      };
    
      filterImages();
    },[]);
    
    return (
        <div className='CarItem'>
            <div className='CarItem-Images'>
                <img src={imageLinks[0] || "https://cdn1.ozone.ru/s3/multimedia-x/6391435521.jpg"}></img>
            </div>
            <CarItemDescription obj ={props.obj} />

        </div>

    )

}
export default CarItem;