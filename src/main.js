import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

Vue.config.productionTip = false

axios.get(`config/conf_${process.env.NODE_ENV}.json`, {
  params: { v: new Date().getTime() }
})
.then(data =>{
  Vue.prototype.$config = data.data;
  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')
});

