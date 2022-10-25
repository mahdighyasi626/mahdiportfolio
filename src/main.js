import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/route';
// import VueAnimateOnScroll from 'vue3-animate-onscroll';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const app = createApp(App);
app.use(router)
// app.use(VueAnimateOnScroll);
app.mount('#app');
