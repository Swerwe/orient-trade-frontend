import * as React from 'react';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import CarObject from '../../models/CarObject';
import CarPageDescription from './components/CarPageDescription/CarPageDescription';
import CarPageEmpty from './components/CarPageEmpty/CarPageEmpty';
import NavBar from '../../components/NavBar/NavBar';
import './CarPage.scss';
import { fetchCarPage } from '../../store/reducers/ActionCreators';
import { error } from 'console';
//{(Object.keys(data).length) ? <CarPageDescription obj = {data as CarObject} /> : <CarPageEmpty isLoading={isLoading} />}
const CarPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const id = window.location.href.split('/').reverse()[0];
    const {carObject, isLoading, error} = useAppSelector(state => state.carPageReducer);
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
