import './App.css';
import {
	HashRouter as Router, Route, Routes, Navigate,
  } from 'react-router-dom';
import "dayjs/locale/zh-cn";
import locale from "antd/locale/zh_CN";
import { ConfigProvider } from "antd";
import Pages from './pages';
import NotFound from './pages/NotFound';

function App() {
	return (
		<ConfigProvider locale={locale}>
			<Router>
				<Routes>
					<Route path="/" element={<Navigate to="/index"/>} />
					<Route path="/index" element={<Pages />} />
					<Route path='404' element={<NotFound />} />
					<Route path="*" element={<Navigate to="/404"/>} />
				</Routes>
			</Router>
		</ConfigProvider>
	)
}

export default App;
