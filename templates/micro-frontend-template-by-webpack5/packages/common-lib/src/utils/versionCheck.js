/*
 * @Description: 
 * @Author: menglong.du
 * @Date: 2022-03-15 15:11:18
 * @LastEditTime: 2022-03-17 16:20:35
 * @LastEditors: menglong.du
 */
let version;

function check() {
	fetch('/version')
		.then((res)=>{
			if(res.ok){
				return res.text()
			}
		})
		.then((res)=>{
			let resVersion = res
			if(version&&version !== resVersion){
				window.location.reload()
			}
			version = resVersion
		})
		.catch((err)=>{
			console.log(err)
		})
}

check()

setInterval(()=>{
	check()
},1000 * 60 * 5)