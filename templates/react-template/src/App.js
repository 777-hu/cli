import './App.css';
import {
	HashRouter as Router, Route, Routes, Navigate,
  } from 'react-router-dom';
import { Provider } from 'react-redux'
import "dayjs/locale/zh-cn";
import locale from "antd/locale/zh_CN";
import { ConfigProvider, App as AntdApp } from "antd";
import Setting from './pages/settingPage'
import Wrapper from './Wrapper'
import Login from './pages/login';
import Home from './pages/home'
import NotFound from './pages/NotFound';
import store from './store/store';
import PrivateRoute from './components/PrivateRoute';

// 示例页面引入
import TestPage from './pages/testPage'
import TestOne from './pages/testPage/TestOne'
import TestTwo from './pages/testPage/TestTwo'

function App() {
	return (
		<Provider store={store}>
			<ConfigProvider
				theme={{
					components: {
						Message: {
							contentBg: '#4E5969',
							colorText: '#fff',
						  /* 这里是你的组件 token */
						},
					},
				}}
				locale={locale}
			>
				<AntdApp >
					<Router>
						<Routes>
							<Route path="/setting" element={<Setting />} />
							<Route path="/login" element={<Login />} />
							<Route path='/unauthorized' element={<NotFound />} />
 							<Route path="*" element={<Navigate to="/unauthorized"/>} />
							<Route path="/" element={<Wrapper />}>
							<Route path="" element={<Navigate to="/home"/>} />
								<Route path="home" element={<PrivateRoute roles={['ADMIN', 'DEVELOPER']} comp={<Home />} />} />
								{/* 出入库历史记录 */}
								<Route path="test" element={<PrivateRoute roles={['WAREHOUSE_MANAGER', 'DEVELOPER']} comp={<TestPage />} />}>
									<Route path="" element={<Navigate to="/test/test1"/>} />
									<Route path="test1" element={<TestOne />} />
									<Route path="test2" element={<TestTwo />} />
								</Route>
							</Route>
						</Routes>
					</Router>
				</AntdApp>
			</ConfigProvider>
		</Provider>
	)
}

export default App;
