import * as React from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/model/redux';
import {CarObject} from '@/entities';
import CarPageDescription from './CarPageDescription/CarPageDescription';
import CarPageEmpty from './CarPageEmpty/CarPageEmpty';
import {NavBar} from '@/widgets';
import './CarPage.scss';
import { fetchCarPage } from '@/app/store/reducers/ActionCreators';
//import { error } from 'console';
//{(Object.keys(data).length) ? <CarPageDescription obj = {data as CarObject} /> : <CarPageEmpty isLoading={isLoading} />}
const CarPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const id = window.location.href.split('/').reverse()[0];
    const {carObject, isLoading} = useAppSelector(state => state.carPageReducer);
    console.log(carObject)
    // const [data,setData] = useState<CarObject | object>({pageImages:[]});
    useEffect(() => {
      dispatch(fetchCarPage(id))
    },[dispatch, id])
    return (
    <div className='CarPage'>
        <NavBar color='black' />
        
        {(!isLoading && carObject) ? <CarPageDescription obj = {carObject as CarObject} /> : <CarPageEmpty isLoading={isLoading} />}      
    </div>);
};

export default CarPage;
