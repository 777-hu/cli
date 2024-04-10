import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import {
  HashRouter as Router, Route, Routes,
} from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import store from './store/store';
import shellRoutes from './routes';
// 公共页面
import basicComponents from 'basicDataApp/basicComponents';
import Wrapper from './Wrapper';
import Login from './login/Login';

import './style/index.scss';
import './style/standard.scss'
import "commonLib/atom"

dayjs.locale('zh-cn');

// 公共页面路由
const basicDataApp = [
	{
		path: "/user",
		name: "用户信息",
		component: <basicComponents.UserSetting />,
		exact: true
	},
  {
		path: "/user-form",
		name: "用户信息",
		component: <basicComponents.UserForm />,
		exact: true
	},
  {
		path: "/history",
		component: <basicComponents.UserSetting />,
		name: "历史记录",
		exact: true,
	},
];

const routes = [...shellRoutes, ...basicDataApp ];
const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Wrapper routes={routes} />}>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={`${route.path}`}
                  element={<Suspense fallback={<div>Loading...</div>}>{route.component}</Suspense>}
                />
              ))}
            </Route>
          </Routes>
        </Router>
      </Provider>
    </ConfigProvider>
  )
}

export default App;
