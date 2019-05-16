<template>
  <div class="content-div">
    <img class="headshot-image" :src="image" @mouseover="getHeadshotDesc" @mouseout="resetHeadshotDesc"/>
    <p class="title">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'HeadshotCard',
  props: {
    jsonFile: {type: String, required: true}
  },
  data: function () {
    return {
      text: this.readJson().text,
      title: this.readJson().title
    }
  },
  computed: {
    image: function () {
      return require('@/assets/' + this.readJson().image)
    }
  },
  methods: {
    readJson: function () {
      return require('@/assets/' + this.jsonFile)
    },
    getHeadshotDesc: function () {
      this.$emit('hoverOver', this.text)
    },
    resetHeadshotDesc: function () {
      this.$emit('hoverLeave', null)
    }
  }
}
</script>

<style lang="sass" scoped>
.content-div
  margin: 25px
  font-size: 0

.headshot-image
  width: 140.625px
  height: 250px
  position: relative
  top: 0
  left: 0
  font-size: 0

.title
  font-size: 25px
</style>
