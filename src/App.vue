<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" clipped app>
      <the-nav />
    </v-navigation-drawer>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <router-link to="/" class="text-decoration-none black--text">
        <v-toolbar-title>
          <v-avatar size="25px" tile class="mx-2">
            <img src="./assets/ts-logo-icon-lakeblue.svg" height="30px" />
          </v-avatar>
          小可 · 面板
        </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <v-btn text max-width="40px" v-if="$store.state.currentGroup.configured">
        <v-avatar class="mr-3"><v-img :src="$store.state.currentGroup.avatarLink"></v-img></v-avatar>
          {{ $store.state.currentGroup.name }}
      </v-btn>

      <v-btn icon v-if="$store.state.user.logged"><v-avatar><v-img :src="$store.state.user.avatarLink"></v-img></v-avatar></v-btn>
      <v-btn plain v-else to="/user/login/">登录</v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-scroll-x-reverse-transition>
          <router-view />
        </v-scroll-x-reverse-transition>
      </v-container>
    </v-main>

    <the-footer />
  </v-app>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import TheNav from "./components/TheNav";
import TheFooter from "./components/TheFooter";

export default defineComponent({
  data: () => {
    return {
      drawer: null,
    };
  },
  components: {
    TheNav,
    TheFooter,
  },
});
</script>

<style lang="scss"></style>
