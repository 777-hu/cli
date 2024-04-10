/*
 * @Description: 
 * @Author: yanpin
 * @Date: 2021-06-10 16:18:26
 * @LastEditTime: 2021-06-10 18:16:56
 * @LastEditors: yanpin
 */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetch from 'node-fetch';

// Configure Enzyme with React 16 adapter
Enzyme.configure({ adapter: new Adapter() });

// If you're using the fetch API
global.fetch = fetch;