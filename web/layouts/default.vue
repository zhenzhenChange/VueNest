<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense rounded>
        <v-list-item :to="item.path" v-for="item in actionItem" :key="item.path" link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1">关注我的</v-subheader>
        <v-list>
          <v-list-item v-for="(item, index) in avatarItem" :key="index" link>
            <v-list-item-avatar>
              <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" />
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text" />
          </v-list-item>
        </v-list>
        <v-list-item class="mt-4" link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-plus-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">收藏文章</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">个人中心</v-list-item-title>
        </v-list-item>
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
export default {
  props: { source: String },
  data: () => ({
    drawer: null,
    actionItem: [
      { text: '首页', path: '/', icon: 'home' },
      { text: '热门课程', path: '/courses', icon: 'trending_up' },
      { text: '订阅关注', path: '/comments', icon: 'subscriptions' },
      { text: '历史记录', icon: 'history' },
      { text: '播放列表', icon: 'featured_play_list' },
      { text: '稍后观看', icon: 'watch_later' },
    ],
    avatarItem: [
      { picture: 28, text: 'zhenzhen' },
      { picture: 38, text: 'zhenzhen' },
      { picture: 48, text: 'zhenzhen' },
      { picture: 58, text: 'zhenzhen' },
      { picture: 78, text: 'zhenzhen' },
    ],
  }),
  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>
