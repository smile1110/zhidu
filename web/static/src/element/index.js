import {Dialog,Menu,Dropdown,DropdownMenu,DropdownItem,MenuItem,Tabs,TabPane,Pagination} from 'element-ui';
const element = {
	install:function(Vue){
		Vue.use(Menu)
		Vue.use(DropdownMenu)
		Vue.use(Dropdown)
		Vue.use(DropdownItem)
		Vue.use(MenuItem)
		Vue.use(Tabs)
		Vue.use(TabPane)
		Vue.use(Dialog)
		Vue.use(Pagination)
	}
}
export default element;