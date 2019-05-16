<template>
  <div class="card" >
    <img :src="getImage">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'RouteCard',
  props: {
    title: {type: String, required: true},
    image: {type: String, required: true}
  },
  computed: {
    getImage: function () {
      return require('@/assets/' + this.image)
    }
  }
}
</script>

<style lang="sass" scoped>
.card
  margin-left: 5%
  margin-right: 5%
img
  width: 100%
</style>
