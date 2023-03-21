import { lazy } from "react";

const authRoutes = [
    { path: "auth/login", component: lazy(() => import('./Signin')) },
    { path: "auth/signup", component: lazy(() => import('./Signup')) },
    { path: "auth/register-business", component: lazy(() => import('./RegisterBusiness'))},
    { path: "auth/forgot-password", component: lazy(() => import('./ForgotPassword')) },
    { path: "auth/reset-password", component: lazy(() => import('./ResetPassword')) },
    { path: "auth/lock", component: lazy(() => import('./Lock')) },
    { path: "auth/500", component: lazy(() => import('./ServerError')) },
    { path: "auth/send-verify", component: lazy(() => import('./EmailSent')) },
    { path: "auth/complete-registration", component: lazy(() => import('./verifyAcc')) },
    { path: "auth/404", component: lazy(() => import('./NotFound')) },
];

export default authRoutes;