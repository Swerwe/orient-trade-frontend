import * as React from 'react';
import './Description.scss';
export const Description: React.FC = () => {
    return (
      <div className="Description" id="Description">
        <div className='text'>
            <h1>О нашей компании</h1>
            <span className="text-descr">
            Мы занимаемся Японскими авто с 2010 года. Всегда рады помочь в выборе и доставке автомобиля под Ваши цели и бюджет.<br></br>
            -Честность и прозрачность, Договор!<br></br>
            -Дешевле и качественнее чем на рынке!<br></br>
            -Отправим по России! Звоните, пишите !<br></br>
            </span>
        </div>
        <div className="images">
            <img src={process.env.PUBLIC_URL + '2024-02-22 01.38.12.jpg'} />
            <img src={process.env.PUBLIC_URL + 'car2.jpeg'} />           
            <img src={process.env.PUBLIC_URL + 'car3.jpeg'} />
            <img src={process.env.PUBLIC_URL + 'map.jpeg'} />
        </div>
      </div>
    );
};
