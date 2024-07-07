import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {CarObject} from "@/entities";
import { fetchCarPage } from "./ActionCreators";

export interface CarPageState{
    carObject: CarObject | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: CarPageState = {
    carObject: null,
    isLoading: false,
    error: null,
}

export const carPageSlice = createSlice({
    name: "car-page",
    initialState,
    reducers: {

    },
    extraReducers:(builder) => {
        builder.addCase(fetchCarPage.pending.type, (state:CarPageState) => {
            state.isLoading = true;
        });
        builder.addCase(fetchCarPage.fulfilled.type, (state: CarPageState, action:PayloadAction<CarObject[]>) => {
            state.isLoading = false;
            if (!action.payload.length){
                return;
            }
            state.carObject = action.payload[0];
        });
        builder.addCase(fetchCarPage.rejected.type,(state:CarPageState, action:PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
}
)
export default carPageSlice.reducer;