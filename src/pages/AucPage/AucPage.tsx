import React ,{ useEffect, useState } from 'react';
import './AucPage.scss';
import PaginatedList from '../../components/PaginatedList/PaginatedList';
import NavBar from '../../components/NavBar/NavBar';
const AucPage: React.FC = () => {
    const [pageCount, setPageCount] = useState(1);
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`http://5.188.141.25/api/auc/count`,
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