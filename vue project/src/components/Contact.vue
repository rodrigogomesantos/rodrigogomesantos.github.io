<template>
  <section id="contact" class="contact">
    <p>{{chooseLanguage(title)}}</p>
    <div class="social">
      <a
        v-for="(icon, index) in icons"
        :key="index"
        :class="icon.class"
        :href="icon.link"
        target="-blank"
      ></a>
    </div>
  </section>
</template>

<script>
import mixins from "../mixins.js";

export default {
  name: "FontAwesome",
  mixins: [mixins],
  data() {
    return {
      title: {
        pt: "Obrigado pela visita e bora bater um papo!",
        en: "Thanks for visiting and let's chat!",
      },
      icons: [
        {
          class: "fab fa-behance",
          link: "https://www.behance.net/rodrigomes",
        },
        {
          class: "fab fa-instagram",
          link: "https://www.instagram.com/obvio.design/",
        },
        {
          class: "far fa-envelope",
          link: "mailto:rodrigogomes51@gmail.com",
        },
        {
          class: "fab fa-whatsapp",
          link:
            "https://api.whatsapp.com/send?phone=41988756100&text=Estava%20dando%20uma%20olhada%20no%20seu%20site...",
        },
        {
          class: "fab fa-github",
          link: "https://github.com/rodrigogomesantos",
        },
        {
          class: "fab fa-linkedin-in",
          link: "https://www.linkedin.com/in/rodrigomesantos/",
        },
      ],
    };
  },

  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

$fa-font-path: "~@fortawesome/fontawesome-free-webfonts/webfonts";
@import "~@fortawesome/fontawesome-free-webfonts/scss/fontawesome.scss";
@import "~@fortawesome/fontawesome-free-webfonts/scss/fa-solid.scss";
@import "~@fortawesome/fontawesome-free-webfonts/scss/fa-regular.scss";
@import "~@fortawesome/fontawesome-free-webfonts/scss/fa-brands.scss";

.contact {
  background-image: url("../assets/map.png");
  background-repeat: no-repeat;
  padding: 0;
  text-align: center;
  min-height: 30vh;
  margin-top: -7em;
  padding-top: 7em;

  .social {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    flex-wrap: wrap;

    > p {
      margin: 0auto;
      font-weight: 500;
    }

    > a {
      top: 1em;
      padding: 0.3em;
      font-size: 1.5em;
      transition: all $delay ease-in-out;

      &:visited,
      &:link {
        text-decoration: none;
        color: $color4;
      }

      &:hover {
        color: $color1;
      }
    }
  }
}
</style>