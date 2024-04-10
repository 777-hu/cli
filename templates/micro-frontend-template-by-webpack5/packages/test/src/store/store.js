import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import applyTicketReducer from "./reducers/applyTicketReducer";

const store = configureStore({
    DevTools: true,
    reducer: {
        applyTicket: applyTicketReducer,
    },
    middleware: getDefaultMiddleware().concat(),
});

export default store;