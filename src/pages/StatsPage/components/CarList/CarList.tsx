import React from 'react';
import './CarList.scss';
import {CarObject} from '@/entities';
import CarItem from '../CarItem/CarItem';
import {Spin} from '@gravity-ui/uikit';
interface IProps{
    array:CarObject[];
    isLoading: boolean;
}
const CarList: React.FC<IProps> = ({array,isLoading}) => {  
    return (
        <div className='CarList'>
          {isLoading? <Spin size="l" /> :array.map(obj =><CarItem obj = {obj} key = {obj._id} />)}
        </div>

    )

}
export default CarList;