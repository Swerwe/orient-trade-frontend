import * as React from 'react';
import './Promo.scss';

export const Promo: React.FC = () => {
    return (
      <div className="Promo">
        <span className="header">Акции для наших подписчиков!</span>
        <div className="description">
            1. Резина в подарок новым клиентам!
            <br/>
            <br/>
            2. 50 тысяч скидки или кэшбек подписчикам на авто из наличия!
        </div>
        <div className="buttons">
            <img className='arrow' src={process.env.PUBLIC_URL + 'arrow.svg'} />
            <a href='https://t.me/Japcar25'><button className='subscribe'>Подписаться</button></a>
        </div>

      </div>
    );
};
