import React from "react";
import './ListSort.scss'
import {Select} from '@gravity-ui/uikit';
interface IProps {
    setSort: React.Dispatch<React.SetStateAction<string>>
}
const ListSort: React.FC<IProps> = ({ setSort }) => {
    return (
        <div className="ListSort">
            <Select 
                size="m"
                placeholder="Сортировка:"
                className="Sort-Select" 
                popupClassName="Sort-Select__option"
                onUpdate={(str) =>{setSort(str[0])}}>
                <Select.Option value="priceup">↑&nbsp;&nbsp;Стоимость, по возрастанию</Select.Option>
                <Select.Option value="pricedown">↓&nbsp;&nbsp;Стоимость, по убыванию</Select.Option>
                <Select.Option value="" disabled={true}>-------------------------------------------</Select.Option>
                <Select.Option value="betup">↑&nbsp;&nbsp;Последняя ставка, по возрастанию</Select.Option>
                <Select.Option value="betdown">↓&nbsp;&nbsp;Последняя ставка, по убыванию</Select.Option>
                <Select.Option value="" disabled={true}>-------------------------------------------</Select.Option>
                <Select.Option value="dateup">↑&nbsp;&nbsp;Дата аукциона, по возрастанию</Select.Option>
                <Select.Option value="datedown">↓&nbsp;&nbsp;Дата аукциона, по убыванию</Select.Option>
            </Select>
        </div>
    )
}
export default ListSort;