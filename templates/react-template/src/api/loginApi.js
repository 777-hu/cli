import Config from "../config/config.js";
import { getApi, postApi } from "../utils/request.js";

export default class LoginApi {
  static requestUrl = `${Config.serverUrl}smart-warehouse-core/manage/`;

  static login(body) {
    //登录
    const url = `${this.requestUrl}user/login`;
    return postApi(url,JSON.stringify(body));
  }

  // 获取仓库信息
  static loadWarehouseSearch() {
		const url = `${this.requestUrl}warehouse/searchList`;
		return getApi(url);
	}

  // 获取货架信息
  static getAutoShelfList(param) {
    const { warehouseId, shelfTypes } = param
    const url = `${this.requestUrl}shelf/searchList?warehouseId=${warehouseId}&shelfTypes=${shelfTypes[0]}`;
    return getApi(url)
  }
}
