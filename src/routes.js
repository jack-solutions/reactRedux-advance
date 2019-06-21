import React from 'react';

import Loadable from 'react-loadable'

const Home= Loadable({
    loader:()=> import('./Home/home'),
    loading:()=> <div>Loading...</div>
})

const ReduxData= Loadable({
    loader:()=> import('./DataThroughRedux/index'),
    loading:()=> <div>Loading...</div>
})

const PropsData= Loadable({
    loader:()=> import('./DataThroughProps/index'),
    loading:()=> <div>Loading...</div>
})


let routes = [
    { path: '/home', exact: true, name: 'Home', component: Home},
    { path: '/data-through-redux', exact: true, name: 'ReduxData', component: ReduxData},
    { path: '/data-through-props', exact: true, name: 'PropsData', component: PropsData}

];

export default routes;