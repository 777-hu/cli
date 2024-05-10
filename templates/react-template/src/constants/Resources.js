const imageUrl = {
  LOGIN_BG: "/loginbg.svg",
  PUT_ICON: "/puticon.png",
  TAKE_ICON: "/takeicon.png",
  HISTORY_ICON: "/historyicon.png",
  GO_BACK: "/goback.svg",
  SETTING_BG: "/settingbg.png",
  SUCCESS_TIP: "/success.svg",
  ERROR_TIP: "/error.svg",
  EMPTY: '/empty.svg',
  QUIT: '/quit.svg',
  CALIBRATION: '/calibration.svg',
  WAITING: '/waiting.svg',
  PROCESSING: '/processing.svg',
  APPLY_PROCESSING: '/applyProcessing.svg',
  RECOGNIZE: '/recognize.svg',
  FINISH: '/finish.svg',
  APPLY_FINISH: '/applyFinish.svg',
  APPLY_BTN: '/applyBtn.svg',
  APPLY_BTN_CLICK: '/applyBtnClick.png',
};

Object.keys(imageUrl).forEach((key) => {
  imageUrl[key] = `/images${imageUrl[key]}`;
});

export { imageUrl };
