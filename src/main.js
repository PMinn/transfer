import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Vue from 'vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// import bootstrap from 'bootstrap'

// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

// configureCompat({
//     MODE: 3,
//     FEATURE_ID_A: true,
//     FEATURE_ID_B: true
// })

createApp(App).use(router).mount('#app')