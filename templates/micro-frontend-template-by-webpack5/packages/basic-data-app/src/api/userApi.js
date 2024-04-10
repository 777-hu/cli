import Config from 'Config'
import common from 'commonLib/common';
const {apiUtil, utils} = common;
const {getApi, postApi, deleteApi, putApi} = apiUtil;
const { getRequestParamsStr } = utils;
class userApi {
	static requestUrl() {
	    let url = Config.serverUrl + 'mock/55/person/';
	    return url;
  	}

    static loadUserList(params = []) {
        let url = `${this.requestUrl()}search${getRequestParamsStr(params)}`;

        return getApi(url);
    }

    static createUser(params) {
        let url = `${this.requestUrl()}add`;
        const body = JSON.stringify(params);
		return postApi(url, body);
    }

    static deleteUserById(id) {
        let url = `${this.requestUrl()}delete?id=${id}`;
        return deleteApi(url);
    }

    static loadUserById(id) {
        let url = `${this.requestUrl()}${id}`;
        return getApi(url);
    }

    static updateUser(params) {
        let url = `${this.requestUrl()}edit`;
        const body = JSON.stringify(params);
		return postApi(url, body);
    }

}

export default userApi;