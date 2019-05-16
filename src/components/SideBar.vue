<template>
  <div class="sidebar">
    <div v-for="obj in objs" :key="obj.id">
      <span :class="{'dot-filled': obj.isVisible, 'dot-hollow': !obj.isVisible}" @click="scrollTo(obj)" ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    objs: {type: Array, required: true}
  },
  methods: {
    scrollTo: function (obj) {
      // console.log(obj)
      var idTag = '#' + obj.id
      var options = Object.assign({}, obj.scrollOptions, {easing: 'ease-in'})
      this.$scrollTo(idTag, 500, options)
    }
  }
}
</script>

<style lang="sass" scoped>
.sidebar
  position: fixed
  top: 45%
  right: 0
  display: flex
  flex-flow: column
  z-index: 1

.dot-hollow
  height: 15px
  width: 15px
  background-color: transparent
  border-style: solid
  border-color: rgb(50, 50, 50)
  border-radius: 50%
  border-width: thin
  display: inline-block
  margin-right: 5px
  margin-bottom: 25px

.dot-filled
  height: 15px
  width: 15px
  background-color: rgb(50, 50, 50)
  border-style: solid
  border-color: rgb(50, 50, 50)
  border-radius: 50%
  border-width: thin
  display: inline-block
  margin-right: 5px
  margin-bottom: 25px

span:hover
  cursor: pointer
</style>
