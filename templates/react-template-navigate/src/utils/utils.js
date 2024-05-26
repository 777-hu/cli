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
export const formatDateToChinese=(inputDate) =>{
	const date = new Date(inputDate);
	const now = new Date();
	const diffTime = now - date;
	const diffDays = new Date().getDate() - new Date(inputDate).getDate();
	
	if (diffDays === 0) {
	  return '今天 ' + formatTime(date);
	} else if (diffDays === 1) {
	  return '昨天 ' + formatTime(date);
	} else if (diffDays >= 2 && diffDays < 7) {
	  return getWeekday(date) + ' ' + formatTime(date);
	} else if (date.getFullYear() === now.getFullYear()) {
	  return (date.getMonth() + 1) + '月' + date.getDate() + '日 ' + formatTime(date);
	} else {
	  return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日 ' + formatTime(date);
	}
  }
  
  function formatTime(date) {
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	return hours + ':' + minutes;
  }
  
  function getWeekday(date) {
	const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
	return weekdays[date.getDay()];
  }
  
  // 示例用法
//   const inputDateString = '2023-12-04 14:37:40';
//   const formattedDate = formatDateToChinese(inputDateString);
//   console.log(formattedDate);

export const dateFormat = (v) => {
	if (!v) return "";
	let dateObj = dateFormatToObj(v, true);
	return `${dateObj.year}-${dateObj.month}-${dateObj.day} ${dateObj.hour}:${dateObj.minute}:${dateObj.seconds}`;
  };
  export function dateFormatToObj(date, isPad) {
	let reg = /(.+)(?:\[.+\])/;
	if (reg.test(date)) {
	  // 过滤 例如 2021-10-19T12:35:29+08:00[Asia/Shanghai]
	  date = date.replace(reg, "$1");
	}
	if (!date) return null;
	const time = new Date(date);
	let year = time.getFullYear();
	let month = time.getMonth() + 1;
	let day = time.getDate();
	let week = time.getDay();
	let hour = time.getHours();
	let minute = time.getMinutes();
	let seconds = time.getSeconds();
	if (isPad) {
	  year = String(year).padStart(2, "0");
	  month = String(month).padStart(2, "0");
	  day = String(day).padStart(2, "0");
	  hour = String(hour).padStart(2, "0");
	  minute = String(minute).padStart(2, "0");
	  seconds = String(seconds).padStart(2, "0");
	}
	return {
	  year: year,
	  month: month,
	  day: day,
	  week: week,
	  hour: hour,
	  minute: minute,
	  seconds: seconds,
	};
  }
  
// Splice the request string according to the request object parameters
export function getRequestParamsStr(paramsObj) {
	let urlString = '';
	if (paramsObj && Object.keys(paramsObj).length > 0) {
		Object.keys(paramsObj).forEach((key, index) => {
			const value = paramsObj[key];
			if (index === 0) {
				urlString = `?${key}=${value}`;
			} else {
				urlString = `${urlString}&${key}=${value}`;
			}
		});
	}
	return urlString;
}

export function getRequestParamsStrWithArray(paramsObj) {
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

/**
 * 数字转成汉字 支持7位，也就是最大1234567
 * @params num === 要转换的数字
 * @return 汉字
 * */
export function toChinesNum(num) {
	let changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
	let unit = ['', '十', '百', '千', '万']
	num = parseInt(num)
	let getWan = (temp) => {
	  let strArr = temp.toString().split('').reverse()
	  let newNum = ''
	  let newArr = []
	  strArr.forEach((item, index) => {
		newArr.unshift(item === '0' ? changeNum[item] : changeNum[item] + unit[index])
	  })
	  let numArr = []
	  newArr.forEach((m, n) => {
		if (m !== '零') numArr.push(n)
	  })
	  if (newArr.length > 1) {
		newArr.forEach((m, n) => {
		  if (newArr[newArr.length - 1] === '零') {
			if (n <= numArr[numArr.length - 1]) {
			  newNum += m
			}
		  } else {
			newNum += m
		  }
		})
	  } else {
		newNum = newArr[0]
	  }

	  return newNum
	}
	let overWan = Math.floor(num / 10000)
	let noWan = num % 10000
	if (noWan.toString().length < 4) {
	  noWan = '0' + noWan
	}
	return overWan ? getWan(overWan) + '万' + getWan(noWan) : getWan(num)
}

// 支持9位以上也就是亿级别的，如果需要钱的那种单位，把注释放开就行
// export function toChineseBig(num) {
// 	// 将接收到的num转换为字符串
// 	var strNum = String(num)
// 	// 定义单位
// 	// var unit = ['拾', '佰', '仟', '万', '拾', '佰', '仟', '亿', '拾', '佰', '仟']
// 	var unit = ['十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千']
// 	// 结果中放一个符号，用来解决最后的零去不掉的问题
// 	var result = ['@']
// 	// 单位下标
// 	var unitNo = 0
// 	// 从后往前遍历接收到的数据，省略结束条件
// 	for (let i = strNum.length - 1;; i--) {
// 	  // 调用转大写函数，将每一个数字转换成中文大写，一次放入一个到结果数组中
// 	  result.unshift(numToChinese(strNum[i]))
// 	  // 如果不大于0
// 	  if (i <= 0) {
// 		// 结束循环
// 		break
// 	  }
// 	  // 放入一个数字，放入一个单位
// 	  result.unshift(unit[unitNo])
// 	  // 单位下标加1
// 	  unitNo++
// 	}
// 	// 将结果数组转换成字符串，并使用正则替换一些关键位置，让结果符合语法
// 	// return result.join('').replace(/(零[仟佰拾]){1,3}/g, '零').replace(/零{2,}/g, '零').replace(/零([万亿])/g, '$1').replace(/亿万/g, '亿').replace(/零*@/g, '')
// 	return result.join('').replace(/(零[千百十]){1,3}/g, '零').replace(/零{2,}/g, '零').replace(/零([万亿])/g, '$1').replace(/亿万/g, '亿').replace(/零*@/g, '')

// 	function numToChinese(n) {
// 	  // var chineseBigNum = '零壹贰叁肆伍陆柒捌玖'
// 	  var chineseBigNum = '零一二三四五六七八九'
// 	  return chineseBigNum[n]
// 	}
// }
