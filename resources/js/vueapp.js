   
   
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
                    title: "Hi there I am Will",
                    text: "I’ve been working with – and within – technology companies for the past decade, helping to prove how products impact users. I’ve recently taken some time out to improve my software development skills, and in September, completed an intensive three-month full-stack web development bootcamp.",
                    img_src: "https://www.wft.wtf/assets/will_sepia-85d0b5deb5e8b8162185c320537684f451a0c874f24d1aa09a3467bc0f4184ee.png"
            }
            },
            {
                path: '/second-page',
                name: 'page',
                component: Page,
                props: { 
                    title: "This is the Second Page",
                    author : {
                        name : "Will Thompson",
                        role : "Software Developer",
                        code : "WFT"
                    }
                }
            },    
        ],
    })
    const app = new Vue({
        el: '#app',
        components: { App },
        router,
    });