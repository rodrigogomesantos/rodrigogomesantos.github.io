<template>
<section id="phrase">
<h1><i>{{chooseLanguage(phrase)}}</i></h1>
<p>{{chooseLanguage(text)}}</p>
</section>
</template>

<script>
import  mixins from "../mixins.js";

export default {
  name: "Phrase",
  mixins: [mixins],
  data() {
    return {
      phrase:{
        pt: '"Nem tudo o que enxergamos é obvio!"',
        en: '"Not everything we see is obvious!"',
        },
        text:{
        pt: 'Trabalhar em projetos diversificados , ao lado de pessoas totalmente diferentes na personalidade ou área de atuação, me fez enchergar o mundo com outras perspectivas, me auxiliando a cada dia mais na resolução de problemas independente do seu gênero.',
        en: 'Working on diverse projects, alongside totally different people in their personality or area of activity, made me fill the world with other perspectives, helping me more and more in solving problems regardless of their type.',
        },
    };
  },

  methods: {
  }

};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

#phrase{
text-transform: inherit;
}

</style>