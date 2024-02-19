import * as React from 'react';
import './Reviews.scss';
export const Reviews: React.FC = () => {
    return (
      <div className="Reviews" id="Reviews">
        <div className='text'>
            <h1>Обзоры купленных авто</h1>

        </div>
        <div className="images">
            <img src={process.env.PUBLIC_URL + 'NZE181-6500143-9.jpeg'} />
            <img src={process.env.PUBLIC_URL + 'car2.jpeg'} />           
            <img src={process.env.PUBLIC_URL + 'car3.jpeg'} />
            <img src={process.env.PUBLIC_URL + 'map.jpeg'} />
        </div>
      </div>
    );
};
