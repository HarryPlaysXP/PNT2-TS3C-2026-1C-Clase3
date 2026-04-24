import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// agrego importacion vista en clase de de bootstrap y bootstrap icons, ademas de su css para que se apliquen los estilos a los componentes
Main.js
import 'bootstrap'
//import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).mount('#app')
