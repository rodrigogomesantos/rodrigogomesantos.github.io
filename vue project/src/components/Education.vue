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
import  mixins from "../mixins.js";

export default {
  mixins: [mixins],
  data() {
    return {
      titles:{
        pt: 'Educação formal',
        en: 'Formal Education',
        },
      educations: {
        pt: [
          {
            date: "mar. de 2015 - out. de 2016",
            title: "Bacharelado",
            subtitle:
              "Design, Universidade Tecnológica Federal do Paraná - Curitiba",
            text:
              "Foi fora da sala de aula que realmente eu entendi a lógica do desgin. Participando de várias organizações como; Centro Acadêmico, Semana Acadêmica, SAE Baja e co-criação do Abrigo Haker Space."
          },

          {
            date: "mar. de 2018 - out. de 2018",
            title: "Técnico",
            subtitle: "Web Design, Etec Guaracy Silveira, São Paulo, BR",
            text:
              "Foi onde eu descobri a minha paixão por design, aprendendo um pouco de programação e o que hoje conheço como UX/UI."
          }
        ],

        en: [
          {
            date: "mar. 2015 - Oct. of 2016 ",
            title: "Bachelor",
            subtitle:
              "Design, Federal Technological University of Paraná - Curitiba",
            text:
              "It was outside the classroom that I really understood the logic of design. Participating in various organizations like; Academic Center, Academic Week, SAE Baja and co-creation of Abrigo Haker Space. "
          },

          {
            date: "mar. 2018 - Oct. 2018 ",
            title: "Technician",
            subtitle: "Web Design, Etec Guaracy Silveira, São Paulo, BR",
            text:
              "This is where I discovered my passion for design, learning a little about programming and what I now know as UX / UI."
          }
        ]
      }
    };
  },

  methods: {
    chooseSide(number) {
      var resultado = number % 2 == 0 ? "direction-r" : "direction-l";
      return resultado;
    }
  }
};
</script>

<style lang="scss">
@import "../style.scss";
@import "./timeline.scss";
</style>