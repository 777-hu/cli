export const formatDateToChinese=(inputDate) =>{
	const date = new Date(inputDate);
	const now = new Date();
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