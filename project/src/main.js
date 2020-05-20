import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Image as VanImage,NavBar,Icon,Search,Swipe,SwipeItem,Lazyload,Grid,
GridItem,Divider,Tab,Tabs,TreeSelect,Collapse,CollapseItem,Rate,Empty,Button,
Form,Field,AddressList,AddressEdit,Area} from 'vant';
import 'vant/lib/index.css'
Vue.config.productionTip = false
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(Search)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Divider)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(TreeSelect)
Vue.use(VanImage)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Rate)
Vue.use(Empty)
Vue.use(Button) 
Vue.use(Form)
Vue.use(Field)
Vue.use(AddressList)
Vue.use(AddressEdit)
Vue.use(Area)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
