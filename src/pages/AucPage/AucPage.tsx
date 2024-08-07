import React ,{ useEffect, useState } from 'react';
import './AucPage.scss';
import PaginatedList from '../../features/PaginatedList/PaginatedList';
import {NavBar} from '@/widgets';
const AucPage: React.FC = () => {
    const [pageCount, setPageCount] = useState(1);
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`/api/auctions/count`,
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
            <h2>Аукционы онлайн статистика</h2>
            <NavBar />
            <PaginatedList pageCount={pageCount} isAuc={true}  className='PaginatedList' setPageCount={setPageCount} />
        </div>
    )
}
export default AucPage;