import * as React from 'react';
import './CarPageEmpty.scss'
interface ICarPageEmptyProps {
    className?: string;
    isLoading: boolean;
}

const CarPageEmpty: React.FC<ICarPageEmptyProps> = ({ className, isLoading }) => {
    return (
        <div className='CarPageEmpty'>
            {
                isLoading ? <h1 style={{padding:"20px"}}>Загрузка...</h1> : (<div>
                    <div className='CarPageEmpty__title-description'>
                        <span className='CarPageEmpty__title'>Страница не найдена!</span>
                        <span className='CarPageEmpty__description'>Страница, которую вы ищете перемещена или не существует.</span>
                    </div>
                    <div className='CarPageEmpty__code'>404</div>
                </div>)
            }

        </div>
    );
};

export default CarPageEmpty;
