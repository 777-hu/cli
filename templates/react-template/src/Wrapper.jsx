import React, { useEffect } from 'react';
import { useNavigate, useOutlet, useLocation } from 'react-router-dom';
import { App } from 'antd';
import { getUserId, isAuthenticated } from './utils/session';

function Wrapper() {
    const { message } = App.useApp()
    const userId = getUserId();
    const outlet = useOutlet(); 
	const navigate = useNavigate()
	const location = useLocation()

    useEffect(() => {
        // const { pathname } = location;
        // if(userId) {
        //     if(pathname === '/') {
        //         navigate('/home')
        //     } else {
        //         navigate(pathname)
        //     }  
        // } else {
        //     redirectToLogin();
        // }
	}, [userId]);

    const redirectToLogin = () => {
		if (!isAuthenticated()) {
			navigate('/login');
			message.error('登录信息已过期，请重新登录！');
		}
	};

    return (
        <div>
            {outlet}
        </div>
    );
}

export default Wrapper;
