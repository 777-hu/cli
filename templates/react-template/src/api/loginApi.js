import Config from "../config/config.js";

import { getApi, postApi } from "./apiUtil";

export default class LoginApi {
  static requestUrl = `${Config.serverUrl}`;

  static login(body) {
    //登录
    const url = `${this.requestUrl}/loginSession/login`;
    return postApi(url,JSON.stringify(body));
  }

  static logout(body) {
    //登出
    const url = `${this.requestUrl}/loginSession/logout`;
    return postApi(url,JSON.stringify(body));
  }
}
