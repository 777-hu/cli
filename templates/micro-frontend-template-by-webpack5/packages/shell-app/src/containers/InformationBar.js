import React, { useContext } from 'react';
import { Dropdown, Space } from "antd";
import '../style/information.scss';
import { RouterContext } from '../common/RouterProvider';

function InformationBar(props) {
    const { logout } = props;
    const { selectedSideBar, barName } = useContext(RouterContext);

    const items = [
        {
          key: "1",
          label: <div onClick={logout}>退出登录</div>,
        },
    ];

    return (
        <div className="information-bar-wrapper justified-elements">
            <div style={{ display: 'flex', alignItems: 'center' }} >
                <p className="information-bar-title">{selectedSideBar?.name || barName}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }} >
                <Dropdown menu={{ items }}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            <div>
                                <img style={{ cursor: 'pointer' }} alt="" src="/images/user.png" />
                            </div>
                        </Space>
                    </a>
                </Dropdown>
            </div>
        </div>
    )
}

export default InformationBar;