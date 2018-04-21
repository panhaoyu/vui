import VuiButton from './vButton'
import VuiRow from './vRow'
import VuiCol from './vCol'

export default {
  install: function (Vue, options) {
    Vue.component('v-button', VuiButton);
    Vue.component('v-row', VuiRow);
    Vue.component('v-col', VuiCol);
  }
}
