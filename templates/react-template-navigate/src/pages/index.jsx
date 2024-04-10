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
		<div>
			Pages
		</div>
	);
}

export default Pages;
