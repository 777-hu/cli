/*
 * @Description: 
 * @Author: menglong.du
 * @Date: 2022-03-15 15:11:18
 * @LastEditTime: 2022-03-17 16:20:35
 * @LastEditors: menglong.du
 */
// let version;

function getCabinetSn() {
	fetch('/getCabinetSn')
		.then((res)=>{
			if(res.ok){
				return res.text()
			}
		})
		.then((res)=>{
			localStorage.setItem('cabinetSn', res)
			// localStorage.setItem('cabinetSn', 'SN1110001')
		})
		.catch((err)=>{
			console.log(err)
		})
}

getCabinetSn()