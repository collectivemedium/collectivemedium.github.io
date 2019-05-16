<template>
  <div class=interface>
    <div class="entry">
      <h2>Name</h2>
      <input type="text"/>
    </div>
    <div class="entry">
      <h2>Email</h2>
      <input type="text"/>
    </div>
    <div class="entry" id="email_content">
      <h2></h2>
      <textarea/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Email'
}
</script>

<style lang="sass" scoped>
.entry
  display: flex
  justify-content: space-between
  margin-bottom: 2%

.interface
  width: 50%
  margin: auto

h2
  margin: 0%
  width: 15%

input
  width: 100%
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 20px
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

#email_content
  width: 100%
  textarea
    width: 100%
    height: 200px
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 20px
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
</style>
