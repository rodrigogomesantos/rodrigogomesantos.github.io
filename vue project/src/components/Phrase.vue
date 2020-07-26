<template>
<section v-scroll-reveal="{ reset: true}"  id="phrase">
<h1 v-scroll-reveal><i>{{chooseLanguage(phrase)}}</i></h1>
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
        pt: '"Frase de impacto filosófica"',
        en: 'adasd',
        },
        text:{
        pt: 'Sou movido por desafios, sempre estou envolvido em projetos multidisciplinares que ajudam a alimentar a minha maior paixão, aprender! Fazendo com que consiga resolver problemas de forma ágil e criativa',
        en: 'ddasdasd',
        },
    };
  },

  methods: {
  }

};
</script>

<style lang="scss">
@import "../style.scss";

</style>