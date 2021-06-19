<template>
  <basic-page :nav="[{ text: '首页', href: '/' }]">
    <template #heading>{{ hello }}</template>

    <v-row>
      <v-col xs="12" md="4">
        <v-card>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5">
                小可运行状态
              </v-list-item-title>
              <v-list-item-subtitle>实时运行状态 </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <div class="text-h4 green--text">
              <v-icon color="green" x-large class="mr-3"
                >mdi-check-circle</v-icon
              >运行正常
            </div>
          </v-card-text>

          <v-list-item dense>
            <v-list-item-icon>
              <v-icon>mdi-chip</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle
              >CPU 使用率：22.2%
              <v-progress-circular
                :size="20"
                color="primary"
                :value="22.2"
                class="ml-3"
              ></v-progress-circular>
            </v-list-item-subtitle>
          </v-list-item>

          <v-list-item dense two-line>
            <v-list-item-icon>
              <v-icon>mdi-memory</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle
              >内存使用率：3818M，57.2%（物理）
              <v-progress-circular
                :size="20"
                color="primary"
                :value="57.2"
                class="ml-3"
              ></v-progress-circular
              ><br />2047M，11.0%（SWAP）
              <v-progress-circular
                :size="20"
                color="primary"
                :value="11.0"
                class="ml-3"
              ></v-progress-circular>
            </v-list-item-subtitle>
          </v-list-item>

          <v-list-item dense>
            <v-list-item-icon>
              <v-icon>mdi-harddisk</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle
              >磁盘容量：57G / 78G
              <v-progress-circular
                :size="20"
                color="primary"
                :value="(57 / 78) * 100"
                class="ml-3"
              ></v-progress-circular>
            </v-list-item-subtitle>
          </v-list-item>

          <v-list-item dense>
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle>加入的群聊：116</v-list-item-subtitle>
          </v-list-item>

          <v-list-item dense>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle>添加的好友：120</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </basic-page>
</template>

<script>
import BasicPage from "@/components/BasicPage.vue";

export default {
  name: "Home",
  components: {
    BasicPage,
  },
  computed: {
    hello() {
      let greeting;
      const name = this.$store.state.user.name;
      switch (new Date().getHours()) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
          greeting = `${name ? name + "，" : ""}夜深了.`;
          break;

        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
          greeting = `${
            name ? name + "，" : ""
          }早上好！一日之计在于晨。`;
          break;

        case 11:
        case 12:
        case 13:
          greeting = `${name ? name + "，" : ""}中午好！太阳当空照。`;
          break;

        case 14:
        case 16:
          greeting = `${
            name ? name + "，" : ""
          }下午是宅在家的最好时间！`;
          break;

        case 15:
          greeting = `${
            name ? name + "，" : ""
          }三点几咧！做……做撚啊做！饮茶先啊！`;
          break;

        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
          greeting = `${name ? name + "，" : ""}晚上好，又在折腾什么呢？`;
          break;

        default:
          greeting = "欢迎" + name ? `，${name}` : "" + "！";
          break;
      }
      return greeting;
    },
  },
};
</script>
