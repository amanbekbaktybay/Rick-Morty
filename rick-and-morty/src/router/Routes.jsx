import {Characters} from "../pages/Characters";
import {LogIn} from "../pages/Authorization";
import {Route, Router, Switch} from "react-router";
import {lazy} from "react";


export const routes = [
    {
        path: "/",
        component: lazy(() => {
            return import('../pages/Authorization');
        }),
    },
    {
        path:"/characters",
        component: lazy(() => {
            return import('../pages/Characters');
        }),
    }
    ];


