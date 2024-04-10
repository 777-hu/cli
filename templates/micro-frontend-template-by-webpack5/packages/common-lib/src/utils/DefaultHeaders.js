/*
 * @Description: 
 * @Author: yanpin
 * @Date: 2020-08-24 15:35:24
 * @LastEditTime: 2021-09-27 15:24:49
 * @LastEditors: Wang Bingjing
 */
import {getToken} from './session';

export function defaultHeaders() {
    return {
        'Content-Type': 'application/json', 
        'TMI_BEHAVIOR_MANAGE_TOKEN': `${getToken()}`, 
        //TMI_BEHAVIOR_MANAGE_TOKEN:'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxNDIwNTY1Mzc0MjE4Nzg0NzY5IiwiUkFORE9NIjoidDRHelBZbTgiLCJST0xFUyI6WyJERVZJQ0UiXSwiVElNRSI6eyJtb250aCI6IlNFUFRFTUJFUiIsInllYXIiOjIwMjEsImRheU9mTW9udGgiOjIyLCJob3VyIjoxNiwibWludXRlIjozMCwibW9udGhWYWx1ZSI6OSwibmFubyI6MTIwMDAwMDAsInNlY29uZCI6NTYsImRheU9mV2VlayI6IldFRE5FU0RBWSIsImRheU9mWWVhciI6MjY1LCJjaHJvbm9sb2d5Ijp7ImlkIjoiSVNPIiwiY2FsZW5kYXJUeXBlIjoiaXNvODYwMSJ9fX0.xin-FbE6_wixF_q8S136STRQnYAwxd8SaLzJUs_kdzs'
    }
}
