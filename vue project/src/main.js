import Vue from 'vue'
import App from './App.vue'
import VueScrollReveal from 'vue-scroll-reveal';
import VueScrollactive from 'vue-scrollactive';
import Meta from 'vue-meta';

Vue.use(Meta);
Vue.use(VueScrollactive);

Vue.config.productionTip = false
import "@/assets/scss/main.scss";
import store from './store'
import './registerServiceWorker'


Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 1200,
  scale: 1.1,
  distance: '100px',
  mobile: false,
});

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

