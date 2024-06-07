const Config = {
	// resourceUrlPrefix: '/src/images',
	resourceUrlPrefix: 'https://tmidevoss.oss-cn-shanghai.aliyuncs.com/images/tmi-material/images',
}

const imageUrl = {
	LOGO_NO_DATA: '/logoNoData.svg',
	ROBOT_POWER_ICON: '/Frame19.png',
	EMPTY_CONTENT: '/empty-content.png',
	POWER: '/power.svg',
	RIGHT: '/right.png',
	ELLIPSIS:'/Ellipsis.svg'
};

const robotsImagesMap = new Map([
	['DefaultRobot', `${Config.resourceUrlPrefix}/DefaultRobot.png`],
	['TRV-01', `${Config.resourceUrlPrefix}/TRV-01.png`],
	['TRV-02', `${Config.resourceUrlPrefix}/TRV-02.png`],
	['TRV-03', `${Config.resourceUrlPrefix}/TRV-03.png`],
	['TRV-05', `${Config.resourceUrlPrefix}/TRV-05.png`],
	['TRV-07', `${Config.resourceUrlPrefix}/TRV-07.png`],
	['TRV-08', `${Config.resourceUrlPrefix}/TRV-08.png`],
	['TRV-11-A', `${Config.resourceUrlPrefix}/TRV-11-A.png`],
	['TRV-11-B', `${Config.resourceUrlPrefix}/TRV-11-B.png`],
	['TRV-11-RFID', `${Config.resourceUrlPrefix}/TRV-11-RFID.png`],
	['TRV-12', `${Config.resourceUrlPrefix}/TRV-12.png`],
	['TRW-02', `${Config.resourceUrlPrefix}/TRW-02.png`],
	['TRW-03-A', `${Config.resourceUrlPrefix}/TRW-03-A.png`],
	['TRW-03-C', `${Config.resourceUrlPrefix}/TRW-03-C.png`],
	['TRW-01', `${Config.resourceUrlPrefix}/TRW-01.png`],
	['TRV-09', `${Config.resourceUrlPrefix}/TRV-09.png`],
	['TRV-10', `${Config.resourceUrlPrefix}/TRV-10.png`],
	['TRV-09-C', `${Config.resourceUrlPrefix}/TRV-09-C.png`],
	['TRV-13', `${Config.resourceUrlPrefix}/TRV-13.png`],
	['TRV-15', `${Config.resourceUrlPrefix}/TRV-15.png`],
	['TRV-16', `${Config.resourceUrlPrefix}/TRV-16.png`],
	['TRW-01-FIX', `${Config.resourceUrlPrefix}/TRW-01-FIX.png`],
]);

const robotsImg = new Map([
	['SN1802B1912005', `${Config.resourceUrlPrefix}/daoyin.png`],
	['SN0202P2106801', `${Config.resourceUrlPrefix}/heyixue2.0.png`],
	['SN2801A2008001', `${Config.resourceUrlPrefix}/xiaodu.png`],
	['SN0703B2006005', `${Config.resourceUrlPrefix}/xiaodu.png`]
])

Object.keys(imageUrl).forEach((key) => imageUrl[key] = `${Config.resourceUrlPrefix}${imageUrl[key]}`);

export {imageUrl, robotsImagesMap, robotsImg};
