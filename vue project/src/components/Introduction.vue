<template>
  <section id="intro">
    <div class="intro">
      <h2>
        <span class="typed-text">{{ typeValue }}</span>
        <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
      </h2>
      <p v-scroll-reveal="{ origin: 'left', delay: 300 }" v-html="String(chooseLanguage(text))"></p>
      <a href="https://www.behance.net/gallery/95331407/Juno-Radio-Finalista-do-NASA-Space-Apps-Challenge" target="_blank">
        <div class="info-button button">
        <p>
          <span>Saiba</span> +
        </p>
        <p />
        <div class="info-button-inner"></div>
      </div>
      </a>
       <img v-scroll-reveal="{ origin: 'right', delay: 500 }" src="../assets/juno.png" v-bind:alt="imageAlt" />
    </div>
  </section>
</template>

<script>
import { setTimeout } from "timers";
import mixins from "../mixins.js";

export default {
  mixins: [mixins],
  data() {
    return {
      title: {
        pt: [
          "Designer Gráfico",
          "Designer de Produto",
          "Maker",
          "Eletricista",
          "Encanador",
          "Pedreiro",
          "Carpinteiro",
          "Encanador",
          "Programador"
        ],
        en: ["asdasdad"]
      },
      text: {
        pt: [
          "A <b>25 anos</b> atrás, nascia em SP um cara chamado <b>Rodrigo</b>! Que hoje, vivendo em <b>Curitiba</b>, busca soluções criativas para resolver problemas."
        ],
        en: ["adasdasdada"]
      },
      image: "juno.png",
      imageAlt: "Radio Juno em perspectiva",

      typeValue: "",
      typeStatus: false,
      // typeArray: ["fun", "awesome", "a journey", "life"],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0
    };
  },

  methods: {
    typeText() {
      var typeArray = this.chooseLanguage(this.title);

      if (this.charIndex < typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += typeArray[this.typeArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },

    eraseText() {
      var typeArray = this.chooseLanguage(this.title);

      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= typeArray.length) this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    }
  },

  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  }
};
</script>

<style lang="scss">
@import "../style.scss";
@import "../SCSS/learnMore.scss";
.intro {
  font-size: 1em;
  padding-top: 8em;

  > p {
    max-width: 20em;
    font-size: x-large;
    line-height: 1.5em;
  }

  > h2 {
    margin: 1em 0;
  }

  span.typed-text {
    color:$color1;
  }

  span.cursor {
    display: inline-block;
    margin-left: 3px;
    width: 4px;
    background-color: $color1;
    animation: cursorBlink 1s infinite;
  }

  span.cursor.typing {
    animation: none;
  }

  .info-button{
    float: right;
  }

  > img{
    height: 35em;
    margin-top: -5em;
  }
}

@keyframes cursorBlink {
  49% {
    background-color: $color1;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>