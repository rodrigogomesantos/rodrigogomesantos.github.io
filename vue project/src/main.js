import Vue from 'vue'
import App from './App.vue'
import VueScrollReveal from 'vue-scroll-reveal';
import VueScrollactive from 'vue-scrollactive';
import Meta from 'vue-meta';

Vue.use(Meta);
Vue.use(VueScrollactive);

Vue.config.productionTip = false
import "@/assets/scss/main.scss";


Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 1200,
  scale: 1.1,
  distance: '100px',
  mobile: false,
});

new Vue({
  render: h => h(App),
}).$mount('#app')


let ROOT_PATH = 'https://rodrigogomesantos.github.io'
export default {
  data() {
    return {
      logo: ROOT_PATH + require('./assets/perfil.png')
    }
  },
  metaInfo() {
    return {
      meta: [
          // Twitter Card
          {name: 'twitter:card', content: 'summary'},
          {name: 'twitter:title', content: 'Rodrigo Gomes'},
          {name: 'twitter:description', content: 'Um pouco mais da minha trajetória, habilidades e experiências'},
          // image must be an absolute path
          {name: 'twitter:image', content: this.logo},
          // Facebook OpenGraph
          {property: 'og:title', content: 'Rodrigo Gomes'},
          {property: 'og:site_name', content: 'Rodrigo Gomes'},
          {property: 'og:type', content: 'website'},
          {property: 'og:image', content:  this.logo},
          {property: 'og:description', content: 'Um pouco mais da minha trajetória, habilidades e experiências'}
      ]
    }
  }
}