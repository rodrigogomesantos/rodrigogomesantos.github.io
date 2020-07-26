export default {
  methods: {
    chooseLanguage(array) {
      return (
        array[navigator.language.substring(0, 2)] ||
        array.en
      )
  }
  }
};

