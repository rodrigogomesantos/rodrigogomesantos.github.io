<template>
  <section id="skills">
    <h1>{{chooseLanguage(titles)}}</h1>
    <div class="skills">
      <ul class="skills-buttons">
        <li
          @mouseover="populateHighlightedItens(skill)"
          @mouseleave="highlightedItens = []"
          v-for="(skill, index) in chooseLanguage(skills)"
          :key="index"
        >{{index}}</li>
      </ul>
      <ul class="skills-itens">
        <li 
          v-bind:class="{'skills-itens-highlight': validateHighlight(skillsIten)}"
          v-for="(skillsIten, index) in skillsItens"
          :key="index"
        >{{skillsIten}}</li>
      </ul>
    </div>
  </section>
</template>

<script>
import mixins from "../mixins";

export default {
  mixins: [mixins],
  data() {
    return {
      titles: {
        pt: "Habilidades",
        en: "Skills"
      },
      skills: {
        pt: {
          Web: ["CSS/SCSS", "HTML", "JavaScript"],
          Maker: ["Impressora 3D", "CAD/CAM", "Marcenaria", "Eltronica"],
          "Design de Produto": [
            "Fusion 360",
            "Autocad",
            "Injeção Plastica",
            "Sheet metal",
            "Keyshot"
          ],
        },

        en: {
          Web: ["CSS / SCSS", "HTML", "JavaScript"],
           "Product design": [
             "Fusion 360",
             "Autocad",
             "Plastic injection",
             "Sheet metal",
             "Keyshot"
           ],
           Maker: ["3D Printer", "CAD / CAM", "Joinery", "Eltronica"]}
      },
      skillsItens: [],
      highlightedItens: []
    };
  },
  created() {
    let skillCategory = this.chooseLanguage(this.skills);
    Object.keys(skillCategory).forEach(key => {
      skillCategory[key].forEach(skill => {
        this.skillsItens.push(skill);
        this.shuffle(this.skillsItens);
      });
    });
  },

  methods: {
    populateHighlightedItens(skillCategory) {
      this.highlightedItens = this.highlightedItens.concat(skillCategory);
    },

    validateHighlight(skillsIten) {
      console.log(!!this.highlightedItens.find(skill => skill == skillsIten));
      return !!this.highlightedItens.find(skill => skill == skillsIten);
    },

    chooseSide(number) {
      var resultado = number % 2 == 0 ? "direction-r" : "direction-l";
      return resultado;
    },

    shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.skills {
  width: 100%;
  display: flex;
  flex-direction: column;

  .skills-buttons,
  .skills-itens {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    cursor: default;

    > li {
      margin: 0.2em 0.5em 0.2em 0.5em;
      padding: 0.1em 0.8em 0.1em 0.8em;
      text-align: center;
      transition: all $delay ease-in-out;
    }
  }

  .skills-buttons {
    > li {
      border: solid 0.1em;
      border-radius: $border-radius;
      &:hover {
        color: $color1;
        border-color: $color1;
      }
    }
  }

  .skills-itens {
    color: $color2;
  }

  .skills-itens-highlight {
    color: $color1;
    transition: all $delay ease-in-out;
  }
}
</style>