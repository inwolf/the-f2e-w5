<template>
  <div id="app">
    <PageHeader/>
    <router-view/>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'

export default {
  components:{
    PageHeader
  }
}
</script>

<style src="normalize.css/normalize.css"></style>
<style lang="scss" src="@/assets/scss/all.scss"></style>
