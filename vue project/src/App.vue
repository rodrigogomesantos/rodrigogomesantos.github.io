<template>
  <div>
<Nav />
    <div class="container">
      <Introduction />
      <Experience />
      <Skills />
      <Education />
    </div>
  </div>
</template>

<script>
import Education from "./components/Education.vue";
import Experience from "./components/Experience.vue";
import Skills from "./components/Skills";
import Nav from "./components/Nav";
import Introduction from "./components/Introduction"


export default {
  name: "app",
  components: {
    Nav,
    Education,
    Experience,
    Skills,
    Introduction,
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
