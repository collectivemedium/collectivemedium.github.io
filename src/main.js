// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VModal from 'vue-js-modal'
import VueClipboard from 'vue-clipboard2'
import VueScrollTo from 'vue-scrollto'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.config.productionTip = false
Vue.use(VModal)
Vue.use(VueClipboard)
Vue.use(VueScrollTo)
Vue.use(VueObserveVisibility)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
