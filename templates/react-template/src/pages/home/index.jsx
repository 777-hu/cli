import React, { useState, useEffect, useRef } from 'react';
import { imageUrl } from "../../constants/Resources";
import { useNavigate } from 'react-router-dom';
import { removeAll, getUsername } from '../../utils/session';
import '../../style/home.scss'
import { pageContents } from '../../constants/routerConstants';


function Home() {
  const navigate  = useNavigate()
  const loginUserName = getUsername() || '';
  // 存储倒计时数据
  const [time, setTime] = useState(60)
  // 定时器-60s倒计时
  const timeRef = useRef()

  // useEffect(() => {
  //   if (time && time !== 0) {
  //     timeRef.current = setInterval(() => {
  //       setTime(time => time-1)
  //     }, 1000);
  //   } else {
  //     // 移除所有登录信息
  //     removeAll()
  //     // 跳转到登录页
  //     navigate('/login')
  //   }

  //   return () => {
  //     clearInterval(timeRef.current)
  //   }
  // }, [time])

  // 退出登录
  const quit = () => {
    // 移除所有登录和配置信息
    removeAll()
    // 跳转到登录页
    navigate('/login')
  }

  return (
    <div className='home'>
      <div className='home-header'>
        <div className='home-header-title'>XXX系统</div>
        <div className='home-header-info'>
          <div className='home-header-username'>{loginUserName}</div>
          <div className='home-header-operate'>
            <img className='home-header-img' src={imageUrl.QUIT} />
            <div className='home-header-quit' onClick={quit}>退出登录</div>
          </div>
        </div>
      </div>
      <div className={`home-content`}>
        {
          pageContents['LAYER_SHELF_AREA'].map((item, index) => {
            return (
              <div key={index} onClick={() => { navigate(item.router) }} style={{ backgroundColor: item.bgColor }} className='home-content-put'>
                <img className='home-content-img' src={imageUrl[item.imageUrl]} />
                <div className='home-content-title'>{item.title}</div>
                <div className='home-content-tips'>{item.tips}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Home;
