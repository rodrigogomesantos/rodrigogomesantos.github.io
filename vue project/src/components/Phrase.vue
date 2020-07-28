<template>
<section>
<h1><i>{{chooseLanguage(phrase)}}</i></h1>
<p>{{chooseLanguage(text)}}</p>
</section>
</template>

<script>
import  mixins from "../mixins.js";

export default {
  name: "Phrase",
  mixins: [mixins],
  data() {
    return {
      phrase:{
        pt: '"Frase pra chamar sua ateção"',
        en: 'Philosophical impact phrase',
        },
        text:{
        pt: 'Sou movido por desafios, sempre estou envolvido em projetos multidisciplinares que ajudam a alimentar a minha maior paixão, aprender! Fazendo com que consiga resolver problemas de forma ágil e criativa',
        en: 'I am driven by challenges, I am always involved in multidisciplinary projects that help to fuel my greatest passion, to learn! Making it possible to solve problems in an agile and creative way',
        },
    };
  },

  methods: {
  }

};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
</style>