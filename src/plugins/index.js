// vant组件库集中管理
import { Swipe, SwipeItem, Button, Lazyload } from 'vant';
// 放入数组中
let plugins = [Swipe, SwipeItem, Button, Lazyload]

export default function getVant(app) {
    plugins.forEach(v => {
        return app.use(v)
    })
}