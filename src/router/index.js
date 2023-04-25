import Vue from 'vue'
import Router from 'vue-router'
import Catalog from '../views/index'
import Cart from '../views/cart'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'catalog',
			component: Catalog
		},
		{
			path: '/cart',
			name: 'cart',
			component: Cart
		}
	]
})
