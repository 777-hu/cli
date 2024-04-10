import React from 'react';

export function objStringify(obj) {
	if(!obj) return ''
	let searchArr = []
	Object.keys(obj).forEach((item)=>{
	  searchArr.push([item,obj[item]].join('='))
	})
	return searchArr.join('&')
}

export function dataURItoBlob(dataURI) {
	// convert base64 to raw binary data held in a string
	// doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
	const byteString = atob(dataURI.split(',')[1]);

	// separate out the mime component
	const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

	// write the bytes of the string to an ArrayBuffer
	const ab = new ArrayBuffer(byteString.length);
	const ia = new Uint8Array(ab);
	for (let i = 0; i < byteString.length; i++) {
		ia[i] = byteString.charCodeAt(i);
	}

	// Old Code
	// write the ArrayBuffer to a blob, and you're done
	// var bb = new BlobBuilder();
	// bb.append(ab);
	// return bb.getBlob(mimeString);

	// New Code
	return new Blob([ab], {type: mimeString});
}

export function dateFormatter(cell) {
	const date = new Date(cell);
	const y = date.getFullYear();
	let m = date.getMonth() + 1;
	m = m < 10 ? (`0${m}`) : m;
	let d = date.getDate();
	d = d < 10 ? (`0${d}`) : d;
	return `${y}-${m}-${d}`;
}

export function timeFormatter(cell) {
	const date = new Date(cell);
	const h = date.getHours();
	let minute = date.getMinutes();
	minute = minute < 10 ? (`0${minute}`) : minute;
	return `${h}:${minute}`;
}

export function localize(cell) {
	return LocalizationData[cell] || cell;
}

// check if a variable is an integer
export function isInt(value) {
	if (isNaN(value)
		|| (typeof value === 'string' && value.indexOf('.') > -1)
		|| (typeof value === 'string' && value.indexOf('-') > -1)
		|| (typeof value === 'string' && value.indexOf('+') > -1)
	) {
		return false;
	}
	const number = parseFloat(value);
	// only support es6
	return Math.trunc(number) === number;
}

export function guid() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}
	return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
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

export function getDifferenceset(a1, a2) {
	const temp = {};
	for (const ele of a1) {
		if (!temp[ele]) {
			temp[ele] = 1;
		}
	}

	for (const ele of a2) {
		if (temp[ele]) {
			temp[ele] = 2;
		}
	}
	return Object.keys(temp).filter((key) => temp[key] === 1);
}

export function handleBlob(blob, fileName) {
	const url = window.URL.createObjectURL(blob);
	const a = document.createElement('a');
	a.href = url;
	a.download = fileName;
	document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
	a.click();
	a.remove();
}

export function departmentsDataFormat(data) {
	const newData = [];
	const dataKeys = Object.keys(data);
	if (dataKeys.length > 0) {
		for (const key of dataKeys) {
			const value = data[key];
			newData.push({
				key: value.id,
				title: value.name,
			});
		}
	}
	return newData;
}

export function getTriggerTime(time, repeatType) {
	if (typeof time === 'string' && typeof repeatType === 'string') {
		return `0 ${time} ? * ${repeatType}`;
	}
	return '';
}

export function getTime(triggerTime) {
	let trigger = [];
	let time = null;
	if (typeof triggerTime === 'string') {
		trigger = triggerTime.split(' ');
		const today = new Date();
		time = new Date(today.getFullYear(), today.getMonth(), today.getDate(), trigger[2], trigger[1]);
	}
	return time;
}

export function getRepeatType(triggerTime) {
	let trigger = [];
	let repeatType = '';
	if (typeof triggerTime === 'string') {
		trigger = triggerTime.split(' ');
		repeatType = trigger[5];
	}
	return repeatType;
}

// Filters the null/undefined/'' values in the object
export function filterEmptyValue(obj) {
	const newObj = {};
	if (obj === null || obj === undefined || obj === '') return newObj;
	for (const key in obj) {
		if (obj[key] !== null && obj[key] !== undefined && obj[key] !== '') {
			newObj[key] = obj[key];
		}
	}
	return newObj;
}
// Splice the request string according to the request object parameters
export function getRequestParamsStr(paramsObj) {
	let urlString = '';
	let first = true;
	if (paramsObj && Object.keys(paramsObj).length > 0) {
		Object.keys(paramsObj).forEach((key, index) => {
			const value = paramsObj[key];
			if (value || value === false || value === 0) {
				if (key === 'startTime' || key === 'endTime') {
					urlString= first ?
						`?${key}=${value.format(defaultDateFormat)}` :
						`${urlString}&${key}=${value.format(defaultDateFormat)}`;
						first = false
				} else {
					urlString= first ? `?${key}=${value}` : `${urlString}&${key}=${value}`;
					first = false
				}
			}
		});
	}
	return urlString;
}

export function isEmpty(keys) {
	if (typeof (keys) === 'string') {
		keys = keys.replace(/(^\s*)|(\s*$)/g, '');
		if (keys == '' || keys == null || keys == 'null' || keys == undefined || keys == 'undefined') {
			return true;
		}
		return false;
	} if (typeof (keys) === 'undefined') {
		return true;
	}
	if (typeof (keys) === 'object') {
		for (const i in keys) {
			return false;
		}
		return true;
	}
}

export function dateTimeFormatter(cell) {
	if (!cell) {
		return '';
	}
	const date = new Date(cell);
	let m = date.getMonth() + 1;
	m = m < 10 ? (`0${m}`) : m;
	let d = date.getDate();
	d = d < 10 ? (`0${d}`) : d;
	const h = date.getHours();
	let minute = date.getMinutes();
	let second = date.getSeconds();
	minute = minute < 10 ? (`0${minute}`) : minute;
	second = second < 10 ? (`0${second}`) : second;
	return `${m}-${d} ${h}:${minute}:${second}`;
}

export function showRobotAlias(robot) {
	if (!robot) {
		return '';
	}
	if (robot.alias) {
		return robot.alias;
	}
	return robot.serialNo.slice(-8);
}

export function showNote(content, type = 'error', duration = 5000, title = '') {
}

export function emptyFun() {}

export function numberToTime(number) {
	const hour = parseInt(number / 2, 10);
	const minute = number % 2;
	return `${hour}:${minute > 0 ? '30' : '00'}`;
}

export function numberToDuration(number) {
	const hour = parseInt(number / 2, 10);
	const minute = number % 2;
	return `${hour}小时${minute > 0 ? '30' : '00'}分钟`;
}

export function timeToNumber(time) {
	const hour = parseInt(time.split(':')[0], 10);
	const minute = parseInt((time.split(':')[1]) / 30, 10);
	const number = (hour * 2) + minute;
	return number;
}

export function integer(rule, value) {
	const obj = new Promise((resolve, reject) => {
		if (isInt(value) || !value) {
			resolve();
		} else {
			reject(new Error('身份卡编号不是合法的数字'));
		}
	});
	return obj;
};

export function getParamsAfterHash(url) {
    if (typeof url !== "string" || !url) url = window.location.href;
    url = url.split("#")[1];
    if (!url) return {};
    url = url.split("?")[1];
    if (!url) return {};
    return url.split("&").reduce(function(result, param) {
      var [key, value] = param.split("=");
      result[key] = decodeURIComponent(value);
      return result;
    }, {});
}

export function groupArr(arr, n) {
	if(!Array.isArray(arr)) {
		return [];
	}
	return arr.reduce((r, e, i) => (i % n ? r[r.length - 1].push(e) : r.push([e])) && r, []);
}
