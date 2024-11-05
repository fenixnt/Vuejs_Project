import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/About.vue';
import HomePage from '../components/Home.vue'
import BlogPage from '../components/Blog.vue'
import FormPage from '../components/Form.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/blog', component: BlogPage },
    { path: '/about', component: About },
    { path: '/formPage', component: FormPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
