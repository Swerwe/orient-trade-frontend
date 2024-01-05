import React from 'react';
import './CarItemDescription.scss';
import CarObject from '../../../../../../types/types';
import { Link } from 'react-router-dom';
interface IProps {
    obj: CarObject
}
const CarItemDescription: React.FC<IProps> = (props) => {
    return (
        <div className='CarItemDescription'>
            <div className='CarItem__MainDescription'>
                <p className="Car-Name">
                    <Link style={{textDecoration:"none"}} to={`/carpage/${props.obj._id}`}>
                        <span>{props.obj.title}</span>
                    </Link>

                </p>
                <p className="Car-Equipment">
                    <span>{props.obj.equipment}</span>
                </p>
                <p>
                    <span className='Description-Name'>Оценка:</span><span className='Description-Value'>{props.obj.rate}</span>
                </p>
                <p>
                    <span className='Description-Name'>Год:</span><span className='Description-Value'>{props.obj.year}</span>
                </p>
                <p>
                    <span className='Description-Name'>Объем:</span><span className='Description-Value'>{props.obj.capacity}</span>
                </p>
                <p>
                    <span className='Description-Name'>Трансмиссия:</span><span className='Description-Value'>{props.obj.transmission}</span>
                </p>
                <p>
                    <span className='Description-Name'>Кузов:</span><span className='Description-Value'>{props.obj.body}</span>
                </p>
                <p>
                    <span className='Description-Name'>Пробег:</span><span className='Description-Value'>{props.obj.mileage}</span>
                </p>
            </div>
            <div className='CarItem__SecondaryDescription'>
                <p>
                    <span className='Description-Name'>Аукцион:</span><span className='Description-Value'>{props.obj.auction}</span>
                </p>
                <p>
                    <span className='Description-Name'>Лот:</span><span className='Description-Value'>{props.obj.lot}</span>
                </p>
                <p>
                    <span className='Description-Name'>Статус:</span><span className='Description-Value'>{props.obj.status}</span>
                </p>
                <p>
                    <span className='Description-Name'>Дата:</span><span className='Description-Value'>{props.obj.date}</span>
                </p>
                <p>
                    <span className='Description-Name'>Последняя ставка:</span><span className='Description-Value'>{props.obj.lastBet}</span>
                </p>
                <p>
                    <span className='Description-Name'>Цена в РФ с ПТС:</span><span className='Description-Value'>{props.obj.price}</span>
                </p>
            </div>
        </div>

    )

}
export default CarItemDescription;