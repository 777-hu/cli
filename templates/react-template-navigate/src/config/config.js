const baseUrl = {
	development: process.env.REACT_APP_BASE_URL,
	production: process.env.REACT_APP_BASE_URL,
  };
  const websocketUrl = {
	development: process.env.REACT_APP_BASE_WEBSOCKET,
	production: process.env.REACT_APP_BASE_WEBSOCKET,
  };
  const Config = {
	serverUrl: baseUrl[process.env.NODE_ENV],
	websocket: websocketUrl[process.env.NODE_ENV],
  };
  
  export default Config;
  