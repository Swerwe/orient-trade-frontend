import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import {CarObject} from '@/entities';
export const fetchCarPage = createAsyncThunk(
    'carpage/fetch',
    async (id:string, thunkAPI) => {
        try{
            const response = await axios.get<CarObject[]>(`https://orient-trade.ru/api/carpage?id=${id}`);
            return response.data;
        }catch(e){
            return thunkAPI.rejectWithValue("Car page loading error...");
        }
    }
);