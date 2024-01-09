import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../app/store'

interface UserState {
    name: string,
}

const initialState: UserState = {
    name: 'Mykyta',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
})


export const selectUserName = (state: RootState) => state.user.name;

export default userSlice.reducer;