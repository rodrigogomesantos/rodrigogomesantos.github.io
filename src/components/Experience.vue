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
        en: 'Experiences',
        },
      experiences: {
        pt: [
          {
            date: "jun. de 2021 - agora",
            title: "Designer Industrial",
            subtitle: "Zu Design - Curitiba, PR",
            text:
              "Pesquisa de novas tecnologias, desenvolvimento de equipamento industriais e prototipação de novos produtos"
          },
          {
            date: "nov. de 2018 - agora",
            title: "Designer de Produto",
            subtitle: "Orakolo Técnologia - Curitiba, PR",
            text:
              "Realização de Testes Beta, pesquisa de tendências em tecnologia, UX/UI, front-end e desenvolvimento de novos produtos - sejam eles em sheetmetal, injeção plástica, dentre outros materiais, partindo de ideias, desenvolvimento de mockups, protótipos ou réplicas."
          },
          {
            date: "mar. de 2018 - out. de 2018",
            title: "Estágio em Design",
            subtitle: "Schattdecor - São José dos Pinhais, PR",
            text:
              "Experiência multinacional líder global no próprio seguimento. Aprendizado sobre processos de tendências, tendo como desafio projetar para o futuro, desenvolvendo mobiliário e peças gráficas."
          },
          {
            date: "mai. de 2017 - jan. de 2018",
            title: "Gestor de Estrutura",
            subtitle:
              "Comissão Organizadora do N Design 2017, CONDe - Curitiba, PR",
            text:
              'Trabalhar na organização de um evento que dura uma semana para 1200 pessoas, foi sem dúvidas, uma experiência de muito aprendizado, Atuei no fechamento de contratos, busca de fornecedores, planejamento e organização de toda a estrutura do evento. <a target="_blank" href="https://docs.google.com/spreadsheets/d/1ZNvER9v1dpSasDKHDf1PZulWuUBmgB6XqkDqN31oD3I/edit#gid=1048042397">Saiba mais<a/> '
          },
          {
            date: "out. de 2016 - jun. de 2021",
            title: "Freelancer",
            subtitle: "Rapazes de Aluguel e outros - Curitiba, PR",
            text:
              "Fazer freelas sempre foi um jeito de juntar uma graninha extra, seja pra investir ou ajudar nas despesas. Essas experiências me proporcionaram aprendizados incríveis, da parte de negócios à parte técnica. Nunca limitado as ferramentas, desenvolvi projetos de automação, construção civil, sites, passando pela parte de UX/UI, front-end, desenvolvimento de produto, design gráfico entre outros"
          },
          {
            date: "mar. de 2015 - out. de 2016",
            title: "Estágio em Design",
            subtitle: "Departamento de Extensão da UTFPR - Curitiba, PR",
            text:
              "Tive a oportunidade de trabalhar com uma ex-empresária e atual professora, que me ensinou muito sobre design. Com ela, pude trabalhar em peças gráficas, produtos, desenvolvimento front-end e edição de vídeo."
          },
          
        ],

        en: [
                {
            date: "Jun. de 2021 - agora",
            title: "Industrial Designer",
            subtitle: "Zu Design - Curitiba, PR",
            text:
              "Research of new technologies, development of industrial equipment and prototyping of new products."
          },
          {
            date: "Nov 2018 - Nov. 2022",
            title: "Product Designer",
            subtitle: "Orakolo Técnica - Curitiba, PR",
            text:
              "Conducting beta tests, UX/UI, front-end, researching trends in technology until the development of new products. Whether using sheetmetal, plastic injection ... Based on the idea, development of mockups, prototypes or replicas."
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
            date: "Oct. 2016 - Jun. de 2021",
            title: "Freelancer",
            subtitle: "Rental Guys and Others - Curitiba, PR",
            text:
              "Making freelance jobs has always been a way to save some extra money, but as a result I gained a profound learning experience, from the busines part to the technical part. Working as a Husband for Rent, automation of a shooting range, front-end development, graphic designer and others."
          },
          {
            date: "Mar. 2015 - Oct. 2016",
            title: "Design Internship",
            subtitle: "UTFPR Extension Department - Curitiba, PR",
            text:
              "I had the opportunity to work with a former businesswoman and current teacher, she taught me a lot about design! Working on graphic pieces, products, front-end development and video editing."
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