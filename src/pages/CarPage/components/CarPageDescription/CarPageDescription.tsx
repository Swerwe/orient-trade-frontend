import * as React from 'react';
import CarObject from '../../../../types/types';
import './CarPageDescription.scss'
import CarPageDescriptionImages from '../CarPageDescriptionImages/CarPageDescriptionImages';
import AuctionListDescription from '../AuctionListDescription/AuctionListDescription';

interface ICarPageDescriptionProps {
    className?: string;
    obj: CarObject;
}

const CarPageDescription: React.FunctionComponent<ICarPageDescriptionProps> = ({ obj }) => {
    //const { title, equipment, auction, year, lot, capacity, transmission,lastBet, body, mileage, price, status, date } = obj;
    const { title, equipment, rate, auction, year, lot, capacity, transmission, lastBet, body, mileage, price, status, date } = {
        title: 'ALFAROMEO GIULIETTA',
        rate: '4',
        equipment: 'ｳﾞｪ Low -ﾁｪ',
        year: '2018',
        capacity: 1800,
        transmission: '',
        body: '940181',
        mileage: '45 000km',
        auction: 'AUCNET',
        lot: 36016,
        status: 'Unhandled',
        date: '2024-02-19 12:05:00 GMT+9',
        lastBet: '¥1,235,000',
        price: '¥1,235,000',
    }
    obj.pageImages = [
        'https://img.ecarjp.com/auto/ecf8af49-5427-4e3c-bbc2-3f857791a4e0.jpg',
        'https://img.ecarjp.com/auto/ee0f87a0-7f89-4422-a987-c086b4832db4.jpg',
        'https://img.ecarjp.com/auto/6b014882-40a4-4abb-9f61-d47b16c1bafb.jpg',
        'https://img.ecarjp.com/auto/b93a7736-5489-411c-88a5-c809d91830f6.jpg',
        'https://img.ecarjp.com/auto/71e2cf6d-1e5e-4d79-95f4-b15caadba51c.jpg',
        'https://img.ecarjp.com/auto/bad97aef-94cd-4145-a9f7-b3b0ae35d91f.jpg',
        'https://img.ecarjp.com/auto/6b0867bb-3aef-467d-aa6b-513bfbda85ff.jpg',
        'https://img.ecarjp.com/auto/afa12914-34ae-49b0-9ff2-fb249b8fae38.jpg',
        'https://img.ecarjp.com/auto/6b33fe54-60df-4914-9973-b7eb9df28b48.jpg',
        'https://img.ecarjp.com/auto/9f54331a-b851-4766-a14f-91527380a6ba.jpg',
        'https://img.ecarjp.com/auto/ee471551-629d-46e8-a4e3-b4215794da5d.jpg',
        'https://img.ecarjp.com/auto/4aeeb400-4d61-4e74-8c8c-da21cc01f069.jpg']
    return (
        <div>
            <h1>{title}</h1>
            <div className='CarPageDescription'>
                <CarPageDescriptionImages pageImages={obj.pageImages as string[]} />
                <div className="TextDescription">

                    <ul className='CarPageDescription__values'>
                        <li><span>Аукцион:</span> {auction}</li>
                        <li><span>Год:</span> {year}</li>
                        <li><span>Лот:</span>№ {lot}</li>
                        <li><span>Объем:</span> {capacity}см³</li>
                        <li><span>Комплектация:</span>{equipment}</li>
                        <li><span>Кузов:</span> {body}</li>
                        <li><span>Пробег:</span> {mileage}</li>
                        <li><span>Последняя ставка:</span> {lastBet}</li>
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
