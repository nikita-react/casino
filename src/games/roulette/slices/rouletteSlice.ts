import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"

const initialState = {
    activeNumber: 0,
    currentBet: 0
};

const rouletteSlice = createSlice({
    initialState,
    name: 'roulette',
    reducers: {
        setActiveNumber: (state, action: PayloadAction<number>) => {
            state.activeNumber = action.payload;
        },
        setCurrentBet: (state, action: PayloadAction<number>) => {
            if ((state.currentBet + action.payload) < 0) {
                state.currentBet = 0;
            } else {
                console.log(state.currentBet, action.payload);

                state.currentBet = state.currentBet + action.payload
            }
        },
    },
})

export const selectActiveNumber = (state: RootState) => state.roulette.activeNumber;
export const selectCurrentBet = (state: RootState) => state.roulette.currentBet;

export const { setActiveNumber, setCurrentBet } = rouletteSlice.actions;
export default rouletteSlice.reducer;