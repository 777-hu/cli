/*
 * @Description: 
 * @Author: yanpin
 * @Date: 2021-04-08 17:16:09
 * @LastEditTime: 2021-04-23 09:50:56
 * @LastEditors: yanpin
 */

import React,  {useEffect} from 'react'

export default function AndroidGestureOpponent(props) {
  
  const isAndroid = () => navigator.appVersion.indexOf("Android") !== -1

  useEffect(() => {
    if(isAndroid()){
      document.body.style.overscrollBehavior = "auto contain"
      document.body.style.userSelect = 'none'
      document.body.style.MozUserSelect = 'none'
      window.oncontextmenu = function() { return false; }
    }
    
  }, [])

  return null
}