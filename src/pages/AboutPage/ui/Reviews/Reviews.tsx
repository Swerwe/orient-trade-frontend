import * as React from 'react';
import './Reviews.scss';
export const Reviews: React.FC = () => {
    return (
      <div className="Reviews" id="Reviews">
        <div className='text'>
            <h1>Обзоры купленных авто</h1>

        </div>
        <div className="images">
            <img src={process.env.PUBLIC_URL + '2024-02-22 01.17.05.webp'} />
            <img src={process.env.PUBLIC_URL + '2024-02-22 01.23.46.webp'} />           
            <img style={{objectPosition:"90%"}} src={process.env.PUBLIC_URL + '2024-02-22 01.28.04.webp'} />
            <img style={{objectPosition:"90%"}} src={process.env.PUBLIC_URL + '2024-02-22 01.31.06.webp'} />
        </div>
      </div>
    );
};
