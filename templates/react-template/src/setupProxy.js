const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
		"",
		createProxyMiddleware({
		target: "ip",
		changeOrigin: true,
		logLevel: "debug",
		pathRewrite: {
				"": "",
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
