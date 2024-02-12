import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import CarList from '../../pages/StatsPage/components/CarList/CarList';
import ListSort from './components/ListSort/ListSort';
import ListFilter from './components/ListFilter/ListFilter';
import './PaginatedList.scss'
import CarObject from '../../types/types';
import useWindowDimensions from '../../hooks/useWindowDimensions';
interface IProps {
  className?: string;
  pageCount: number;
  setPageCount: React.Dispatch<React.SetStateAction<number>>;
  isAuc:boolean;
}
type MarkaObj = {
  [key: string]: {
    count:number;
    model:string;
  };
}
type ModelObj = {
  [key: string]: {
    count:number;
    marka:string;
  }
}
type Filters = {
  marka_name?: string;
  model_name?: string;
  rate?: string;
  year_from?: string;
  year_to?: string;
  capacity_from?: string;
  capacity_to?: string;
  mileage_from?: string;
  mileage_to?: string;
}

const PaginatedList: React.FC<IProps> = ({ className, pageCount, setPageCount, isAuc }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<CarObject[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [sort, setSort] = useState<string>('priceup');
  const [markaObj, setMarkaObj] = useState<MarkaObj>({});
  const [modelObj, setModelObj] = useState<ModelObj>({});
  const [filters, setFilters] = useState<Filters>({});
  const [rates, setRates] = useState<string[]>([]);
  const [years, setYears] = useState<string[]>([]);
  const [capacities, setCapacities] = useState<number[]>([]);
  const path = isAuc ? 'http://localhost:8000/api/auctions' : 'http://localhost:8000/api/statistics'
  const {  width } = useWindowDimensions();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(`${path}?` + new URLSearchParams({
        page: String(pageNumber + 1),
        sort: sort,
        ...(filters.marka_name !== undefined && { marka_name: String(filters.marka_name).toLowerCase() }),
        ...(filters.model_name !== undefined && { model_name: String(filters.model_name).toLowerCase() }),
        ...(filters.rate !== undefined && { rate: String(filters.rate) }),
        ...(filters.year_from !== undefined && { year_from: String(filters.year_from) }),
        ...(filters.year_to !== undefined && { year_to: String(filters.year_to) }),
        ...(filters.capacity_from !== undefined && { capacity_from: String(filters.capacity_from) }),
        ...(filters.capacity_to !== undefined && { capacity_to: String(filters.capacity_to) }),
        ...(filters.mileage_from !== undefined && { mileage_from: String(filters.mileage_from) }),
        ...(filters.mileage_to !== undefined && { mileage_to: String(filters.mileage_to) }),
      }),
        {
          headers: {
            "Content-Type": "application/json"
          },
        });
      const result = await response.json();
      const numberOfPages = result.pageNumber;
      if (numberOfPages !== pageCount) {
        setPageCount(numberOfPages)
      }
      setData(result.data);
      setIsLoading(false);
    };
    const delay = 500;
    const debouncedFetchData = setTimeout(fetchData, delay);
    return () => clearTimeout(debouncedFetchData);
  }, [pageNumber, sort, filters]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(`${path}/marka/names`,
        {
          headers: {
            "Content-Type": "application/json"
          },
        });
      const markaObj = await response.json();
      setMarkaObj(markaObj);
      const modelParams = filters.marka_name ? `?marka=${filters.marka_name}` : ''
      response = await fetch(`${path}/model/names${modelParams}`,
        {
          headers: {
            "Content-Type": "application/json"
          },
        });
      const modelObj = await response.json();
      setModelObj(modelObj);

      response = await fetch(`${path}/rates`,
        {
          headers: {
            "Content-Type": "application/json"
          },
        });
      const rates = await response.json();
      rates.sort();
      setRates(rates);

      response = await fetch(`${path}/years`,
        {
          headers: {
            "Content-Type": "application/json"
          },
        });
      const years = await response.json();
      years.sort();
      setYears(years);

      response = await fetch(`${path}/capacitylist`,
        {
          headers: {
            "Content-Type": "application/json"
          },
        });
      const capacitylist = await response.json();
      capacitylist.sort((a:string,b:string) => Number(a)-Number(b))
      setCapacities(capacitylist);
    };

    fetchData();
  }, [pageNumber,filters.marka_name]);
  useEffect(() => setPageNumber(0), [filters])

  const handlePageChange = (selectedPage: { selected: number }) => {
    setPageNumber(selectedPage.selected);
  };


  return (
    <div className={className}>
      <ListFilter
        className='ListFilter'
        setFilters={setFilters}
        markaObject={markaObj}
        modelObject={modelObj}
        filters={filters}
        rates={rates}
        years={years}
        capacities={capacities}
      />
      <ListSort setSort={setSort} />
      <CarList isLoading={isLoading} array={data} />
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={(width > 440)? 6 : 3}
        marginPagesDisplayed={1}
        forcePage={pageNumber}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
        previousLabel="<"
        nextLabel=">"
      />
    </div>
  );
};

export default PaginatedList;