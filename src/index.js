import './styles/index.css'
import './styles/index.less'
import Vue from 'vue'
import Comp from './comp.vue'

new Vue({
  el: '#app',
  render: (h) => h(Comp)
})

const str = 'Hello World'
console.log(str)
