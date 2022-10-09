<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <section id="contact"></section>
</template>

<script>
import mixins from '../mixins';

export default {
  mixins: [mixins],
  data() {
    return {
      title: {
        pt: 'Designer Gráfico',
        en: 'asdasdad',
      },
      icons: [
        {
          image: 'Início',
          link: '#intro',
        },
      ],
    };
  },

  methods: {
  },

};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
</style>
