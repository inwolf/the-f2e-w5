<script>
import { chapters } from "@/mock-data";

export default {
  name: "page",
  data() {
    return {
      cid: this.$route.params.cid,
      chapters: chapters
    };
  },
  created() {
    console.log(this.cid);
    console.log(this.chapters);
    
  },
  computed: {
    chapter() {
      return this.chapters.filter(obj => obj.no === this.cid)[0]
    }
  },
  methods: {
    alertNotImplemented() {
      alert('not implemented yet')
    }
  }
};
</script>

<template lang="pug" src="./template.pug"/>
<style lang="scss" src="./style.scss" scoped></style>