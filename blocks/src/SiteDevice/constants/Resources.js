const Config = {
	// resourceUrlPrefix: '/src/images',
	resourceUrlPrefix: 'https://tmidevoss.oss-cn-shanghai.aliyuncs.com/images/tmi-material/images',
}

const imageUrl = {
	STATION1: '/station1.svg',
	STATION2: '/station2.svg',
	STATION3: '/station3.svg',
	STATION4: '/station4.svg',
	STATION5: '/station5.svg',
	STATION6: '/station6.svg',
};

Object.keys(imageUrl).forEach((key) => imageUrl[key] = `${Config.resourceUrlPrefix}${imageUrl[key]}`);

export { imageUrl };
