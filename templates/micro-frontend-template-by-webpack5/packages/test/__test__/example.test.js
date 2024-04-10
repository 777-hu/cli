/*
 * @Description: 
 * @Author: yanpin
 * @Date: 2021-05-19 16:14:41
 * @LastEditTime: 2021-06-10 18:16:19
 * @LastEditors: yanpin
 */
import React from 'react';
import { mount } from 'enzyme';

test('hello world', () => {
  const wrapper = mount(<p>Hello Jest!</p>);
  expect(wrapper.text()).toMatch('Hello Jest!');
});