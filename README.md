E:\my-test\cli
├─.gitignore
├─commitlint.config.js
├─package.json
├─pnpm-workspace.yaml
├─templates
|     ├─react-template-navigate
|     |            ├─.env.dev
|     |            ├─.env.prod
|     |            ├─.gitignore
|     |            ├─Dockerfile
|     |            ├─nginx.conf
|     |            ├─package.json
|     |            ├─README.md
|     |            ├─src
|     |            |  ├─App.css
|     |            |  ├─App.js
|     |            |  ├─App.test.js
|     |            |  ├─index.css
|     |            |  ├─index.js
|     |            |  ├─logo.svg
|     |            |  ├─reportWebVitals.js
|     |            |  ├─setupProxy.js
|     |            |  ├─setupTests.js
|     |            |  ├─Wrapper.jsx
|     |            |  ├─utils
|     |            |  |   ├─request.js
|     |            |  |   ├─session.js
|     |            |  |   ├─utils.js
|     |            |  |   └webSocketListener.js
|     |            |  ├─template
|     |            |  |    └AddTableInSitu.jsx
|     |            |  ├─redux
|     |            |  |   ├─store.js
|     |            |  |   ├─reducers
|     |            |  |   |    └testReducer.js
|     |            |  ├─pages
|     |            |  |   ├─index.jsx
|     |            |  |   ├─NotFound.jsx
|     |            |  |   ├─utils.js
|     |            |  |   ├─wrapper
|     |            |  |   |    ├─FirstNavigation.jsx
|     |            |  |   |    ├─Header.jsx
|     |            |  |   |    └SecondaryNavigation.jsx
|     |            |  |   ├─testPage
|     |            |  |   |    ├─testOne.jsx
|     |            |  |   |    └testTwo.jsx
|     |            |  |   ├─login
|     |            |  |   |   └Login.jsx
|     |            |  ├─css
|     |            |  |  ├─firstNavigation.scss
|     |            |  |  ├─header.scss
|     |            |  |  ├─login.scss
|     |            |  |  ├─secondaryNavigation.scss
|     |            |  |  └wrapper.scss
|     |            |  ├─constants
|     |            |  |     ├─cookieConstants.js
|     |            |  |     └SideBarConstants.js
|     |            |  ├─config
|     |            |  |   └config.js
|     |            |  ├─component
|     |            |  |     └PrivateRoute.jsx
|     |            |  ├─api
|     |            |  |  └loginApi.js
|     |            ├─public
|     |            |   ├─favicon.ico
|     |            |   ├─index.html
|     |            |   ├─logo192.png
|     |            |   ├─logo512.png
|     |            |   ├─manifest.json
|     |            |   ├─robots.txt
|     |            |   └taimi-logo.png
|     ├─react-template
|     |       ├─.env.dev
|     |       ├─.env.prod
|     |       ├─.gitignore
|     |       ├─package-lock.json
|     |       ├─package.json
|     |       ├─README.md
|     |       ├─src
|     |       |  ├─App.css
|     |       |  ├─App.js
|     |       |  ├─App.test.js
|     |       |  ├─index.css
|     |       |  ├─index.js
|     |       |  ├─logo.svg
|     |       |  ├─proxyIp.js
|     |       |  ├─reportWebVitals.js
|     |       |  ├─setupProxy.js
|     |       |  ├─setupTests.js
|     |       |  ├─Wrapper.jsx
|     |       |  ├─utils
|     |       |  |   ├─request.js
|     |       |  |   ├─session.js
|     |       |  |   ├─utils.js
|     |       |  |   └webSocketListener.js
|     |       |  ├─style
|     |       |  |   ├─commonStyles.scss
|     |       |  |   ├─home.scss
|     |       |  |   ├─login.scss
|     |       |  |   ├─messageTip.scss
|     |       |  |   └settingPage.scss
|     |       |  ├─store
|     |       |  |   ├─store.js
|     |       |  |   ├─reducers
|     |       |  |   |    └testReducer.js
|     |       |  ├─pages
|     |       |  |   ├─NotFound.jsx
|     |       |  |   ├─testPage
|     |       |  |   |    ├─index.jsx
|     |       |  |   |    ├─TestOne.jsx
|     |       |  |   |    └TestTwo.jsx
|     |       |  |   ├─settingPage
|     |       |  |   |      └index.jsx
|     |       |  |   ├─login
|     |       |  |   |   └index.jsx
|     |       |  |   ├─home
|     |       |  |   |  └index.jsx
|     |       |  ├─constants
|     |       |  |     ├─cookieConstants.js
|     |       |  |     ├─Resources.js
|     |       |  |     └routerConstants.js
|     |       |  ├─config
|     |       |  |   └config.js
|     |       |  ├─components
|     |       |  |     ├─CommonCreateModal.jsx
|     |       |  |     ├─CommonHeader.jsx
|     |       |  |     ├─CommonTable.jsx
|     |       |  |     └PrivateRoute.jsx
|     |       |  ├─api
|     |       |  |  └loginApi.js
|     |       ├─public
|     |       |   ├─favicon.ico
|     |       |   ├─index.html
|     |       |   ├─logo192.png
|     |       |   ├─logo512.png
|     |       |   ├─manifest.json
|     |       |   ├─robots.txt
|     |       |   ├─taimi-logo.png
|     |       |   ├─images
|     |       |   |   ├─applyBtn.svg
|     |       |   |   ├─applyBtnClick.png
|     |       |   |   ├─applyFinish.svg
|     |       |   |   ├─applyProcessing.svg
|     |       |   |   ├─applySuccess.svg
|     |       |   |   ├─calibration.svg
|     |       |   |   ├─empty.svg
|     |       |   |   ├─error.svg
|     |       |   |   ├─finish.svg
|     |       |   |   ├─goback.svg
|     |       |   |   ├─historyicon.png
|     |       |   |   ├─homebg.svg
|     |       |   |   ├─hourglassBorder.svg
|     |       |   |   ├─loginbg.svg
|     |       |   |   ├─processing.svg
|     |       |   |   ├─puticon.png
|     |       |   |   ├─quit.svg
|     |       |   |   ├─recognize.svg
|     |       |   |   ├─settingbg.png
|     |       |   |   ├─success.svg
|     |       |   |   ├─takeicon.png
|     |       |   |   └waiting.svg
|     ├─micro-frontend-template-by-webpack5
|     |                  ├─.gitignore
|     |                  ├─commitlint.config.js
|     |                  ├─config.txt
|     |                  ├─dictionary.js
|     |                  ├─lerna.json
|     |                  ├─nginx.conf
|     |                  ├─package.json
|     |                  ├─Shanghai
|     |                  ├─packages
|     |                  |    ├─test
|     |                  |    |  ├─.eslintrc.js
|     |                  |    |  ├─.gitignore
|     |                  |    |  ├─babel.config.json
|     |                  |    |  ├─config.txt
|     |                  |    |  ├─Dockerfile
|     |                  |    |  ├─env.sh
|     |                  |    |  ├─environment.config.json
|     |                  |    |  ├─favicon.ico
|     |                  |    |  ├─index-prod.html
|     |                  |    |  ├─index.css
|     |                  |    |  ├─index.html
|     |                  |    |  ├─jest.config.json
|     |                  |    |  ├─location.config.json
|     |                  |    |  ├─logo.png
|     |                  |    |  ├─manifest.json
|     |                  |    |  ├─package.json
|     |                  |    |  ├─pom.properties
|     |                  |    |  ├─staging.js
|     |                  |    |  ├─tmirob-logo144.png
|     |                  |    |  ├─webpack.config.js
|     |                  |    |  ├─webpack.prod.config.js
|     |                  |    |  ├─__test__
|     |                  |    |  |    ├─app.test.js
|     |                  |    |  |    ├─example.test.js
|     |                  |    |  |    └setupTests.js
|     |                  |    |  ├─static
|     |                  |    |  |   ├─font_2555370_c4r08vl3poa.ttf
|     |                  |    |  |   ├─font_2555370_c4r08vl3poa.woff
|     |                  |    |  |   └font_2555370_c4r08vl3poa.woff2
|     |                  |    |  ├─src
|     |                  |    |  |  ├─App.js
|     |                  |    |  |  ├─bootstrap.js
|     |                  |    |  |  ├─index.js
|     |                  |    |  |  ├─routes.js
|     |                  |    |  |  ├─Wrapper.js
|     |                  |    |  |  ├─style
|     |                  |    |  |  |   ├─index.scss
|     |                  |    |  |  |   ├─information.scss
|     |                  |    |  |  |   ├─login.scss
|     |                  |    |  |  |   ├─navigation.scss
|     |                  |    |  |  |   ├─sidebar.scss
|     |                  |    |  |  |   └standard.scss
|     |                  |    |  |  ├─store
|     |                  |    |  |  |   ├─store.js
|     |                  |    |  |  |   ├─reducers
|     |                  |    |  |  |   |    └applyTicketReducer.js
|     |                  |    |  |  ├─login
|     |                  |    |  |  |   ├─Login.js
|     |                  |    |  |  |   └LoginForm.js
|     |                  |    |  |  ├─containers
|     |                  |    |  |  |     ├─HomePage.js
|     |                  |    |  |  |     ├─InformationBar.js
|     |                  |    |  |  |     ├─MessageBoxContainer.js
|     |                  |    |  |  |     ├─Navigation.js
|     |                  |    |  |  |     └Sidebar.js
|     |                  |    |  |  ├─common
|     |                  |    |  |  |   ├─RouterProvider.js
|     |                  |    |  |  |   └utils.js
|     |                  |    |  |  ├─api
|     |                  |    |  |  |  ├─authApi.js
|     |                  |    |  |  |  └departmentApi.js
|     |                  |    |  ├─public
|     |                  |    |  |   ├─images
|     |                  |    |  |   |   ├─login.png
|     |                  |    |  |   |   ├─logo.png
|     |                  |    |  |   |   ├─nav_history.png
|     |                  |    |  |   |   └user.png
|     |                  |    |  ├─config
|     |                  |    |  |   ├─config.dev.json
|     |                  |    |  |   └config.json
|     |                  |    ├─shell-app
|     |                  |    |     ├─.eslintrc.js
|     |                  |    |     ├─.gitignore
|     |                  |    |     ├─babel.config.json
|     |                  |    |     ├─config.txt
|     |                  |    |     ├─Dockerfile
|     |                  |    |     ├─env.sh
|     |                  |    |     ├─environment.config.json
|     |                  |    |     ├─favicon.ico
|     |                  |    |     ├─index-prod.html
|     |                  |    |     ├─index.css
|     |                  |    |     ├─index.html
|     |                  |    |     ├─jest.config.json
|     |                  |    |     ├─location.config.json
|     |                  |    |     ├─logo.png
|     |                  |    |     ├─manifest.json
|     |                  |    |     ├─package.json
|     |                  |    |     ├─pom.properties
|     |                  |    |     ├─staging.js
|     |                  |    |     ├─tmirob-logo144.png
|     |                  |    |     ├─webpack.config.js
|     |                  |    |     ├─webpack.prod.config.js
|     |                  |    |     ├─__test__
|     |                  |    |     |    ├─app.test.js
|     |                  |    |     |    ├─example.test.js
|     |                  |    |     |    └setupTests.js
|     |                  |    |     ├─static
|     |                  |    |     |   ├─font_2555370_c4r08vl3poa.ttf
|     |                  |    |     |   ├─font_2555370_c4r08vl3poa.woff
|     |                  |    |     |   └font_2555370_c4r08vl3poa.woff2
|     |                  |    |     ├─src
|     |                  |    |     |  ├─App.js
|     |                  |    |     |  ├─bootstrap.js
|     |                  |    |     |  ├─index.js
|     |                  |    |     |  ├─routes.js
|     |                  |    |     |  ├─Wrapper.js
|     |                  |    |     |  ├─style
|     |                  |    |     |  |   ├─index.scss
|     |                  |    |     |  |   ├─information.scss
|     |                  |    |     |  |   ├─login.scss
|     |                  |    |     |  |   ├─navigation.scss
|     |                  |    |     |  |   ├─sidebar.scss
|     |                  |    |     |  |   └standard.scss
|     |                  |    |     |  ├─store
|     |                  |    |     |  |   ├─store.js
|     |                  |    |     |  |   ├─reducers
|     |                  |    |     |  |   |    ├─applyTicketReducer.js
|     |                  |    |     |  |   |    └entryTicketReducer.js
|     |                  |    |     |  ├─login
|     |                  |    |     |  |   ├─Login.js
|     |                  |    |     |  |   └LoginForm.js
|     |                  |    |     |  ├─containers
|     |                  |    |     |  |     ├─HomePage.js
|     |                  |    |     |  |     ├─InformationBar.js
|     |                  |    |     |  |     ├─MessageBoxContainer.js
|     |                  |    |     |  |     ├─Navigation.js
|     |                  |    |     |  |     └Sidebar.js
|     |                  |    |     |  ├─common
|     |                  |    |     |  |   ├─RouterProvider.js
|     |                  |    |     |  |   └utils.js
|     |                  |    |     |  ├─api
|     |                  |    |     |  |  ├─authApi.js
|     |                  |    |     |  |  └departmentApi.js
|     |                  |    |     ├─public
|     |                  |    |     |   ├─images
|     |                  |    |     |   |   ├─login.png
|     |                  |    |     |   |   ├─logo.png
|     |                  |    |     |   |   ├─nav_history.png
|     |                  |    |     |   |   └user.png
|     |                  |    |     ├─config
|     |                  |    |     |   ├─config.dev.json
|     |                  |    |     |   └config.json
|     |                  |    ├─common-lib
|     |                  |    |     ├─.eslintrc.js
|     |                  |    |     ├─.gitignore
|     |                  |    |     ├─babel.config.json
|     |                  |    |     ├─favicon.ico
|     |                  |    |     ├─index.html
|     |                  |    |     ├─package.json
|     |                  |    |     ├─webpack.config.js
|     |                  |    |     ├─webpack.prod.config.js
|     |                  |    |     ├─__test__
|     |                  |    |     |    ├─enzymeSetup.js
|     |                  |    |     |    └example.test.js
|     |                  |    |     ├─src
|     |                  |    |     |  ├─index.js
|     |                  |    |     |  ├─utils
|     |                  |    |     |  |   ├─apiAxiosUtil.js
|     |                  |    |     |  |   ├─apiUtil.js
|     |                  |    |     |  |   ├─DefaultHeaders.js
|     |                  |    |     |  |   ├─getCabinetSn.js
|     |                  |    |     |  |   ├─index.js
|     |                  |    |     |  |   ├─session.js
|     |                  |    |     |  |   ├─utils.js
|     |                  |    |     |  |   ├─versionCheck.js
|     |                  |    |     |  |   └webSocketListerer.js
|     |                  |    |     |  ├─style
|     |                  |    |     |  |   ├─atom
|     |                  |    |     |  |   |  ├─atom.scss
|     |                  |    |     |  |   |  ├─background.scss
|     |                  |    |     |  |   |  ├─font.scss
|     |                  |    |     |  |   |  ├─height.scss
|     |                  |    |     |  |   |  ├─margin.scss
|     |                  |    |     |  |   |  ├─padding.scss
|     |                  |    |     |  |   |  ├─position.scss
|     |                  |    |     |  |   |  ├─var.scss
|     |                  |    |     |  |   |  └width.scss
|     |                  |    |     |  ├─hooks
|     |                  |    |     |  |   ├─index.js
|     |                  |    |     |  |   ├─useDebounce.js
|     |                  |    |     |  |   ├─useInterval.js
|     |                  |    |     |  |   ├─useRecursiveInterval.js
|     |                  |    |     |  |   └useRecursiveTimeout.js
|     |                  |    |     |  ├─constants
|     |                  |    |     |  |     ├─ActionTypes.js
|     |                  |    |     |  |     ├─cookieConstants.js
|     |                  |    |     |  |     ├─index.js
|     |                  |    |     |  |     ├─Resources.js
|     |                  |    |     |  |     └SideBarConstants.js
|     |                  |    |     |  ├─components
|     |                  |    |     |  |     ├─AndroidGestureOpponent.js
|     |                  |    |     |  |     ├─index.js
|     |                  |    |     |  |     ├─UbuntuGestureOpponent.js
|     |                  |    |     |  |     └WindowsGestureOpponent.js
|     |                  |    |     ├─config
|     |                  |    |     |   └config.dev.json
|     |                  |    ├─basic-data-app
|     |                  |    |       ├─.eslintrc.js
|     |                  |    |       ├─.gitignore
|     |                  |    |       ├─babel.config.json
|     |                  |    |       ├─favicon.ico
|     |                  |    |       ├─index.html
|     |                  |    |       ├─jest.config.json
|     |                  |    |       ├─package.json
|     |                  |    |       ├─webpack.config.js
|     |                  |    |       ├─webpack.prod.config.js
|     |                  |    |       ├─__test__
|     |                  |    |       |    ├─example.test.js
|     |                  |    |       |    └setupTests.js
|     |                  |    |       ├─src
|     |                  |    |       |  ├─App.js
|     |                  |    |       |  ├─index.js
|     |                  |    |       |  ├─style
|     |                  |    |       |  |   └UserSetting.scss
|     |                  |    |       |  ├─images
|     |                  |    |       |  |   └button.png
|     |                  |    |       |  ├─containers
|     |                  |    |       |  |     └UserSetting.js
|     |                  |    |       |  ├─constants
|     |                  |    |       |  |     └imgUrl.js
|     |                  |    |       |  ├─components
|     |                  |    |       |  |     └UserForm.js
|     |                  |    |       |  ├─api
|     |                  |    |       |  |  └userApi.js
|     |                  |    |       ├─config
|     |                  |    |       |   └config.dev.json
|     |                  ├─.husky
|     |                  |   └commit-msg
├─packages
|    ├─core
|    |  ├─src
|    |  |  ├─index.js
|    |  |  ├─utils
|    |  |  |   ├─constants.js
|    |  |  |   ├─createApp.js
|    |  |  |   ├─createComponent.js
|    |  |  |   ├─createSuccessInfo.js
|    |  |  |   └index.js
|    |  |  ├─bin
|    |  |  |  └index.js
├─examples
|    ├─.gitignore
|    ├─test
|    |  └.gitignore
|    ├─app
|    |  └.gitignore
├─blocks
|   ├─WarehousingEntry
|   |        ├─index.jsx
|   |        ├─index.scss
|   |        ├─README.md
|   |        ├─components
|   |        |     ├─ApplyList.jsx
|   |        |     └SelectList.jsx
|   ├─TmiLogin
|   |    ├─index.jsx
|   |    ├─index.scss
|   |    └README.md
|   ├─TableWithPage
|   |       ├─index.jsx
|   |       ├─index.scss
|   |       └README.md
|   ├─SiteDevice
|   |     ├─index.jsx
|   |     ├─index.scss
|   |     ├─README.md
|   |     ├─style
|   |     |   └SiteDeviceRobot.scss
|   |     ├─images
|   |     |   ├─station1.svg
|   |     |   ├─station2.svg
|   |     |   ├─station3.svg
|   |     |   ├─station4.svg
|   |     |   ├─station5.svg
|   |     |   └station6.svg
|   |     ├─constants
|   |     |     └Resources.js
|   |     ├─components
|   |     |     └SiteDeviceRobot.jsx
|   ├─RobotInfo
|   |     ├─index copy.jsx
|   |     ├─index copy.scss
|   |     ├─index.jsx
|   |     ├─index.scss
|   |     ├─README.md
|   |     ├─style
|   |     |   ├─BtnItem.scss
|   |     |   ├─PowerProgress.scss
|   |     |   ├─RobotCard.scss
|   |     |   └statusTips.scss
|   |     ├─images
|   |     |   ├─AGVFixedClosedRobot.png
|   |     |   ├─background.png
|   |     |   ├─dabai.png
|   |     |   ├─daoyin.png
|   |     |   ├─DefaultRobot.png
|   |     |   ├─Ellipsis.svg
|   |     |   ├─EllipsisHover.svg
|   |     |   ├─empty-content.png
|   |     |   ├─Frame19.png
|   |     |   ├─header.png
|   |     |   ├─heyixue2.0.png
|   |     |   ├─logoNoData.svg
|   |     |   ├─power.svg
|   |     |   ├─right.png
|   |     |   ├─robot-charge-icon-black.svg
|   |     |   ├─TRV-01.png
|   |     |   ├─TRV-02.png
|   |     |   ├─TRV-03.png
|   |     |   ├─TRV-05.png
|   |     |   ├─TRV-07.png
|   |     |   ├─TRV-08.png
|   |     |   ├─TRV-09-C.png
|   |     |   ├─TRV-09.png
|   |     |   ├─TRV-10.png
|   |     |   ├─TRV-11-A.png
|   |     |   ├─TRV-11-B.png
|   |     |   ├─TRV-11-RFID.png
|   |     |   ├─TRV-12.png
|   |     |   ├─TRV-13.png
|   |     |   ├─TRV-15.png
|   |     |   ├─TRV-16.png
|   |     |   ├─TRW-01-FIX.png
|   |     |   ├─TRW-01.png
|   |     |   ├─TRW-02.png
|   |     |   ├─TRW-03-A.png
|   |     |   ├─TRW-03-C.png
|   |     |   ├─xiaodu.png
|   |     |   ├─xiaodu1.0.png
|   |     |   └xiaodu2.0.png
|   |     ├─constants
|   |     |     ├─constants.js
|   |     |     └Resources.js
|   |     ├─components
|   |     |     ├─BtnItem.jsx
|   |     |     ├─PowerProgress.jsx
|   |     |     ├─RobotCard.jsx
|   |     |     └StatusTips.jsx
|   ├─Navigate
|   |    ├─index.jsx
|   |    ├─README.md
|   |    ├─tmirob-logo144.png
|   |    ├─css
|   |    |  ├─firstNavigation.scss
|   |    |  ├─header.scss
|   |    |  ├─index.scss
|   |    |  └secondaryNavigation.scss
|   |    ├─constants
|   |    |     └SideBarConstants.js
|   |    ├─component
|   |    |     ├─FirstNavigation.jsx
|   |    |     ├─Header.jsx
|   |    |     └SecondaryNavigation.jsx
|   ├─FormWithTitle
|   |       ├─index.jsx
|   |       ├─index.scss
|   |       └README.md
|   ├─CardList
|   |    ├─index.jsx
|   |    ├─index.scss
|   |    ├─README.md
|   |    └right.png
|   ├─AddInSituTable
|   |       ├─src
|   |       |  ├─index.jsx
|   |       |  ├─index.scss
|   |       |  ├─components
|   |       |  |     └EditableCell.jsx
├─.git
|  ├─config
|  ├─description
|  ├─HEAD
|  ├─index
|  ├─packed-refs
|  ├─refs
|  |  ├─tags
|  |  ├─remotes
|  |  |    ├─origin
|  |  |    |   └HEAD
|  |  ├─heads
|  |  |   ├─main
|  |  |   └master
|  ├─objects
|  |    ├─pack
|  |    |  ├─pack-b2519ef99116bdf711e46e8341665fd2af542b03.idx
|  |    |  └pack-b2519ef99116bdf711e46e8341665fd2af542b03.pack
|  |    ├─info
|  ├─logs
|  |  ├─HEAD
|  |  ├─refs
|  |  |  ├─remotes
|  |  |  |    ├─origin
|  |  |  |    |   └HEAD
|  |  |  ├─heads
|  |  |  |   ├─main
|  |  |  |   └master
|  ├─info
|  |  └exclude
|  ├─hooks
|  |   ├─applypatch-msg.sample
|  |   ├─commit-msg.sample
|  |   ├─fsmonitor-watchman.sample
|  |   ├─post-update.sample
|  |   ├─pre-applypatch.sample
|  |   ├─pre-commit.sample
|  |   ├─pre-merge-commit.sample
|  |   ├─pre-push.sample
|  |   ├─pre-rebase.sample
|  |   ├─pre-receive.sample
|  |   ├─prepare-commit-msg.sample
|  |   ├─push-to-checkout.sample
|  |   └update.sample