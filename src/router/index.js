import Vue from 'vue';
import Router from 'vue-router';
<<<<<<< HEAD

import ArticleCom from '@/components/ArticleCom';
import UserCom from '@/components/UserCom';
import MainSec from '@/components/MainSec';
import SideSec from '@/components/SideSec';
=======
import App from '@/App';
>>>>>>> parent of ec20904... 完成首页和文章页的结构部分，没有样式

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
<<<<<<< HEAD
        name: 'RootPath',
        components: {
            main: MainSec,
        },
    }, {
        path: '/topic/:id',
        name: 'ArticleRoute',
        components: {
            main: ArticleCom,
            side: SideSec,
        },
    }, {
        path: '/user/:name',
        name: 'UserRoute',
        components: {
            main: UserCom,
        },
    }, {
        path: '/user/:name',
        redirect: '/user:name',
=======
        name: 'rootPath',
        component: App,
>>>>>>> parent of ec20904... 完成首页和文章页的结构部分，没有样式
    }],
});
