/*
 * @Description: 
 * @Author: bingjing.wang
 * @Date: 2020-04-02 14:10:54
 * @LastEditTime: 2020-04-24 16:13:13
 * @LastEditors: bingjing.wang
 */
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'babel-polyfill';
import "isomorphic-fetch";
import { WebSocket } from 'mock-socket';
import configureStore from '../src/store/configureStore.dev'

const store=configureStore();

global.WebSocket = WebSocket;
global.store = store;

class LocalStorageMock {
    constructor() {
        this.store = {};
    }

    clear() {
        this.store = {};
    }

    getItem(key) {
        return this.store[key] || null;
    }

    setItem(key, value) {
        this.store[key] = value.toString();
    }

    removeItem(key) {
        delete this.store[key];
    }
};
  
global.localStorage = new LocalStorageMock;

configure({ adapter: new Adapter() });