import { createSlice } from "@reduxjs/toolkit";

export const sigepSlice = createSlice({
    name:'SIGEP',
    initialState:{
        data:[],
    },
    reducers:{
        onLoadData: (state,{payload}) => {
            state.data = payload
        }
    }
})

export const {
    onLoadData
} = sigepSlice.actions