<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section id="intro">
    <div class="intro">
      <h2>
        <span class="typed-text">{{ typeValue }}</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </h2>
      <p v-html="String(chooseLanguage(text))"></p>
      <a
        href="https://www.behance.net/gallery/95331407/Juno-Radio-Finalista-do-NASA-Space-Apps-Challenge"
        target="_blank"
      >
        <div class="info-button button">
          <p><span>Saiba</span> +</p>
          <p />
          <div class="info-button-inner"></div>
        </div>
      </a>
      <img :src="require('../assets/' + image)" v-bind:alt="imageAlt" />
    </div>
  </section>
</template>

<script>
// import { setTimeout, setInterval } from 'timers';
import mixins from '../mixins';

export default {
  mixins: [mixins],
  data() {
    return {
      title: {
        pt: [
          'Desenvolvedor Front-End',
          'Designer Gráfico',
          'Designer de Produto',
          'UX & UI Designer',
          'Maker',
        ],
        en: [
          'Front-End Developer',
          'Graphic Designer',
          'Product Designer',
          'UX & UI Designer',
          'Maker',
        ],
      },
      text: {
        pt: [
          'Olá, meu nome é <b>Rodrigo Gomes</b>! Movido por desafios, estou o tempo todo envolvido em projetos multidisciplinares de produtos digitais aos físicos.',
        ],
        en: [
          'Hello, my name is <b> Rodrigo Gomes </b>! Driven by challenges, I am constantly involved in multidisciplinary projects from digital to physical products.',
        ],
      },
      image: 'juno.png',
      imageAlt: 'Radio Juno em perspectiva',

      typeValue: '',
      typeStatus: false,
      // typeArray: ["fun", "awesome", "a journey", "life"],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },

  created() {
    setTimeout(() => this.typeText(), this.newTextDelay + 200);
  },

  methods: {
    typeText() {
      const typeArray = this.chooseLanguage(this.title);

      if (this.charIndex < typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += typeArray[this.typeArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(() => this.typeText(), this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(() => this.eraseText(), this.newTextDelay);
      }
    },

    eraseText() {
      const typeArray = this.chooseLanguage(this.title);

      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1,
        );
        this.charIndex -= 1;
        setTimeout(() => this.eraseText(), this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= typeArray.length) this.typeArrayIndex = 0;
        setTimeout(() => this.typeText(), this.typingSpeed + 1000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/learnMore.scss';

.intro {
  font-size: 1em;
  padding-top: 4em;

  > p {
    max-width: 21em;
    font-size: x-large;
    line-height: 1.5em;
  }

  > h2 {
    margin: 1em 0;
  }

  span.typed-text {
    color: $color1;
  }

  span.cursor {
    display: inline-grid;
    margin-left: 0.2em;
    width: 0.65em;
    animation: cursorBlink-0b1e4f4a 1s infinite;
    height: 0.09em;
    vertical-align: -webkit-baseline-middle;
  }

  span.cursor.typing {
    animation: none;
  }

  .info-button {
    float: right;
  }

  > img {
    height: 35em;
    margin-top: -5em;
  }
}

#phrase {
  > h1 {
    text-transform: none;
  }
  > p {
    text-align: center;
    font-size: 1.3em;
    line-height: initial;
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

@media screen and (max-width: 1040px) {
  .intro {
    > img {
      height: auto;
      margin-top: 1em;
      width: 100%;
    }
    .info-button {
      margin-right: 7em;
    }
  }
}

@media screen and (max-width: 660px) {
  .intro {
    font-size: 1em;
    padding-top: 0.5em;

    > img {
      height: auto;
      margin-top: 1em;
      width: 100%;
    }

    .info-button {
      margin-right: 0;
    }
  }
}
</style>
