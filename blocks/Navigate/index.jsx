import React, { useState, useEffect } from 'react';
import FirstNavigation from './component/FirstNavigation'
import SecondaryNavigation from './component/SecondaryNavigation'
import Header from './component/Header';
import SideBarConstants from './constants/SideBarConstants'
import './css/index.scss';

const { sideBarData } = SideBarConstants

const Navigation = (props) => {
  // 选中的一级导航
  const [selectedNavBar, setSelectedNavBar] = useState('');
  // 选中的二级导航
  const [selectedSecondNavBar, setSelectedSecondNavBar] = useState('');
  // 一级导航下二级导航是否有数据
  const [currentSideBarData, setCurrentSideBarData] = useState('');

  const onNavSelect = (item) => {
    setCurrentSideBarData(item.children)
    setSelectedNavBar(item.name)
  }

  // 选中的二级导航
  const onSideBarSelect = (item) => {
	console.log('item', item);
    setSelectedSecondNavBar(item.key)
  }

  return (
    <div className='Navigation'>
		<div className='first-nav-bar'>
			<img className='first-nav-logo' src="https://tmidevoss.oss-cn-shanghai.aliyuncs.com/images/tmi-material/images/tmirob-logo144.png" alt="" />
			<FirstNavigation 
			sideBarData={sideBarData} 
			onNavSelect={onNavSelect}
			selectedNavBar={selectedNavBar}
			/>
		</div>
		{currentSideBarData
			&& (Array.isArray(currentSideBarData) || Object.keys(currentSideBarData).length > 0) ? (
				<div className='second-nav-bar'>
				<p className='second-nav-bar-title'>{selectedNavBar}</p>
				<SecondaryNavigation 
					currentSideBarData={currentSideBarData} 
					onSideBarSelect={onSideBarSelect}
				/>
				</div>
			) : null
			}
		<div className='content-wrapper'>
			<Header selectedNavBar={selectedNavBar} selectedSecondNavBar={selectedSecondNavBar} />
			<div>
				{props.children}
			</div>
		</div>
	</div>
	)
}

export default Navigation