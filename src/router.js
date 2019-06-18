import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/complianceRate',
            name: 'ComplianceRate',
            component: () => import('./views/ComplianceRate.vue')
        },
        {
            path: '/guageRate',//仪表盘
            name: 'GuageRate',
            component: () => import('./views/GaugeRate.vue')
        },
        {
            path: '/buttonBrackets',//两边带有括号的按钮
            name: 'ButtonBrackets',
            component: () => import('./views/ButtonBrackets.vue')
        },
        {
            path: '/treeCom',//树组件
            name: 'TreeCom',
            component: () => import('./views/TreeCom.vue')
        },
        {
            path: '/lineChart',//折线图
            name: 'LineChart',
            component: () => import('./views/LineChart.vue')
        },
        {
            path: '/uploadImageView',
            name: 'UploadImageView',
            component: () => import('./views/UploadImageView.vue')
        }
    ]
})
