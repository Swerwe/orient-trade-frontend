import * as React from 'react';
import { useEffect, useState } from 'react';
import CarObject from '../../types/types';
import CarPageDescription from './components/CarPageDescription/CarPageDescription';
import CarPageEmpty from './components/CarPageEmpty/CarPageEmpty';
import NavBar from '../../components/NavBar/NavBar';
import './CarPage.scss';
const CarPage: React.FC = () => {
    const id = window.location.href.split('/').reverse()[0];
    const [data,setData] = useState<CarObject | object>({});
    const [isLoading,setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/carpage?id=${id}`,
            {
              headers: {
                "Content-Type": "application/json"
              },
            });
            const array =await response.json();
            if (array.length){
              setData(array[0])
            }
            setIsLoading(false)


        }
        fetchData()
      
    },[])
    return (
    <div className='CarPage'>
        <NavBar />
        {(Object.keys(data).length) ? <CarPageDescription obj = {data as CarObject} /> : <CarPageEmpty isLoading={isLoading} />}
    </div>);
};

export default CarPage;
