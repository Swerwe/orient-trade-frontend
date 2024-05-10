import {combineReducers, configureStore} from "@reduxjs/toolkit";
import carPageReducer from "./reducers/CarPageSlice";
const rootReducer = combineReducers({
    carPageReducer,
});
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    });
};
export type  RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']