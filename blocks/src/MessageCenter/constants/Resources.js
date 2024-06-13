const Config = {
	resourceUrlPrefix: 'https://tmidevoss.oss-cn-shanghai.aliyuncs.com/images/tmi-material/images',
}

const imageUrl = {
	EMPTY: "/empty.svg",
	SCHEDULE: "/schedule.svg",
};

Object.keys(imageUrl).forEach((key) => imageUrl[key] = `${Config.resourceUrlPrefix}${imageUrl[key]}`);

export {imageUrl};
