import React from "react";

const HomePage = React.lazy(() => import("./containers/HomePage"));

const routes = [
    {
        path: "/",
        component: <HomePage />,
        exact: true,
        name: "主页",
    },
];

export default routes;
