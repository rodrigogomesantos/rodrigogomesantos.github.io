<template>
<section id="experience">
<h1>{{chooseLanguage(titles)}}</h1>
  <ul class="timeline">
    <li v-for="(experience, index) in chooseLanguage(experiences) " :key="index">
      <div class="initial" v-bind:class="chooseSide(index)">
        <h5 class="time">{{experience.date}}</h5>
        <h3>{{experience.title}}</h3>
        <p class="desc">
          {{experience.subtitle}}
          <br />
          <br />
          <span v-html="experience.text"></span>
        </p>
      </div>
    </li>
  </ul>
</section>
</template>

<script>
import  mixins from "../mixins.js";

export default {
  name: "Experiences",
  mixins: [mixins],
  data() {
    return {
      titles:{
        pt: 'Experiências',
        en: 'Expiriences',
        },
      experiences: {
        pt: [
          {
            date: "nov. de 2018 - agora",
            title: "Designer de Produto",
            subtitle: "Orakolo Técnologia - Curitiba, PR",
            text:
              "Realização de beta testes, pesquisar tendências em tecnologia até o desenvolvimento de novos produtos. Sejam eles usando sheetmetal, injeção plástica... Partindo da ideia, desenvolvimento de mockups, protótipos ou réplicas."
          },
          {
            date: "mar. de 2018 - out. de 2018",
            title: "Estágio em Design",
            subtitle: "Schattdecor - São José dos Pinhais, PR",
            text:
              "Uma super experiência em uma empresa multinacional que é líder global em seu seguimento, me fez entender um pouco mais sobre tendências, tendo como desafio projetar para o futuro, desenvolvendo mobiliário e peças gráficas."
          },
          {
            date: "mai. de 2017 - jan. de 2018",
            title: "Gestor de Estrutura",
            subtitle:
              "Comissão Organizadora do N Design 2017, CONDe - Curitiba, PR",
            text:
              'Trabalhar na organização  de um evento que dura uma semana para 1200 pessoas, foi sem duvidas, incrível. <a target="_blank" href="https://docs.google.com/spreadsheets/d/1ZNvER9v1dpSasDKHDf1PZulWuUBmgB6XqkDqN31oD3I/edit#gid=1048042397">Saiba mais<a/> '
          },
          {
            date: "out. de 2016 - agora",
            title: "Freelancer",
            subtitle: "Rapazes de Aluguel e outros - Curitiba, PR",
            text:
              "Fazer freela sempre foi um jeito de juntar um dinheiro extra, mas como conseguencia ganhei um apredizado encrivel, desde a parte do busines até a parte técnica.  Trabalhando como “Marido de Aluguel”, automação de um estande de tiro, construção de site, designer gráfico."
          },
          {
            date: "mar. de 2015 - out. de 2016",
            title: "Estágio em Design",
            subtitle: "Departamento de Extensão da UTFPR - Curitiba, PR",
            text:
              "Tive a oportunidade de trabalhar com uma ex-empresária e atual professora, me ensinou muito sobre design! Trabalhando em peças gráficas, produtos, construção de sites e edição de vídeo."
          },
          
        ],

        en: [
          {
            date: "Nov 2018 - now",
            title: "Product Designer",
            subtitle: "Orakolo Técnica - Curitiba, PR",
            text:
              "Conducting beta tests, researching trends in technology until the development of new products. Whether using sheetmetal, plastic injection ... Based on the idea, development of mockups, prototypes or replicas."
          },
          {
            date: "Mar. 2018 - Oct. 2018",
            title: "Design Internship",
            subtitle: "Schattdecor - São José dos Pinhais, PR",
            text:
              "A super experience in a multinational company that is a global leader in its segment, made me understand a little more about trends, having the challenge to design for the future, developing furniture and graphic pieces."
          },
          {
            date: "May 2017 - Jan 2018",
            title: "Structure Manager",
            subtitle:
              "N Design 2017 Organizing Committee, CONDe - Curitiba, PR",
            text:
              'Working on organizing an event that lasts a week for 1200 people, was without a doubt, incredible. <a target="_blank" href="https://docs.google.com/spreadsheets/d/1ZNvER9v1dpSasDKHDf1PZulWuUBmgB6XqkDqN31oD3I/edit#gid=1048042397"> Learn more <a/> '
          },
          {
            date: "Oct. 2016 - now",
            title: "Freelancer",
            subtitle: "Rental Guys and Others - Curitiba, PR",
            text:
              "Making freelance jobs has always been a way to save some extra money, but as a result I gained a profound learning experience, from the busines part to the technical part. Working as a Husband for Rent, automation of a shooting range, website construction, graphic designer."
          },
          {
            date: "Mar. 2015 - Oct. 2016",
            title: "Design Internship",
            subtitle: "UTFPR Extension Department - Curitiba, PR",
            text:
              "I had the opportunity to work with a former businesswoman and current teacher, she taught me a lot about design! Working on graphic pieces, products, website building and video editing."
          }
        ]
      }
    };
  },

  methods: {
    chooseSide(number) {
      var resultado = number % 2 == 0 ? "direction-r" : "direction-l";
      return resultado;
    },
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss//timeline.scss";
</style>