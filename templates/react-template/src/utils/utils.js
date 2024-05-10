// 随机生成uuid
export function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// 节流：这个是点第一次的时候立即生效，接下来在一定时间内再点就不生效了，直到这段时间过去
export function throttle (fn, delay) {
    let flag = true;
    return function () {
        if(flag){
            flag = false;
            fn();
            setTimeout(() => {
                flag = true;
            }, delay);   
        }    
    }
}
// 防抖函数
export function debounce(func, wait, immediate) {
	let timeout;
	return function executedFunction() {
		const context = this;
		const args = arguments;
		const later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

// Splice the request string according to the request object parameters
export function getRequestParamsStr(paramsObj) {
	let urlString = '';
	if (paramsObj && Object.keys(paramsObj).length > 0) {
		Object.keys(paramsObj).forEach((key, index) => {
			const value = paramsObj[key];
			if (Array.isArray(value)) {
				value.forEach(item => {
					if (urlString === '') {
						urlString += `?${key}=${item}`;
					} else {
						urlString += `&${key}=${item}`;
					}
				});
			} else {
				if (index === 0) {
				  	urlString += `?${key}=${value}`;
				} else {
				  	urlString += `&${key}=${value}`;
				}
			}
		});
	}
	return urlString;
}

// 请求拼接
export function ObjStringify(obj) {
    if (!obj) return "";
    let searchArr = [];
    Object.keys(obj).forEach((item) => {
      searchArr.push([item, obj[item]].join("="));
    });
    return searchArr.join("&");
}