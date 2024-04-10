import { createSlice } from "@reduxjs/toolkit";

const applyTicket = createSlice({
    name: 'applyTicket',
    initialState: {
		activeApplyInfo: null
	},
    reducers: {
        setActiveApplyTicket: (state, action) => {
            return  { ...state, activeApplyInfo: action.payload }
        },
    },
})

export const { setActiveApplyTicket } = applyTicket.actions;
export default applyTicket.reducer;