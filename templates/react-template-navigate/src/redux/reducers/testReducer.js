import { createSlice } from "@reduxjs/toolkit";

const test = createSlice({
    name: 'test',
    initialState: {
		value: 1,
        info: '测试',
	},
    //最重要的 reducers 属性，包括多个函数
    reducers: {
        setData: (state, action) => {
            return  { ...state, data: action.payload }
        },
        incremented: state => {
            // Redux Toolkit 允许在 reducers 中编写 "mutating" 逻辑。
            // 它实际上并没有改变 state，因为使用的是 Immer 库，检测到“草稿 state”的变化并产生一个全新的
            // 基于这些更改的不可变的 state。
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        }
    },
})

//2.导出 entryTicket 的 action 和 reducer
export const { setData, incremented, decremented } = test.actions;
export default test.reducer;