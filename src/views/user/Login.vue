<template>
  <v-container>
    <v-card class="mx-auto pa-5" max-width="400px">
      <h1 class="text-h5 text-center">登录</h1>
      <v-text-field
        label="用户名"
        v-model="username"
        prepend-icon="mdi-account"
      ></v-text-field>
      <v-text-field
        label="头像链接"
        v-model="avatarLink"
        prepend-icon="mdi-link"
      ></v-text-field>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    username: null,
    avatarLink: null,
  })
}
</script>