const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
		"/api/",
		createProxyMiddleware({
		target: "http://192.168.22.168:9090/",
		changeOrigin: true,
		logLevel: "debug",
		pathRewrite: {
				"^/api/": "",
			},
		}) 
  );
  // app.use(
  //   '/mock/112/',
  // 	createProxyMiddleware({
  // 		target: 'http://192.168.31.33:9100/',
  //     changeOrigin: true,
  //     logLevel: 'debug',
  //     pathRewrite: {
  //       "^/mock/112/":"",
  //     },
  // 	}),
  // )
};
