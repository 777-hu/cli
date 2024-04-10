/*
 * @Author: Wang Bingjing
 * @Date: 2021-07-07 16:50:45
 * @LastEditTime: 2021-07-15 10:16:26
 * @LastEditors: Wang Bingjing
 */
import Config from 'Config'
import common from 'commonLib/common';
const {apiUtil} = common;
const {getApi, postApi} = apiUtil;

class departmentApi {
	static requestUrl() {
	    let url = Config.serverUrl + 'mock/55/local-manage/manage/operateRoom/';
	    return url;
  	}

    static loadDepartmentList() {
		const url = `${this.requestUrl()}list`;
		return getApi(url);
	}
}

export default departmentApi;