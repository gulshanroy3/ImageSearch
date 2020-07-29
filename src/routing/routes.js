import { lazy } from 'react';
import FullLayout from "../Layout/FullLayout"
const Home = lazy(() => import("../pages/Home"))
export default [
    {
        path: '/home',
        exact: true,
        component: Home,
        layout: FullLayout
    }
];
