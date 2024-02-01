import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {value:101,products:[],pending:true}

export const callApi = createAsyncThunk('counter/callApi',async()=>{
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data
})

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers:{
        increment:(state) =>{state.value +=1},
        decrement:(state) =>{state.value -=1},
        multiply:(state) =>{state.value *=2},
        reset:(state)=> initialState
    },
    extraReducers: (builder)=>{
        builder.addCase(callApi.fulfilled,(state,actions)=>{
            state.products = actions.payload
        }).addCase(callApi.rejected,(state)=>{
            state.pending = false
            console.log("im calling the api but this time is kaput")
        })
    }
})

export const {increment,decrement,multiply,reset} = counterSlice.actions;
export default counterSlice.reducer;