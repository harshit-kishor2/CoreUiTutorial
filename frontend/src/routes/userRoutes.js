import React from 'react';
const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'));
const Profile = React.lazy(() => import('../views/pages/register/Register'));
const PageNotFound = React.lazy(() => import('../views/pages/page404/Page404'));
const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/profile', name: 'Profile', component: Profile},
    { path: '/change-password', name: 'Profile', component: Profile },
    { path: '/404', name: 'PageNotFound', component: PageNotFound},
];

export default routes;
