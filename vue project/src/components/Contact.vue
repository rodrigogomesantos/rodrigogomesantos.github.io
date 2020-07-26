<template>
  <section id="contact" class="contact">
    <p>{{chooseLanguage(title)}}</p>
    <div>
<i class="fab fa-github"></i>
    </div>
  </section>
</template>

<script>
import mixins from "../mixins.js";

export default {
  mixins: [mixins],
  data() {
    return {
      title: {
        pt: "Obrigado pela visita e bora bater um papo!",
        en: "Thanks for visiting and let's chat!",
      },
      icons: [
        {
          class: "Início",
          link: "#intro",
        },
      ],
    };
  },

  methods: {},
};
</script>

<style lang="scss">
@import "../style.scss";

.contact {
  background-image: url("../assets/map.png");
  background-repeat: no-repeat;
  padding: 0;
  text-align: center;
}
</style>