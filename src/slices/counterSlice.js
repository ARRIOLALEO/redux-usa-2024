import {createSlice} from '@reduxjs/toolkit';

const initialState = {value:101}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers:{
        increment:(state) =>{state.value +=1},
        decrement:(state) =>{state.value -=1},
        multiply:(state) =>{state.value *=2},
    }
})

export const {increment,decrement,multiply} = counterSlice.actions;
export default counterSlice.reducer;