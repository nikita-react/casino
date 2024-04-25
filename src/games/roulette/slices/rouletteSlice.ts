import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"

const initialState = {
    activeNumber: 0,
};

const rouletteSlice = createSlice({
    initialState,
    name: 'roulette',
    reducers: {
        setActiveNumber: (state, action: PayloadAction<number>) => {
            state.activeNumber = action.payload;
        },
    },
})

export const selectActiveNumber = (state: RootState) => state.roulette.activeNumber

export const { setActiveNumber } = rouletteSlice.actions
export default rouletteSlice.reducer