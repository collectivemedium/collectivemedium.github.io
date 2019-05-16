<template>
  <div class="content-div" @mouseout="isHover = false" @mouseover="isHover = true">
    <div style="font-size: 0"><img class="preview-image" :src="image"/></div>
    <div @click="showModal" class="title-visible" v-show="isHover"><p class="title">{{ title }}</p></div>
    <modal :name="modalName" :classes="'modal-box'" :width="modalWidth" :height="modalWidth * 0.75" @closed="hideModal" style="background-color: rgba(0, 0, 0, 0.9)">
      <iframe :src="yt_vid" type="text/html" class="modal-vid" frameborder="0" allow="autoplay"></iframe>
      <div class="modal-text">{{ text }}</div>
    </modal>
  </div>
</template>

<script>
export default {
  name: 'ShowcaseCard',
  data: function () {
    return {
      isHover: false,
      modalWidth: 1200
    }
  },
  props: {
    jsonFile: {type: String, required: true},
    modalName: {type: String, required: true}
  },
  computed: {
    image: function () {
      return require('@/assets/' + this.readJson().image)
    },
    yt_vid: function () {
      var ytId = this.readJson().yt_id
      var url = `https://www.youtube.com/embed/${ytId}?autoplay=1&controls=0&loop=1&playlist=${ytId}`
      return url
    },
    title: function () {
      return this.readJson().title
    },
    text: function () {
      return this.readJson().text
    }
  },
  methods: {
    showModal: function () {
      this.$modal.show(this.modalName)
    },
    hideModal: function () {
      this.isHover = false
    },
    readJson: function () {
      return require('@/assets/' + this.jsonFile)
    }
  }
}
</script>

<style lang="sass" scoped>
.content-div
  flex: 1 0 40%
  position: relative
  margin: 15px

.content-div:hover
  cursor: pointer

.preview-image
  width: 100%
  position: relative
  top: 0
  left: 0
  font-size: 0

.title-hidden
  display: none

.title-visible
  display: flex
  justify-content: space-around
  position: absolute
  width: 100%
  height: 100%
  top: 0
  background-color: rgba(0, 0, 0, 0.5)
  z-index: 999

.title
  width: 75%
  font-size: 40px
  color: #ffffff
  margin: auto

.modal-box
  background-color: transparent
  margin: 0
  margin: auto

.modal-vid
  width: 100%
  height: 75%
  margin-bottom: 5%

.modal-text
  font-size: 25px
  width: 100%
  height: 20%
  margin: auto
  color: #ffffff
</style>
