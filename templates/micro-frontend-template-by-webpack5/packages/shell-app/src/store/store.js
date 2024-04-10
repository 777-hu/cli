import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import entryTicketReducer from "./reducers/entryTicketReducer"
import applyTicketReducer from "./reducers/applyTicketReducer";

const store = configureStore({
    DevTools: true,
    reducer: {
        entryTicket: entryTicketReducer,
        applyTicket: applyTicketReducer,
    },
    middleware: getDefaultMiddleware().concat(),
});

export default store;