/*
 * @Description: 防抖
 * @Author: yuqing.hao
 * @Date: 2021-03-25 15:04:23
 * @LastEditTime: 2021-03-25 15:11:22
 * @LastEditors: yuqing.hao
 */
import {useEffect, useRef} from 'react';

const useDebounce = (fn, ms = 30, deps = []) => {
	let timeout = useRef();
	useEffect(() => {
		if (timeout.current) clearTimeout(timeout.current);
		timeout.current = setTimeout(() => {
			fn();
		}, ms);
	}, deps);

	const cancel = () => {
		clearTimeout(timeout.current);
		timeout = null;
	};
	return [cancel];
};

export default useDebounce;
