import {Characters} from "../pages/Characters";
import {LogIn} from "../pages/Authorization";
import {Route, Router, Switch} from "react-router";


export const routes = [
    {
        path: "/",
        component:LogIn
    },
    {
        path:"/characters",
        component:Characters
    }
    ];


