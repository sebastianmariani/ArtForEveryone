import home from './views/home'
import browse from './views/browse'
import basket from './views/basket'
import about from './views/about'
import painting from './views/painting'
import showroom from './views/showroom'

export const routes = [
    { path:'/', name:'home', component: home},
    { path:'/browse', name:'browse', component: browse},
    { path:'/basket', name:'basket', component: basket},
    { path:'/about', name:'about', component: about},
    { path:'/painting', name:'painting', component: painting},
    { path:'/showroom', name:'showroom', component: showroom},
    { path: '*', name: 'home', component: home}
]