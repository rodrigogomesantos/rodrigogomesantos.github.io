<template>
  <section id="testimonial">
    <img :src="require('../assets/' + image)" v-bind:alt="imageAlt" />
    <div>
      <h1>{{chooseLanguage(phrase)}}</h1>
      <p>{{chooseLanguage(author)}}</p>
    </div>
  </section>
</template>

<script>
import mixins from "../mixins.js";

export default {
  name: "Testimonial",
  mixins: [mixins],
  data() {
    return {
      phrase: {
        pt: "“Ele é uma pessoa muito talentosa, orgulho da família ”",
        en: '"He is a very talented person,the family\'s pride"',
      },
      author: {
        pt: "Luciene Rufino | mãe do Rodrigo",
        en: "Luciene Rufino | Rodrigo's mother",
      },
      image: "mother.png",
      imageAlt: "Radio Juno em perspectiva",
    };
  },

  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

#testimonial {
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;

 
  img {
    height: 90%;
    display: block;
    margin-right: 1.2em;
  }

  h1 {
    text-align: left;
    margin: 0;
    font-weight: initial;
    text-transform: initial;
  }

  p {
    margin-top: 1em;
  }
}
</style>