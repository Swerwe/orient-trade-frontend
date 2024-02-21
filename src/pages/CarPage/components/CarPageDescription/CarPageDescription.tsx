import * as React from 'react';
import CarObject from '../../../../types/types';
import './CarPageDescription.scss'
import CarPageDescriptionImages from '../CarPageDescriptionImages/CarPageDescriptionImages';
import AuctionListDescription from '../AuctionListDescription/AuctionListDescription';
import { DescriptionItem } from './DescriptionItem/DescriptionItem';
import { Translate } from './Translate/Translate';
interface ICarPageDescriptionProps {
    className?: string;
    obj: CarObject;
}
/*
const test = {
    "name": "TOYOTA PROBOX",
    "year": "2019",
    "color": "white",
    "startPrice": "¥50,000",
    "auction": " CAA Chubu ",
    "body": "NCP165V",
    "engine": "FAT  1500 cc",
    "auctionDate": "2024-02-21 14:09:00 GMT+9",
    "complectation": "DX Comfort 4WD",
    "mileage": "108 000km",
    "rate": "4",
    "productionDate": "2018-11-15  Impassable",
    "lot": "40013",
    "translateAudio": "https://files.akebono.world/01c66be1-63bd-48d6-a163-0d019759e27b.mp3",
    "translateText": " CEILING SCUFFING\nLUGGAGE (BOOT) DENTED AND SCRATCHED\nINTERIOR LITTLE DIRTY\n\nLIGHT SCRATCHES ON BODY (GENERAL) ОБШИВКА ПОТОЛОКА ПОТЕРТАЯ\nВМЯТИНЫ И ЦАРАПИНЫ В БАГАЖНИКЕ\nНЕБОЛЬШОЕ ЗАГРЯЗНЕНИЕ САЛОНА\nЦАРАПИНЫ НА БОКОВЫХ ЗЕРКАЛАХ\nНЕЗНАЧИТЕЛЬНЫЕ ЦАРАПИНЫ НА КУЗОВЕ (ОБОБЩЕННО)\nРЖАВЧИНА ПО ПОДВЕСКЕ\nЭЛЕКТРОСТЕКЛОПОДЪЁМНИК ТОЛЬКО СО СТОРОНЫ ВОДИТЕЛЬСКОГО СИДЕНЬЯ",
    "pageImages": [
        "https://img.ecarjp.com/auto/ff030601-7ebd-4bec-adf7-cc03f5dc55f8.jpg",
        "https://img.ecarjp.com/auto/592a3aa6-848e-40be-9931-8bed6e9a4025.jpg",
        "https://img.ecarjp.com/auto/9129bd73-ef6a-48b8-9705-20078db51902.jpg",
        "https://img.ecarjp.com/auto/4364d8fa-fb46-46b5-8f60-db81bbc324c0.jpg",
        "https://img.ecarjp.com/auto/de539fda-ef10-40c0-85b5-b3fa6dba8153.jpg",
        "https://img.ecarjp.com/auto/24a0d078-b29b-4737-b038-3aa84c11f33e.jpg",
        "https://img.ecarjp.com/auto/ed72c499-4152-4df4-b83a-584a9cb09ccf.jpg",
        "https://img.ecarjp.com/auto/ddd6a67f-e7ca-4ccf-830a-046f99caa626.jpg",
        "https://img.ecarjp.com/auto/a122be7c-627b-4921-84a6-7c4120b1b2e6.jpg",
        "https://img.ecarjp.com/auto/18b265a1-b88d-49b5-8bc0-c553cbf0c3df.jpg",
        "https://img.ecarjp.com/auto/aa9c7d9d-45ff-4674-ab59-2c47eb9a03db.jpg",
        "https://img.ecarjp.com/auto/7d550950-83dd-4ef2-92ac-8fd0078d9baf.jpg",
        "https://img.ecarjp.com/auto/2149596f-ceb2-48ff-a97c-98a12c75327e.jpg",
        "https://img.ecarjp.com/auto/305f863f-f54b-4a27-a8e2-96c77bddf40b.jpg",
        "https://img.ecarjp.com/auto/ec606b12-d5d2-42ac-835e-30a79c48d95c.jpg",
        "https://img.ecarjp.com/auto/8bcfc834-7df1-40b0-9a79-aedfc30684d4.jpg",
        "https://img.ecarjp.com/auto/996404c4-aa08-44de-a491-a8a8d4e0bcd3.jpg",
        "https://img.ecarjp.com/auto/56a35434-d162-4fb4-8185-c0e70a921d0f.jpg",
        "https://img.ecarjp.com/auto/fca3520c-da72-4712-8f77-43b1c3179732.jpg",
        "https://img.ecarjp.com/auto/e11596bc-d93a-4ce0-9fc1-8836775d1fe1.jpg",
        "https://img.ecarjp.com/auto/71616767-e6ca-46fd-bb7e-59e095d72e18.jpg",
        "https://img.ecarjp.com/auto/1b8b2b25-d0bb-4ecc-9e6e-793b35e3f858.jpg",
        "https://img.ecarjp.com/auto/6b72dcbd-a60b-4042-97e5-241e22204fd6.jpg",
        "https://img.ecarjp.com/auto/b176d520-b441-46d7-af75-b83634cf8ad4.jpg"
    ],
    "_id": "2dfe03363637a92_e",
    "images": [
        "https://img.ecarjp.com/auto/ff030601-7ebd-4bec-adf7-cc03f5dc55f8.jpg",
        "https://img.ecarjp.com/auto/592a3aa6-848e-40be-9931-8bed6e9a4025.jpg",
        "https://img.ecarjp.com/auto/9129bd73-ef6a-48b8-9705-20078db51902.jpg",
        "https://img.ecarjp.com/auto/4364d8fa-fb46-46b5-8f60-db81bbc324c0.jpg",
        "https://img.ecarjp.com/auto/de539fda-ef10-40c0-85b5-b3fa6dba8153.jpg",
        "https://img.ecarjp.com/auto/24a0d078-b29b-4737-b038-3aa84c11f33e.jpg",
        "https://img.ecarjp.com/auto/ed72c499-4152-4df4-b83a-584a9cb09ccf.jpg",
        "https://img.ecarjp.com/auto/ddd6a67f-e7ca-4ccf-830a-046f99caa626.jpg",
        "https://img.ecarjp.com/auto/a122be7c-627b-4921-84a6-7c4120b1b2e6.jpg",
        "https://img.ecarjp.com/auto/18b265a1-b88d-49b5-8bc0-c553cbf0c3df.jpg",
        "https://img.ecarjp.com/auto/aa9c7d9d-45ff-4674-ab59-2c47eb9a03db.jpg",
        "https://img.ecarjp.com/auto/7d550950-83dd-4ef2-92ac-8fd0078d9baf.jpg",
        "https://img.ecarjp.com/auto/2149596f-ceb2-48ff-a97c-98a12c75327e.jpg",
        "https://img.ecarjp.com/auto/305f863f-f54b-4a27-a8e2-96c77bddf40b.jpg",
        "https://img.ecarjp.com/auto/ec606b12-d5d2-42ac-835e-30a79c48d95c.jpg",
        "https://img.ecarjp.com/auto/8bcfc834-7df1-40b0-9a79-aedfc30684d4.jpg",
        "https://img.ecarjp.com/auto/996404c4-aa08-44de-a491-a8a8d4e0bcd3.jpg",
        "https://img.ecarjp.com/auto/56a35434-d162-4fb4-8185-c0e70a921d0f.jpg",
        "https://img.ecarjp.com/auto/fca3520c-da72-4712-8f77-43b1c3179732.jpg",
        "https://img.ecarjp.com/auto/e11596bc-d93a-4ce0-9fc1-8836775d1fe1.jpg",
        "https://img.ecarjp.com/auto/71616767-e6ca-46fd-bb7e-59e095d72e18.jpg",
        "https://img.ecarjp.com/auto/1b8b2b25-d0bb-4ecc-9e6e-793b35e3f858.jpg",
        "https://img.ecarjp.com/auto/6b72dcbd-a60b-4042-97e5-241e22204fd6.jpg",
        "https://img.ecarjp.com/auto/b176d520-b441-46d7-af75-b83634cf8ad4.jpg"
    ]

};
*/
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
                        <DescriptionItem name='Дата производства' content={productionDate} />
                    </ul>
                    <Translate translateAudio={translateAudio} translateText={translateText} />
                </div>
            </div>
            <AuctionListDescription />
        </div>
    );
};

export default CarPageDescription;
