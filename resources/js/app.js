import './bootstrap';

import { createApp } from 'vue';
import App from './components/App.vue';
import Products from './components/Products.vue';
import Estacao from './components/Estacao.vue';


const app = createApp();

app.component('app', App);
app.component('products', Products);
app.component('estacao', Estacao);

app.mount('#app');
