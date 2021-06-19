import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "首页",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/wiki/",
    name: "MediaWiki",
    component: () =>
      import(/* webpackChunkName: "wiki" */ "../views/wiki/Index.vue"),
    children: [
      {
        path: "default/",
        name: "默认wiki",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/wiki/Default.vue"),
      },
    ],
  },
  {
    path: "/modules/toggle/",
    name: "开关模块",
    component: () =>
      import(
        /* webpackChunkName: "moduleToggle" */ "../views/modules/Toggle.vue"
      ),
  },
  {
    path: "/admin/moderate/",
    name: "机器人管理员管理",
    component: () =>
      import(
        /* webpackChunkName: "addGroupAdminuser" */ "../views/admin/Moderate.vue"
      ),
  },
  {
    path: "/dev/superuser/moderate/",
    name: "超管管理",
    component: () =>
      import(
        /* webpackChunkName: "DevSuperuserModerate" */ "../views/dev/superuser/Moderate.vue"
      ),
  },
  {
    path: "/user/",
    name: "用户",
    component: () =>
      import(/* webpackChunkName: "UserProfile" */ "../views/user/Index.vue"),
  },
  {
    path: "/user/login/",
    name: "登录",
    component: () =>
      import(/* webpackChunkName: "UserLogin" */ "../views/user/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
