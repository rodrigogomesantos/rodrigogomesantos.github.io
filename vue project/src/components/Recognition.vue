<template>
  <section id="recognition">
  <h1>{{chooseLanguage(title)}}</h1>
  <div class="rec_container">
  <div class="rec_card" v-for="(recognition, index ) in chooseLanguage(recognitions)" :key="index">
    <img :src="require('../assets/' + recognition.image)">
    <h4>{{recognition.title}}</h4>
    <a :href="recognition.projectLink" target="_blank">{{recognition.project}} <i class="fas fa-link" v-show="recognition.projectLink"></i></a><br>
    <i>{{recognition.placement}}</i>
  </div>
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
        pt: "Reconhecimentos",
        en: "Recognition",
      },
      recognitions: {
        pt: [
        {
          image: "driftUtf.jpg",
          imageAlt: "o Shi Drift Trike ao centro da imagem em uma exposição na universidade UTFPR",
          title: "2016 - UTFPR Faz Design",
          project: "Shi Drift Trike",
          projectLink: "https://www.behance.net/gallery/45138823/Shi-Drift-Trike",
          placement: "Menção Honrosa",
        },
        {
          image: "driftMon.jpg",
          imageAlt: "o Shi Drift Trike ao centro da imagem em uma exposição no Museu Oscar Nyemaier",
          title: "2016 - Prêmio Internacional de Design Objeto: Brasil",
          project: "Shi Drift Trike",
          projectLink: "https://www.behance.net/gallery/45138823/Shi-Drift-Trike",
          placement: "Bronze",
        },
        {
          image: "bomDesign.jpg",
          imageAlt: "Eu e minha equipe segurando o trofeu e recebemdo o premio em um pauco",
          title: "2019 - Prêmio Bom Design",
          project: "Retrofit torno CNC",
          projectLink: false,
          placement: "Menção Honrosa",
        },

      ],
        en: [
          {
          image: "driftUtf.jpg",
          imageAlt: "the Shi Drift Trike in the center of the image at an exhibition at UTFPR University",
          title: "2016 - UTFPR Makes Design",
          project: "Shi Drift Trike",
          projectLink: "https://www.behance.net/gallery/45138823/Shi-Drift-Trike",
          placement: "Honorable Mention",
        },
        {
          image: "driftMon.jpg",
          imageAlt: "the Shi Drift Trike in the center of the image in an exhibition at the Oscar Nyemaier Museum",
          title: "2016 - International Design Award Object: Brazil",
          project: "Shi Drift Trike",
          projectLink: "https://www.behance.net/gallery/45138823/Shi-Drift-Trike",
          placement: "Bronze",
        },
        {
          image: "bomDesign.jpg",
          imageAlt: "Me and my team holding the trophy and receiving the prize in a pauco",
          title: "2019 - Bom Design Award",
          project: "Retrofit CNC lathe",
          projectLink: false,
          placement: "Honorable Mention",
        },
        ],
        },
    };
  },

  methods: {
  },

};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.rec_container{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: flex-start;
  width: inherit;

  .rec_card{
    width: 30%;
    padding: 0.5em;
    > img{
      width: 100%;
      border-radius: 8px;
    }

    > h4{
      color: $color3;
      font-weight: 500;
      margin-bottom: 0.3em;
    }
    > a{
      color: $color1;

      > i{
        font-size: 0.8em;
      }

      &:visited,
      &:link {
        text-decoration: none;
        color: $color1;
      }
    }
    > i{
      color: $color3;
    }
  }
}

@media screen and (max-width: 660px) {

h1{
  font-size: 1.7em !important;
}
.rec_container .rec_card {
    width: 100%;
    margin-top: 3em;
}

.rec_container .rec_card:first-child{
  margin-top: 1em;
}

}

</style>