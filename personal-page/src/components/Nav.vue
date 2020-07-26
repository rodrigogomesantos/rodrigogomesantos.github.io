<template>
<nav class="nav">
     <ul class="nav-list button">
       <li v-for="(nav, index) in chooseLanguage(nav)" :key="index"><a  v-bind:href="nav.link"> {{nav.title}}</a></li>       
    </ul>
</nav>
</template>

<script>
import  mixins from "../mixins.js";

export default {
  name: "Nav",
  mixins: [mixins],
    data(){
        return{
            nav: {
        pt: [
           {
            title: "Inicio",
            link: "/#",
          },
          {
            title: "Reconhecimentos",
            link: "/#recognition ",
          },
            {
            title: "Habilidades",
            link: "/#skills",
          },
            {
            title: "Experiências",
            link: "/#experience",
          },
            {
            title: "Educação formal",
            link: "/#education",
          },
       
        ],

        en: [
          {
            title: "Recognition",
            link: "/#recognition ",
          },
            {
            title: "Skills",
            link: "/#skills",
          },
            {
            title: "Education",
            link: "/#experience",
          },
            {
            title: "Educação formal",
            link: "/#education",
          },
        ]
      }
        }

    }
};
</script>

<style lang="scss">
@import "../style.scss";

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

    > li {
      height: 1.5em;
      color: $color2;
      // border:solid 1px;
      line-height: 1em;
      padding: 0.2em;
      text-transform: uppercase;

      > a {
        display: none;
        text-decoration: none;

        &:visited, &:link{
        text-decoration: none;
        color: $color1;

        }
      }

      &:hover a {
        display: inline;
      }

      $dotWidth: 0.6em;
      
      &::before {
       content: "";
         width: $dotWidth;
        height: $dotWidth;
        // border: solid 0.08em $color2;
        background-color: #CECECE;
        border-radius: 50%;
        display: block;
        float: left;
        margin-right: 0.6em;
        margin-top: 0.1em;
        transition: all $delay ease-in-out;
      }
      &:hover::before  , .nav-current{
        background-color: $color1;
        
      }
      &:hover::before,
      &:hover {
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

.nav-button:hover a, .nav-current{
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

</style>