<!-- eslint-disable vue/multi-word-component-names -->

<template>
<section id="education">
<h1>{{chooseLanguage(titles)}}</h1>
  <ul class="timeline">
    <li v-for="(education, index) in chooseLanguage(educations) " :key="index">
      <div class="initial" v-bind:class="chooseSide(index)">
        <h5 class="time">{{education.date}}</h5>
        <h3>{{education.title}}</h3>
        <p class="desc">
          <span>{{education.subtitle}}</span>
          <br />
          <br />
          {{education.text}}
        </p>
      </div>
    </li>
  </ul>
</section>
</template>

<script>
import mixins from '../mixins';

export default {
  mixins: [mixins],
  data() {
    return {
      titles: {
        pt: 'Educação formal',
        en: 'Formal Education',
      },
      educations: {
        pt: [
          {
            date: 'mar. de 2014 - out. de 2019',
            title: 'Bacharelado',
            subtitle:
              'Design, Universidade Tecnológica Federal do Paraná, Curitiba, BR',
            text:
              'Entendi a lógica do design, de fato, fora da sala de aula. Participando de várias organizações como o centro acadêmico, semana acadêmica, SAE Baja e co-criação do Abrigo Hackerspace.',
          },

          {
            date: 'jan. de 2011 - jun. de 2012',
            title: 'Técnico',
            subtitle: 'Web Design, Etec Guaracy Silveira, São Paulo, BR',
            text:
              'Foi onde eu descobri a minha paixão por design, aprendendo um pouco de programação e o que hoje conheço como UX/UI.',
          },
        ],

        en: [
          {
            date: 'mar. de 2014 - oct. de 2019',
            title: 'Bachelor',
            subtitle:
              'Design, Federal Technological University of Paraná, Curitiba, BR',
            text:
              'It was outside the classroom that I really understood the logic of design. Participating in various organizations like; Academic Center, Academic Week, SAE Baja and co-creation of Abrigo Hackerspace. ',
          },

          {
            date: 'jan. de 2011 - jun. de 2012',
            title: 'Technician',
            subtitle: 'Web Design, Etec Guaracy Silveira, São Paulo, BR',
            text:
              'This is where I discovered my passion for design, learning a little about programming and what I now know as UX/UI.',
          },
        ],
      },
    };
  },

  methods: {
    chooseSide(number) {
      const resultado = number % 2 === 0 ? 'direction-r' : 'direction-l';
      return resultado;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/timeline.scss";
</style>
