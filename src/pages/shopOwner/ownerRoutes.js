import { lazy } from "react";

const ownerRoutes = [
    { path: "/shop-owner/dashboard", component: lazy(() => import('./OwnerDashboard'))},
    { path: "/shop-owner/staff", component: lazy(() => import('./staff'))},
    { path: "/shop-owner/invite-staff", component: lazy(() => import('./inviteStaff'))},
    {path: "/shop-owner/services", component: lazy(() => import('./service'))},
    { path: "/shop-owner/add-service", component: lazy(() => import('./addService'))},
    { path: "/shop-owner/edit-service/:id", component: lazy(() => import('./editService'))},
    { path: "/shop-owner/waitlist", component: lazy(() => import('./waitlist'))}
];

export default ownerRoutes;