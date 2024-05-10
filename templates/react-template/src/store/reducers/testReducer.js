import { createSlice } from "@reduxjs/toolkit";

const test = createSlice({
    name: 'test',
    initialState: {
		data: 1
	},
    //最重要的 reducers 属性，包括多个函数
    reducers: {
        setData: (state, action) => {
            return  { ...state, data: action.payload }
        },
    },
})

//2.导出 entryTicket 的 action 和 reducer
export const { setData } = test.actions;
export default test.reducer;