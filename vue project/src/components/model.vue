<template>
  <section id="contact"></section>
</template>

<script>
import mixins from "../mixins.js";

export default {
  mixins: [mixins],
  data() {
    return {
      title: {
        pt: "Designer Gráfico",
        en: "asdasdad",
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