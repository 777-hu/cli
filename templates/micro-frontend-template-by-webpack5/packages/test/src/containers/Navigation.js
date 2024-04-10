import { Link } from "react-router-dom";
import React from "react";
import { Provider } from 'react-redux';
import { Popover } from 'antd';
import '../style/navigation.scss';
import common from 'commonLib/common';
import store from '../store/store';

const { commonConstants } = common;
const { SideBarConstants } = commonConstants;
const { sideBarKey } = SideBarConstants;

const Navigation = (props) => {
    const { sideBarData, onNavSelect, selectedNavBar } = props;

    const triggerIcon = (item) => {
        const { path, icon } = item;
        const selectedClass = selectedNavBar === path ? 'navigation-selected' : '';

        return (
            <p
                className={`${selectedClass} navigation-icon`}
            >
                { icon }
            </p>
        )
    }

    return (
        <Provider store={store}>
            <div className="navigation-wrapper">
                <div className="navigation-icon-wrapper">
                    <p
                        className='navigation-logo'
                    >
                        <img alt="" src="/images/logo.png" />
                    </p>
                </div>
                {sideBarData.map((item) => {
                    const { path, name } = item;

                    return (
                        <Link key={name} to={`${item.path}`} onClick={() => {onNavSelect(path)}}>
                            <div
                                key={name}
                                className="navigation-icon-wrapper"
                            >
                                <Popover
                                    placement="bottomRight"
                                    closable={false}
                                    content={item.name}
                                >
                                    {triggerIcon(item)}
                                </Popover>
                                <div style={{ marginTop: '0.1rem' }}>
                                    {name}
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </Provider>
    )
};

export default Navigation;
