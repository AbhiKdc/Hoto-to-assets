import React from "react";
// import Home from "../pages/home";
import Page from "@jumbo/shared/Page";
import NotFound from "app/pages/404";
import { profileRoute } from "./Profile";
import { storeRoute } from "./Store";
import { historyRoute } from "./History";
import Login from "app/pages/Auth/Login";
import SoloPage from "app/layouts/solo-page/SoloPage";
import { hotoToAssetsRoute } from "./Hoto_to_assets";
import Dashboard from "app/pages/Dashboard";

/**
 routes which you want to make accessible to both authenticated and anonymous users
 **/
const routesForPublic = [
    {
        path: "/",
        // element: <Page component={NotFound} />
    },
    {
        path: "/dashboards",
        element: <Page component={Dashboard} layout={"vertical-default"} />,
      },
    // {
    //     path: "/login",
    //     // element: <Page component={Login} layout={"solo-page"}/>
    //     element: <Page component={Login}/>

    // },
    {
        path: "*",
        element: <Page component={NotFound} />
    },
];

/**
 routes only accessible to authenticated users
 **/
const routesForAuthenticatedOnly = [
    ...hotoToAssetsRoute
    // ...profileRoute,
    // ...storeRoute,
    // ...historyRoute,
];

/**
 routes only accessible when user is anonymous
 **/
const routesForNotAuthenticatedOnly = [];


const routes = [
    ...routesForPublic,
    ...routesForAuthenticatedOnly,
    ...routesForNotAuthenticatedOnly,
];

export { routes as default, routesForPublic, routesForNotAuthenticatedOnly, routesForAuthenticatedOnly };