<template>
  <div>
    <Nav />
    <div class="container">
      <Introduction />
      <Phrase />
      <Recognition />
      <Experience />
      <Skills />
      <Education />
      <Testimonial />
    </div>
    <Contact />
  </div>
</template>

<script>
import Education from './components/Education.vue';
import Recognition from './components/Recognition.vue';
import Experience from './components/Experience.vue';
import Skills from './components/Skills.vue';
import Nav from './components/Nav.vue';
import Introduction from './components/Introduction.vue';
import Phrase from './components/Phrase.vue';
import Contact from './components/Contact.vue';
import Testimonial from './components/Testimonial.vue';

// import "font-awesome/css/font-awesome.css"

const ROOT_PATH = 'https://rodrigogomesantos.github.io';

export default {
  name: 'app',
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Nav,
    Education,
    Experience,
    Skills,
    Introduction,
    Phrase,
    Contact,
    Recognition,
    Testimonial,
  },
  data() {
    return {
      // eslint-disable-next-line global-require
      logo: ROOT_PATH + require('./assets/perfil.jpg'),
    };
  },
  metaInfo() {
    return {
      meta: [
        { title: 'Rodrigo Gomes' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Rodrigo Gomes' },
        { name: 'twitter:description', content: 'Um pouco mais da minha trajetória, habilidades e experiências' },
        // image must be an absolute path
        { name: 'twitter:image', content: this.logo },
        // Facebook OpenGraph
        { property: 'og:title', content: 'Rodrigo Gomes' },
        { property: 'og:site_name', content: 'Rodrigo Gomes' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: this.logo },
        { property: 'og:description', content: 'Um pouco mais da minha trajetória, habilidades e experiências' },
      ],
    };
  },

};
</script>

<style>

</style>
