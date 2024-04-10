/*
 * @Description: 
 * @Author: yuqing.hao
 * @Date: 2021-06-01 15:32:24
 * @LastEditTime: 2021-07-12 14:51:25
 * @LastEditors: Wang Bingjing
 */
import Config from 'Config'
import common from 'commonLib/common';
const {apiUtil, utils} = common;
const {getApi, postApi} = apiUtil;
const { getRequestParamsStr } = utils;
class authApi {
	static requestUrl() {
	    let url = Config.serverUrl + 'mock/55/person/';
	    return url;
  	}

    static login(params) {
		const url = `${this.requestUrl()}login${getRequestParamsStr(params)}`;
		return postApi(url);
	}
}

export default authApi;