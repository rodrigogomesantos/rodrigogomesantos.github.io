<template>
  <scrollactive :offset="30" class="nav scrollactive" active-class="active">
    <ul class="nav-list button">
      <li>
        <a href="#intro"><i class="fas fa-arrow-circle-up"></i></a>
      </li>
      <li v-for="(nav, index) in chooseLanguage(nav)" :key="index">
        <a class="scrollactive-item" v-bind:href="nav.link">
          <span></span>
          <p>{{nav.title}}</p>
        </a>
      </li>
      <li class="portifolio">
        <a href="https://www.behance.net/rodrigomes" target="_black">{{chooseLanguage(portifolio)}}</a>
      </li>
    </ul>
  </scrollactive>
</template>

<script>
import mixins from "../mixins.js";

export default {
  name: "Nav",
  mixins: [mixins],
  data() {
    return {
      portifolio: {
        pt: "Portifólio",
        en: "Portifolio",
      },
      nav: {
        pt: [
          {
            title: "Reconhecimentos",
            link: "#recognition ",
          },
          {
            title: "Experiências",
            link: "#experience",
          },
          {
            title: "Habilidades",
            link: "#skills",
          },
          {
            title: "Educação formal",
            link: "#education",
          },
        ],

        en: [
          {
            title: "Recognition",
            link: "#recognition ",
          },
          {
            title: "Skills",
            link: "#skills",
          },
          {
            title: "Education",
            link: "#experience",
          },
          {
            title: "Educação formal",
            link: "#education",
          },
        ],
      },
    };
  },
  methods: {
    //   onItemChanged(event, currentItem, lastActiveItem) {
    // // here you have access to everything you need regarding that event
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.nav {
  display: block;
  float: left;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: auto;
  position: fixed;
  padding: 1em;

  .nav-list {
    display: flex;
    flex-direction: column;
    margin: auto;
    list-style: none;
    padding: 0;

    .portifolio {

      writing-mode: vertical-lr;
      text-orientation: mixed;
      display: block;
      margin-left: -0.7em;
      width: 1rem;

      >a {
      display: block;
      color: $color4;
      border: 0.1em solid $color4;
      border-radius: 4em;
      text-align: center;
      text-transform: capitalize;
      font-size: 1em;
      height: fit-content;
      padding: 0.8rem 0.4rem;
      width: 1rem;
      }

    &:hover{
      color: $color1 !important;
      border-color: $color1  !important; 
    }

    }

    > li {
      height: 1.5em;
      color: $color2;
      // border:solid 1px;
      line-height: 1em;
      padding: 0.2em;
      text-transform: uppercase;

      &:hover .portifolio{
      color: $color1;
      border-color: $color1;
      }

      &:first-child {
        margin-left: -0.2em;
      }

      > a {
        > p {
          display: none;
          text-decoration: none;
          transition: all $delay ease-in-out;
        }

        &:visited,
        &:link {
          text-decoration: none;
          color: $color4;
        }
      }

      &:hover a {
        display: inline;
      }

      $dotWidth: 0.6em;
      span {
        content: "";
        width: $dotWidth;
        height: $dotWidth;
        // border: solid 0.08em $color2;
        background-color: #cecece;
        border-radius: 50%;
        display: block;
        float: left;
        margin-right: 0.6em;
        margin-top: 0.1em;
        transition: all $delay ease-in-out;
      }

      .active p {
        display: inherit;
        color: $color1;
      }

      .active span {
        display: flex;
        background-color: $color1;
      }

      &:hover span {
        background-color: $color1;
      }
      &:hover span,
      &:hover,
      &:hover p {
        display: flex;
        border-width: 0.08em;
        color: $color1;
        border-color: $color1;
      }
    }
  }
}

.nav-button .nav-button-inner {
  box-sizing: border-box;
  margin: auto;
  width: 0.5em;
  height: 0.5em;
  border-style: solid;
  border-color: $color2;
  border-width: 0.25em;
  border-radius: inherit;
  // animation: rotate 20s linear 500ms infinite normal both;
  transition: all $delay ease-in-out;
  margin-left: calc(#{($buttonHeight / 2 - 0.25em)});
}

.nav-button c {
  font-size: 1.5em;
  height: 100%;
  margin: 0 auto;
  line-height: 1em;
  font-style: oblique;
  font-family: Arial;
  transform: rotate(0) scale(1);
  margin-left: 1em;
  transition: all $delay ease-in-out;
}

.nav-button:hover {
  width: auto;
  transition: all $delay ease-in-out;
}

.nav-button:hover .info-button-inner {
  width: calc(#{$buttonHeight - 0.3});
  height: calc(#{$buttonHeight - 0.3});
  border-width: 0.12em;
}

.nav-button:hover a,
.nav-current {
  color: $color1;
  right: 11%;
  display: block;
}

.nav-button:active {
  background-color: $color1;
  transition: none;
}

.nav-button:active .nav-button-inner {
  border-color: white;
  transition: none;
}

.nav-button:active a {
  color: white;
  transition: none;
}

@media screen and (max-width: 1220px) {
  .nav {
    display: block;
    height: auto;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    position: fixed;
    justify-content: center;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(11px);
    padding: 0;
    padding-top: 0.5em;

    .nav-list {
      display: flex;
      flex-direction: row;
      margin: auto;
      list-style: none;
      padding: 0;

      .portifolio {

      writing-mode:horizontal-tb;
      text-orientation: mixed;
      display: block;
      margin-left: -0.7em;
      width: 1rem;

      >a {
      display: block;
      color: $color4;
      border: 0.1em solid $color4;
      border-radius: 4em;
      text-align: center;
      text-transform: capitalize;
      font-size: 1em;
      height: fit-content;
      padding: 0.8rem 0.4rem;
      width: 1rem;
      }
      }


      > li {
        font-size: 1.5em;

        &:first-child {
          margin-left: -0.3em;
          margin-bottom: 0.3em;
        }
        &.active span {
          display: block;
          margin: 0 auto;
        }
        &.active p {
          margin-top: 0.2em;
          display: block;
        }
      }
    }

    > span a {
      flex-direction: column;
      justify-content: center;
    }
  }
  .nav{
  display: none;
}
}


</style>