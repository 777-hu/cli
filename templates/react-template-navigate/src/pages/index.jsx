import React, { useEffect } from 'react';
import LoginApi from '../api/loginApi';

function Pages() {
	useEffect(() => {
		LoginApi.login({}).then((result) => {
			console.log('object');
		}).catch((err) => {
			
		});
	}, [])
	return (
		<div className='content'>
			Pages
		</div>
	);
}

export default Pages;
