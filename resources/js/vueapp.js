

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './components/App'
import Welcome from './components/Welcome'
import Page from './components/Page'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'welcome',
            component: Welcome,
            props: {
                title: "Hello there, my name is Will",
                text: "I’ve been working with – and within – technology companies for the past decade, helping to prove how products impact users. I’ve recently taken some time out to improve my software development skills, and in September, completed an intensive three-month full-stack web development bootcamp.",
                img_src: "https://www.wft.wtf/assets/will_sepia-85d0b5deb5e8b8162185c320537684f451a0c874f24d1aa09a3467bc0f4184ee.png"
            }
        },
        {
            path: '/More-info',
            name: 'page',
            component: Page,
            props: {
                title: "Some Projects",
                project: [
                    {
                        name: "Toggl.Box",
                        github: "https://github.com/willfthompson/toggl-box",
                        img: "https://res.cloudinary.com/dx9ybadbm/image/upload/v1615201630/toggl_box_rain_sm_abuzjk.gif",
                        desc: "Toggl.Box is a real-world implementation of the Toggl Track tool"
                    },
                    {
                        name: "Analogue World Clock",
                        github: "https://github.com/willfthompson/analog_world_clock",
                        img: "https://res.cloudinary.com/dx9ybadbm/image/upload/v1605521694/awc2_afaqb1.png",
                        desc: "An experiment to see if you can clearly show multiple timezones on a single clock"

                    },
                    {
                        name: "WheelBorrow",
                        github: "https://github.com/alexander101010/wheelborrow",
                        img: "https://res.cloudinary.com/dx9ybadbm/image/upload/v1601289372/Screenshot_2020-09-28_at_12.35.57_rgkubk.png",
                        desc: "Connect with your neighbours to borrow tools you need, never buy a tool again"

                    },
                    {
                        name: "Boomzy",
                        github: "https://github.com/Marielle-de-Jong/boomzy",
                        img: "https://res.cloudinary.com/dx9ybadbm/image/upload/v1600245352/Screenshot_2020-09-16_at_10.33.49_cotsbc.png",
                        desc: "Rails project to connect skilled retirees with eager young learners"

                    }
                ]
            }
        },
    ],
})
const app = new Vue({
    el: '#app',
    components: { App },
    router,
});