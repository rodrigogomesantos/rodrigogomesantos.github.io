<template>
  <section id="contact" class="contact">
    <p v-html="chooseLanguage(title)"></p>
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
        pt: "<b>Obrigado pela visita.</b><br><span>Quer conhecer mais projetos meus?<br>Bora bater um papo!</span>",
        en: "<b>Thanks for coming.</b><br><span>Do you wanna know more about my projects? Let's chat.</span>",
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
  margin-top: -10em;
  padding-top: 13em;
  
  p span{
    margin: 4em 0 2em 0;
    /* padding: 6em; */
    display: block;
    font-size: 1rem;
    
  }

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
      font-size: 1.6em;
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