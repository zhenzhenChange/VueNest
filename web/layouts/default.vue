<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense rounded>
        <v-list-item :to="item.path" v-for="item in actionItems" :key="item.path" link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1">关注我的</v-subheader>
        <v-list>
          <v-list-item v-for="(item, index) in avatarItems" :key="index" link>
            <v-list-item-avatar>
              <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" />
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text" />
          </v-list-item>
        </v-list>
        <v-card height="300" class="overflow-hidden">
          <v-navigation-drawer
            dark
            absolute
            mini-variant
            color="primary"
            expand-on-hover
            v-model="userDrawer"
            src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
          >
            <v-list dense nav class="py-0">
              <v-list-item two-line class="px-0" v-if="$store.state.auth.user">
                <v-list-item-avatar>
                  <img src="https://randomuser.me/api/portraits/men/81.jpg" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ $store.state.auth.user.username }}</v-list-item-title>
                  <v-list-item-subtitle>个性签名</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider v-else></v-divider>
              <v-list-item @click="isShowLogin" v-else>
                <v-list-item-icon>
                  <v-icon>mdi-login</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>登录</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <LoginDialog ref="LoginDialog" />
          </v-navigation-drawer>
        </v-card>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app clipped-left color="#039BE5" dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-icon class="mx-4">mdi-atlassian</v-icon>
      <v-toolbar-title>
        <span class="title">zhenzhenChange</span>
      </v-toolbar-title>
      <v-spacer />
      <v-row align="center" style="max-width: 500px">
        <v-text-field
          loading
          clearable
          autofocus
          single-line
          class="mr-1"
          color="white"
          hide-details
          append-icon="search"
          placeholder="Search ......"
        />
      </v-row>
    </v-app-bar>
    <v-content>
      <nuxt-child />
    </v-content>
  </v-app>
</template>

<script>
import LoginDialog from '../components/LoginDialog';
export default {
  name: 'DefaultLayout',
  props: { source: String },
  components: { LoginDialog },
  data: () => ({
    drawer: null,
    userDrawer: null,
    actionItems: [
      { text: '首页', path: '/', icon: 'home' },
      { text: '热门课程', path: '/courses', icon: 'trending_up' },
      { text: '订阅关注', path: '/comments', icon: 'subscriptions' },
      { text: '历史记录', icon: 'history' },
      { text: '播放列表', icon: 'featured_play_list' },
      { text: '稍后观看', icon: 'watch_later' },
    ],
    avatarItems: [
      { picture: 28, text: 'zhenzhen' },
      { picture: 38, text: 'zhenzhen' },
      { picture: 48, text: 'zhenzhen' },
    ],
    userItems: [
      { title: '收藏关注', icon: 'mdi-plus-circle-outline' },
      { title: '个人中心', icon: 'mdi-profile' },
      { title: '登录', icon: 'mdi-login' },
    ],
  }),
  created() {
    this.$vuetify.theme.dark = true;
  },
  methods: {
    isShowLogin() {
      this.$refs.LoginDialog.dialog = true;
    },
  },
};
</script>
