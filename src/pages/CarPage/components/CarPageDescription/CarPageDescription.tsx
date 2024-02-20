import * as React from 'react';
import CarObject from '../../../../types/types';
import './CarPageDescription.scss'
import CarPageDescriptionImages from '../CarPageDescriptionImages/CarPageDescriptionImages';
import AuctionListDescription from '../AuctionListDescription/AuctionListDescription';
import { DescriptionItem } from './DescriptionItem/DescriptionItem';

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
                <CarPageDescriptionImages pageImages={pageImages as string[]} />
                <div className="TextDescription">

                    <ul className='CarPageDescription__values'>
                        <DescriptionItem name='Год' content={year}/>
                        <DescriptionItem name='Год' content={color}/>
                        <DescriptionItem name='Год' content={startPrice}/>
                        <DescriptionItem name='Год' content={auction}/>
                        <DescriptionItem name='Год' content={body}/>
                        <DescriptionItem name='Год' content={engine}/>
                        <DescriptionItem name='Год' content={auctionDate}/>
                        <DescriptionItem name='Год' content={complectation}/>
                        <DescriptionItem name='Год' content={mileage}/>
                        <DescriptionItem name='Год' content={rate}/>
                        <DescriptionItem name='Год' content={productionDate}/>
                        {translateAudio && <audio src={translateAudio}></audio>}
                        <DescriptionItem name='Год' content={lot}/>
                        <DescriptionItem name='Год' content={translateText}/>
                    </ul>
                </div>
            </div>
            <AuctionListDescription />
        </div>
    );
};

export default CarPageDescription;
