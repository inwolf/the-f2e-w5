<script>
import { book, chapters } from "@/mock-data";
export default {
  name: "home",
  data() {
    return {
      book: book,
      chapters: chapters
    };
  },
  filters: {
    upperCase(val) {
      return typeof val === "string" ? val.toUpperCase() : val;
    },
    slashedArray(val) {
      return val.join('/')
    }
  }
};
</script>

<template lang="pug" src="./template.pug"/>
<style lang="scss" src="./style.scss" scoped></style>
