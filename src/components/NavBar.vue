<template>
  <div class="navbar">
    <img src="@/assets/images/white_logo_cropped.png" :class="{'invert-color': inverted}">
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    inverted: {type: Boolean, required: true}
  }
}
</script>

<style lang="sass" scoped>
img
  width: 480px
  height: 60px
  float: left

.invert-color
  filter: invert(0.9)

.navbar
  width: 100%
  position: fixed
  z-index: 2
  background-color: transparent

</style>
