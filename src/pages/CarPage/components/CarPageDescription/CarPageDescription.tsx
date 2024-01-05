import * as React from 'react';
import CarObject from '../../../../types/types';
import './CarPageDescription.scss'
import CarPageDescriptionImages from '../CarPageDescriptionImages/CarPageDescriptionImages';
import AuctionListDescription from '../AuctionListDescription/AuctionListDescription';

interface ICarPageDescriptionProps {
    className?: string;
    obj: CarObject;
}

const CarPageDescription: React.FunctionComponent<ICarPageDescriptionProps> = ({  obj }) => {
    const { title, equipment, auction, year, lot, capacity, transmission,lastBet, body, mileage, price, status, date } = obj;
    return (
    <div>
        <div className='CarPageDescription'>
            <CarPageDescriptionImages pageImages={obj.pageImages as string[]} />
            <div className="TextDescription">
                <h1>{title}</h1>
                <h2>Комплектация: <p>{equipment}</p></h2>
                <ul className='CarPageDescription__values'>
                    <li><span>Аукцион:</span> {auction}</li>
                    <li><span>Год:</span> {year}</li>
                    <li><span>Лот:</span> {lot}</li>
                    <li><span>Объем:</span> {capacity}</li>
                    <li><span>Трансмиссия:</span> {transmission}</li>
                    <li><span>Кузов:</span> {body}</li>
                    <li><span>Пробег:</span> {mileage}</li>
                    <li><span>Последняя ставка:</span> {lastBet}</li>
                    <li><span>Цена в РФ с ПТС:</span> {price  || "Не продано"} ₽</li>
                    <li><span>Статус:</span> {status}</li>
                    <li><span>Дата:</span> {date}</li>
                </ul>
            </div>
        </div>
        <AuctionListDescription />
    </div>
    );
};

export default CarPageDescription;
