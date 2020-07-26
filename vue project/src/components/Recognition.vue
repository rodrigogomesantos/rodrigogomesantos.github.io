<template>
  <section id="recognition">
  <h1>{{chooseLanguage(title)}}</h1>
  </section>
</template>

<script>
import mixins from "../mixins.js";

export default {
  mixins: [mixins],
  data() {
    return {
      title: {
        pt: "Reconhecimentos",
        en: "Recognition",
      },
      icons: [
        {
          image: "Início",
          link: "#intro",
        },
      ],
    };
  },

  methods: {
  },

};
</script>

<style lang="scss">
@import "../style.scss";
</style>