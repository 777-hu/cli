import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import logger from 'redux-logger'
import testReducer from "./reducers/testReducer"

//3.配置 store，创建全局唯一的 stroe
const store = configureStore({
    //多个 reducer，访问数据时也需要通过多层获取
    //这里的名称，决定了获取数据时，需要访问的对象名称
    DevTools: true,
    reducer: {
        testReducer,
    },
    // middleware: getDefaultMiddleware().concat(logger),
    middleware: getDefaultMiddleware().concat(),
});

export default store;