
<template>
  <div>
    <Nav />
    <div class="container">
      <Introduction />
      <Phrase />
      <Recognition />
      <Experience />
      <Skills />
      <Education />
    </div>
    <Contact />
  </div>
</template>

<script>
import Education from "./components/Education.vue";
import Recognition from "./components/Recognition";
import Experience from "./components/Experience.vue";
import Skills from "./components/Skills";
import Nav from "./components/Nav";
import Introduction from "./components/Introduction";
import Phrase from "./components/Phrase";
import Contact from "./components/Contact";

// import "font-awesome/css/font-awesome.css"

export default {
  name: "app",
  components: {
    Nav,
    Education,
    Experience,
    Skills,
    Introduction,
    Phrase,
    Contact,
    Recognition,
  },
  data() {
    return {};
  },
};
</script>

<style>

</style>
