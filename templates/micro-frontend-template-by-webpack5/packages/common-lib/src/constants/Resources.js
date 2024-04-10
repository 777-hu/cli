const imageUrl = {
	NAV_HISTORY:'/nav_history.png',
};

Object.keys(imageUrl).forEach((key) => {
  imageUrl[key] = `/images${imageUrl[key]}`;
});

export { imageUrl };
