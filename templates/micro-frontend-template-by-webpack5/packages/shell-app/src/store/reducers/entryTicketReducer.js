import { createSlice } from "@reduxjs/toolkit";

const entryTicket = createSlice({
    name: 'entryTicket',
    initialState: {
		activeEntryInfo: {},
        orderList: {},
        currentPutState: '',
	},
    //最重要的 reducers 属性，包括多个函数
    reducers: {
        setActiveEntryTicket: (state, action) => {
            return  { ...state, activeEntryInfo: action.payload }
        },
        setCreateOrder: (state, action) => {
            return  { ...state, orderList: action.payload }
        },
        setCurrentPutState: (state, action) => {
            return  { ...state, currentPutState: action.payload }
        },
    },
})

//2.导出 entryTicket 的 action 和 reducer
export const { setActiveEntryTicket, setCreateOrder, setCurrentPutState } = entryTicket.actions;
export default entryTicket.reducer;