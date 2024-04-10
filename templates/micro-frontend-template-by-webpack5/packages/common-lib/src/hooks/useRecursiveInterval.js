/*
 * @Description: 
 * @Author: yuqing.hao
 * @Date: 2021-05-06 10:31:53
 * @LastEditTime: 2021-08-26 14:16:07
 * @LastEditors: Wang Bingjing
 */
import { useEffect, useRef } from 'react';

const defaultOptions = {
	cancelOnUnmount: true,
	instantCall: true,
};

/**
 * An async-utility hook that accepts a callback function and a milliseconds time (in milliseconds), then millisecondss the
 * execution of the given function by the defined time.
 */
const useRecursiveInterval = (fn, milliseconds = 0, options = defaultOptions) => {
	const opts = { ...defaultOptions, ...(options || {}) };
	const callback = useRef(fn);

	// if the provided function changes, change its reference
	useEffect(() => {
		if (typeof fn === 'function') {
			callback.current = fn;
		}
	}, [fn]);

	useEffect(() => {
		let timerId;
		if (typeof milliseconds === 'number') {
			function tick() {
				if(!timerId) {
					return;
				}
				const ret = callback.current();
				if (ret instanceof Promise) {
					ret.then(() => {
						if(!timerId) {
							return;
						}
						timerId = setInterval(tick, milliseconds);
					});
				} else {
					timerId = setInterval(tick, milliseconds);
				}
			}
			if (opts.instantCall) {
				timerId = setInterval(tick, 0);
			} else {
				timerId = setInterval(tick, milliseconds);
			}
		}
		return () => {
			if (opts.cancelOnUnmount) {
				timerId && clearInterval(timerId);
				timerId = false;
			}
		}
	}, []);
};

export default useRecursiveInterval;