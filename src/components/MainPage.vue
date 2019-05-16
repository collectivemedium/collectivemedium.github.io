<template>
  <div class="mainpage">
    <NavBar :inverted="!entityObjs[0].isVisible"/>
    <SideBar :objs="entityObjs"/>
    <div id="reel-entity" class="screen-section" v-observe-visibility="(isVisible, entry) => visibilityChanged(isVisible, entry, entityObjs[0])">
      <video autoplay muted id="main-vid" loop>
        <source src="@/assets/videos/reel_may2019_clipped.mp4" type="video/mp4">
      </video>
    </div>
    <div id="mandate-entity" class="screen-section">
      <h1 v-observe-visibility="(isVisible, entry) => visibilityChanged(isVisible, entry, entityObjs[1])">Complete Your Story</h1>
      <div class="blurb">Here at Collective Medium we aim to produce original profressional content of unmatched quality. We promise three things: satisfaction, punctuality, and profressionalism.</div>
    </div>
    <div id="team-entity" class="screen-section">
      <h1 v-observe-visibility="(isVisible, entry) => visibilityChanged(isVisible, entry, entityObjs[2])">The Team</h1>
      <div id="headshot-container">
        <HeadshotCard jsonFile="headshots/chris.json" @hoverOver="setHeadshotDesc" @hoverLeave="setHeadshotDesc"/>
        <HeadshotCard jsonFile="headshots/zack.json" @hoverOver="setHeadshotDesc" @hoverLeave="setHeadshotDesc"/>
        <HeadshotCard jsonFile="headshots/tommy.json" @hoverOver="setHeadshotDesc" @hoverLeave="setHeadshotDesc"/>
        <HeadshotCard jsonFile="headshots/noa.json" @hoverOver="setHeadshotDesc" @hoverLeave="setHeadshotDesc"/>
        <HeadshotCard jsonFile="headshots/matt.json" @hoverOver="setHeadshotDesc" @hoverLeave="setHeadshotDesc"/>
      </div>
      <div class="blurb">{{ headhShotText }}</div>
    </div>
    <div id="showcase-entity" class="screen-section">
      <h1 v-observe-visibility="(isVisible, entry) => visibilityChanged(isVisible, entry, entityObjs[3])">Discover</h1>
      <div id="showcase-container">
        <ShowcaseCard jsonFile="content/digitalks.json" modalName="digitalks-modal"/>
        <ShowcaseCard jsonFile="content/fne_mini_doc.json" modalName="fne1-modal"/>
        <ShowcaseCard jsonFile="content/fne_our_faith_life.json" modalName="fne2-modal"/>
        <ShowcaseCard jsonFile="content/artofediting.json" modalName="artofediting-modal"/>
      </div>
    </div>
    <div id="contact-entity" class="screen-section">
      <h1 v-observe-visibility="(isVisible, entry) => visibilityChanged(isVisible, entry, entityObjs[4])">Contact Us</h1>
      <div id="email" @click="copyEmail">collectivemedium.to@gmail.com</div>
    </div>
  </div>
</template>

<script>
import ShowcaseCard from './ShowcaseCard'
import HeadshotCard from './HeadshotCard'
import SideBar from './SideBar'
import NavBar from './NavBar'

export default {
  name: 'MainPage',
  components: {
    ShowcaseCard,
    HeadshotCard,
    SideBar,
    NavBar
  },
  data: function () {
    return {
      headhShotText: '',
      entityObjs: [
        {
          id: 'reel-entity',
          isVisible: true,
          scrollOptions: {
            offset: 0
          }
        },
        {
          id: 'mandate-entity',
          isVisible: false,
          scrollOptions: {
            offset: -250
          }
        },
        {
          id: 'team-entity',
          isVisible: false,
          scrollOptions: {
            offset: -60
          }
        },
        {
          id: 'showcase-entity',
          isVisible: false,
          scrollOptions: {
            offset: -60
          }
        },
        {
          id: 'contact-entity',
          isVisible: false,
          scrollOptions: {
            offset: -100
          }
        }
      ]
    }
  },
  methods: {
    copyEmail: function () {
      this.$copyText('collectivemedium.to@gmail.com').then(
        function (e) {
          alert('Email copied to clipboard!')
          console.log(e)
        },
        function (e) {
          alert('Failed to copy email to clipboard.')
          console.log(e)
        }
      )
    },
    setHeadshotDesc: function (val) {
      if (val != null) {
        this.headhShotText = val
      } else {
        this.headhShotText = 'Hover on a team member to learn more about them.'
      }
    },
    visibilityChanged: function (isVisible, entry, entityObj) {
      entityObj.isVisible = isVisible
    }
  }
}
</script>

<style lang="sass" scoped>
.blurb
  width: 55%
  margin: auto
  font-size: 25px
  text-align: justify
  text-align-last: center
  text-justify: inner-word
  line-height: 2.0em

h1
  font-size: 45px
  font-weight: normal
  margin-bottom: 75px

h2
  font-size: 35px
  font-weight: normal

#main-vid
  width: 100%

.screen-section
  height: 100%
  margin-bottom: 50%

#headshot-container
  width: 85%
  margin: auto
  display: flex
  flex-flow: row
  flex-wrap: nowrap
  justify-content: space-between
  margin-bottom: 5%

#showcase-container
  width: 85%
  margin: auto
  display: flex
  flex-flow: row wrap
  justify-content: space-between

#contact-entity
  margin-bottom: 20%

#email
  font-size: 40px

#email:hover
  cursor: pointer
</style>
