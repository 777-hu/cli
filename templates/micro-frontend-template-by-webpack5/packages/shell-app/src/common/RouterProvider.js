/*
 * @Description: 
 * @Author: yuqing.hao
 * @Date: 2021-06-08 10:37:06
 * @LastEditTime: 2021-07-09 16:32:52
 * @LastEditors: Wang Bingjing
 */
import React from 'react';
export const RouterContext = React.createContext({});

export const RouterProvider = (props) => {
    const {selectedSideBar, barName} = props;
    return (
        <RouterContext.Provider value={{selectedSideBar, barName}}>
            {props.children}
        </RouterContext.Provider>
    )
}
