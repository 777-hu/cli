/*
 * @Description: app entry
 * @Author: yanpin
 * @Date: 2021-05-19 17:15:51
 * @LastEditTime: 2022-07-18 15:12:57
 * @LastEditors: menglong.du
 */

import commonComponents from './components/index'
import commonHooks from './hooks/index'
import commonConstants from './constants/index'
import {utils, apiUtil, session, stompClient} from './utils/index';

const commonLib = {
    commonComponents,
    commonHooks,
    commonConstants,
    utils,
    apiUtil,
    session,
		stompClient
}
export default commonLib;