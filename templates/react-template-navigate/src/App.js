import './App.css';
import {
	HashRouter as Router, Route, Routes, Navigate,
  } from 'react-router-dom';
import "dayjs/locale/zh-cn";
import locale from "antd/locale/zh_CN";
import { ConfigProvider, App as AntdApp } from "antd";
// import { Provider } from 'react-redux';
// import configureStore from "../src/redux/store/configureStore";
import Pages from './pages';
import NotFound from './pages/NotFound';
import Wrapper from './Wrapper';
import TmiLogin from './pages/login/Login';
import { routerConfig } from './constants/SideBarConstants'
import { Suspense } from 'react';

function App() {
	// const store=configureStore()
	return (
		// <Provider store={store}>
			<ConfigProvider locale={locale}>
				<AntdApp >
					<Router>
						<Routes>
							<Route path='/login' element={<TmiLogin />}/>
							<Route path='/' element={<Wrapper />} > 
								{
									routerConfig.map(route => {
										return <Route key={route.path} path={route.path} element={<Suspense fallback={<div>Loading...</div>}>{route.component}</Suspense>}  />
									})
								}
								{/* <Route path='404' element={<NotFound />} /> */}
							</Route>
							{/* <Route path="*" element={<Navigate to="/404"/>} /> */}
						</Routes>
					</Router>
				</AntdApp>
			</ConfigProvider>
		// </Provider>
	)
}

export default App;
