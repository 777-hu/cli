/*
 * @Description: 
 * @Author: menglong.du
 * @Date: 2022-03-16 10:31:33
 * @LastEditTime: 2022-03-16 11:13:34
 * @LastEditors: menglong.du
 */
import { useRef,useEffect } from 'react'

function useInterval(fn,delay,immediate) {
	if(typeof delay !== 'number') throw Error('delay must be a number')
	// 防止effect执行的是闭包fn
	const fnRef = useRef(fn);
	useEffect(() => {
		if(immediate) {
			fnRef.current()
		}
		const timer = setInterval(()=>{
			fnRef.current()
		},delay)
		return () => {
			clearInterval(timer)
		}
	},[delay])
}

export default useInterval