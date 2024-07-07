import * as React from 'react';
import './Services.scss';
export const Services: React.FC = () => {
    return (
      <div className="Services">
        <h1 className="header">Наши услуги</h1>
        <div className="service-items">
            <div className="service-item">
                <img src={process.env.PUBLIC_URL + "ship.svg"} />
                <span className="service-item__header">Авто из Японии под Заказ</span>
                <div className="service-item__description">
                    Выгодно для Вас и быстро привезем честный авто из Японии под Ваши цели и бюджет.
                    Огромный опыт. Всегда рады помочь!
                 </div>
            </div>
            <div className="service-item">
            <img src={process.env.PUBLIC_URL + "speed.svg"} />
                <span className="service-item__header">Авто в Японии в наличии</span>
                <div className="service-item__description">
                    Предлагаем широкий выбор авто,
                    которые уже ждут своего хозяина на нашей стоянке в Тояме.
                    Быстрая отправка во Владивосток.<br />
                    Наши авто:<br />
                    <a href="https://auto.drom.ru/dealer325014/#dealerBulls">https://auto.drom.ru/dealer325014/#dealerBulls</a>
                    
                </div>
            </div>
            <div className="service-item">
            <img src={process.env.PUBLIC_URL + "question.svg"} />
                <span className="service-item__header">Консультации по выбору авто</span>
                <div className="service-item__description">
                    Если вы еще не определились с маркой и моделью - обращайтесь.
                    Постараемся посоветовать оптимальный вариант под Ваши задачи и бюджет исходя из своего обширного опыта.
                </div>
            </div>
        </div>
      </div>
    );
};
