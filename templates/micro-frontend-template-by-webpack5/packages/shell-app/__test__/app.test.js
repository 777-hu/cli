/*
 * @Description: 
 * @Author: yanpin
 * @Date: 2021-06-11 11:26:25
 * @LastEditTime: 2021-06-11 14:27:56
 * @LastEditors: yanpin
 */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

jest.mock('basicDataApp/routes', 
    () => { 
        return [];
    },
    { virtual: true }
);

jest.mock('dressRuleApp/routes', 
    () => { 
        return [];
    },
    { virtual: true }
);

jest.mock('commonLib/common',
    () => {
        const SideBarConstants = {};
        const commonConstants = {SideBarConstants};
        const session = {};
        const utils = {emptyFun: () => {}};
        const apiUtil = {};
        return {commonConstants, session, utils, apiUtil};
    },
    { virtual: true }
)

it('renders without crashing', () => {
    shallow(<App />);
});