import React from "react";

const UserSetting = React.lazy(() => import("./containers/UserSetting"));
const UserForm = React.lazy(() => import("./components/UserForm"));

const basicComponents = {
	UserSetting,
	UserForm,
}

export default basicComponents
