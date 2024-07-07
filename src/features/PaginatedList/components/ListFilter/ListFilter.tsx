import * as React from 'react';
import './ListFilter.scss';
import { Select, TextInput } from '@gravity-ui/uikit';
import { useEffect, useState } from 'react';
interface IListFilterProps {
    className?: string;
    setFilters: React.Dispatch<React.SetStateAction<Filters>>;
    filters: Filters;
    markaObject: MarkaObj
    modelObject: ModelObj
    rates: string[];
    years: string[];
    capacities: number[];
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
    capacity_from?:string;
    capacity_to?:string;
    mileage_from?:string;
    mileage_to?:string;
}
const ListFilter: React.FunctionComponent<IListFilterProps> = ({
    className,
    filters,
    setFilters,
    modelObject,
    markaObject,
    rates,
    years,
    capacities,
}) => {
    const [mileageFrom, setMileageFrom] = useState<number |string>('')
    const [mileageTo, setMileageTo] = useState<number|string>('')
    const markaArray = Object.entries(markaObject);
    console.log(markaArray)

    const modelArray = Object.entries(modelObject);
    useEffect(()=>{
        setFilters({ ...filters, mileage_from:String(mileageFrom), mileage_to:String(mileageTo) })
    },[mileageFrom,mileageTo])
    return (
        <div className={className}>
            <Select
                size="m"
                placeholder="Марка:"
                className="Filter-Marka"
                popupClassName="Sort-Select__option"
                onUpdate={(string) => {
                    setFilters({ ...filters, marka_name: string[0] })
                }}
            >
                {markaArray.map(([marka, count]) => <Select.Option key={marka} value={`${marka}`}>{`${marka} (${count})`}</Select.Option>)}
            </Select>
            <Select
                size="m"
                placeholder="Модель:"
                className="Filter-Model"
                popupClassName="Sort-Select__option"
                onUpdate={(string) => {
                    setFilters({ ...filters, model_name: string[0] })
                }}
            >
                {modelArray.sort().map(([model, count]) => <Select.Option key={model} value={`${model}`}>{`${model} (${count})`}</Select.Option>)}
            </Select>
            <Select
                size="m"
                placeholder="Оценка:"
                className="Filter-Rate"
                popupClassName="Sort-Select__option"
                onUpdate={(string) => {
                    setFilters({ ...filters, rate: string[0] })
                }}
            >
                {rates.map((rate) => <Select.Option key={rate} value={`${rate}`}>{rate}</Select.Option>)}
            </Select>
            <Select
                size="m"
                placeholder="Год от:"
                className="Filter-YearFrom"
                popupClassName="Sort-Select__option"
                onUpdate={(string) => {
                    setFilters({ ...filters, year_from: string[0] })
                }}
            >
                {years.map((year) => <Select.Option key={year} value={`${year}`}>{year}</Select.Option>)}
            </Select>
            <Select
                size="m"
                placeholder="Год до:"
                className="Filter-YearTo"
                popupClassName="Sort-Select__option"
                onUpdate={(string) => {
                    setFilters({ ...filters, year_to: string[0] })
                }}
            >
                {years.map((year) => <Select.Option key={year} value={`${year}`}>{year}</Select.Option>)}
            </Select>
            <Select
                size="m"
                placeholder="Объем от:"
                className="Filter-CapacityFrom"
                popupClassName="Sort-Select__option"
                onUpdate={(string) => {
                    setFilters({ ...filters, capacity_from: string[0] })
                }}
            >
                {capacities.map((capacity) => <Select.Option key={capacity} value={`${capacity}`}>{capacity}</Select.Option>)}
            </Select>

            <TextInput onUpdate={(string)=>setMileageFrom(string.replace(/[^0-9]/g, ''))} value={String(mileageFrom)} placeholder="Пробег от:" className="Filter-MileageFrom" size='s' />
            <TextInput onUpdate={(string)=>setMileageTo(string.replace(/[^0-9]/g, ''))} value={String(mileageTo)} placeholder="Пробег до:" className="Filter-MileageTo" size='s' />
            <Select
                size="m"
                placeholder="Объем до:"
                className="Filter-CapacityTo"
                popupClassName="Sort-Select__option"
                onUpdate={(string) => {
                    setFilters({ ...filters, capacity_to: string[0] })
                }}
            >
                {capacities.map((capacity) => <Select.Option key={capacity} value={`${capacity}`}>{capacity}</Select.Option>)}
            </Select>
        </div>
    );
};

export default ListFilter;
