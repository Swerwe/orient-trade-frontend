import * as React from 'react';
import {CarObject} from '@/entities';
import './CarPageDescription.scss'
import CarPageDescriptionImages from '../CarPageDescriptionImages/CarPageDescriptionImages';
import AuctionListDescription from '../AuctionListDescription/AuctionListDescription';
import { DescriptionItem } from './DescriptionItem/DescriptionItem';
import { Translate } from './Translate/Translate';
interface ICarPageDescriptionProps {
    className?: string;
    obj: CarObject;
}

const CarPageDescription: React.FunctionComponent<ICarPageDescriptionProps> = ({ obj }) => {
    
    const {
        name,
        year,
        color,
        startPrice,
        auction,
        body,
        engine,
        auctionDate,
        complectation,
        mileage,
        rate,
        productionDate,
        lot,
        translateAudio,
        translateText,
        pageImages,


    } = obj;
    return (
        <div>
            <h1>{name}</h1>
            <div className='CarPageDescription'>
                <CarPageDescriptionImages className='ImageDescription' pageImages={pageImages as string[]} />
                <div className="TextDescription">

                    <ul className='CarPageDescription__values'>
                        <DescriptionItem name='Аукцион' content={auction} />
                        <DescriptionItem name='Лот' content={lot} />
                        <DescriptionItem name='Год' content={year} />
                        <DescriptionItem name='Цвет' content={color} />
                        <DescriptionItem name='Начальная цена' content={startPrice} />
                        <DescriptionItem name='Кузов' content={body} />
                        <DescriptionItem name='Двигатель' content={engine} />
                        <DescriptionItem name='Дата аукциона' content={auctionDate} />
                        <DescriptionItem name='Комплектация' content={complectation} />
                        <DescriptionItem name='Пробег' content={mileage} />
                        <DescriptionItem name='Оценка' content={rate} />
                        {productionDate && productionDate !== "undefined" &&  <DescriptionItem name='Дата производства' content={productionDate} />}
                    </ul>
                    <Translate translateAudio={translateAudio} translateText={translateText} />
                </div>
            </div>
            <AuctionListDescription />
        </div>
    );
};

export default CarPageDescription;
