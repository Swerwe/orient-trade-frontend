import React ,{ useEffect, useState } from 'react';
import './StatsPage.scss';
import PaginatedList from '../../features/PaginatedList/PaginatedList';
import {NavBar} from '@/widgets';
const StatsPage: React.FC = () => {
    const [pageCount, setPageCount] = useState(1);
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`/api/statistics/count`,
          {
            headers: {
              "Content-Type": "application/json"
            },
          });
          const result = await response.json();
    
          setPageCount(result.pageCount);
        };
    
        fetchData();
      }, []);
    return (
        <div className='StatsPage'>
            <h2>Статистика аукционов</h2>
            <NavBar />
            <PaginatedList isAuc={false} pageCount={pageCount}  className='PaginatedList' setPageCount={setPageCount} />
        </div>
    )
}
export default StatsPage;