const Config = {
	resourceUrlPrefix: 'https://tmidevoss.oss-cn-shanghai.aliyuncs.com/images/tmi-material/images',
}

const imageUrl = {
	MESSAGE: "/message.svg",
	EMPTY: "/empty.svg",
	DATE_DEFAULT: "/dateDefault.svg",
	USER_HEADER: "/userHeader.svg",
	POWER_OFF: "/poweroff.svg",
	USER: "/user.svg",
};

Object.keys(imageUrl).forEach((key) => imageUrl[key] = `${Config.resourceUrlPrefix}${imageUrl[key]}`);

export {imageUrl};
