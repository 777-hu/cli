import React, { useState } from 'react'
import { Popover } from 'antd';
import {GlobalOutlined, createFromIconfontCN } from '@ant-design/icons';
import '../css/firstNavigation.scss'
import { Link } from 'react-router-dom';

function FirstNavigation(props) {
	const { sideBarData, onNavSelect, selectedNavBar } = props

	const triggerIcon = (item) => {

		const selectedClass = selectedNavBar === item.name ? 'navigation-selected' : ''; 

        return (
            <p
                onClick={() => {onNavSelect(item)}}
                className={`${selectedClass} navigation-icon`}
            >
                <GlobalOutlined style={{fontSize: 24}}/>
            </p>
        )
    }

	return (
		<div className="firstNavigation-wrapper">
			{
				sideBarData.map(item => {
					return (
							<div
								key={item.name}
								className="navigation-icon-wrapper"
							>
								<Popover
									placement="bottomRight"
									closable={false}
									content={item.name}
								>
									{triggerIcon(item)}
								</Popover>
								<div>
									{item.name}
								</div>
							</div>
					)
				})
			}
		</div>
	)
}

export default FirstNavigation