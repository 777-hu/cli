const { createProxyMiddleware } = require("http-proxy-middleware");
const PROXY_IP = require("./proxyIp");

module.exports = function (app) {
	app.use(
		createProxyMiddleware("/api/",{
			target: `http://${PROXY_IP}/`,
			changeOrigin: true,
			ws: false,
			logLevel: "debug",
			pathRewrite: {
				"/api/": "",
			},
		}),
		createProxyMiddleware("/layer-smart-warehouse/register",{
			target: `ws://${PROXY_IP}`,
			changeOrigin: true,
			ws: true,
			logLevel: "debug",
		})
	);
};
