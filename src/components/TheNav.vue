<template>
  <v-list nav>
    <v-list-item-group value="$route.name">
      <v-list-item key="首页" to="/">
        <v-list-item-icon><v-icon>mdi-home</v-icon></v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>首页</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
    <v-list-group v-for="item in items" :key="item.title">
      <template v-slot:prependIcon>
        <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
        <i class="v-icon" v-else-if="item.extIcon">
          <img
            :src="require(`@/assets/icon/${item.extIcon}.svg`)"
            height="24px"
          />
        </i>
      </template>
      <template #activator>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item-group value="$route.name">
        <v-list-item
          v-for="child in item.items"
          :key="child.title"
          :to="child.path"
          link
          dense
        >
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon v-if="child.icon"><v-icon v-text="child.icon"></v-icon></v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        icon: "mdi-view-dashboard",
        items: [{ title: "开关模块", path: "/modules/toggle/", icon: "mdi-toggle-switch" }],
        title: "模块",
      },
      {
        icon: "mdi-account-tie",
        items: [{ title: "机器人管理员管理", path: "/admin/moderate/", icon: "mdi-account-check" }],
        title: "管理",
      },
      {
        icon: "mdi-account-hard-hat",
        items: [{ title: "超管管理" ,path: "/dev/superuser/moderate/", icon: "mdi-account-check" }],
        title: "开发者设置",
        perm: "superuser",
      },
      {
        extIcon: "mediawiki",
        items: [
          { title: "默认wiki", path: "/wiki/default/", icon: "mdi-layers" },
          { title: "Interwiki", path: "/wiki/interwiki/", icon: "mdi-playlist-edit" },
        ],
        title: "MediaWiki",
      },
    ],
  }),
};
</script>
