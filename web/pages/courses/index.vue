<template>
  <v-row class="pa-3">
    <v-col lg="3" v-for="course in courses" :key="course._id">
      <v-card max-width="350" class="mx-auto">
        <v-list-item>
          <v-list-item-avatar color="grey">
            <img src="https://randomuser.me/api/portraits/men/28.jpg" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline">{{ course.CourseName }}</v-list-item-title>
            <v-list-item-subtitle>xiaozhenzhen</v-list-item-subtitle>
            <v-list-item-subtitle>{{ course.updatedAt }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-img :src="course.CourseCover" />
        <v-card-text>参观地球上十个正在经历今天最大变化的地方。</v-card-text>
        <v-card-actions>
          <v-btn text color="light-blue accent-4" :to="`/courses/${course._id}`">查看详情</v-btn>
          <v-btn text color="light-blue accent-4">加入书签</v-btn>
          <v-spacer />
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon color="grey lighten-1">mdi-heart</v-icon>
              </v-btn>
            </template>
            <span>特别关注</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon color="grey lighten-1">mdi-share-variant</v-icon>
              </v-btn>
            </template>
            <span>分享</span>
          </v-tooltip>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.$get('/courses');
    return { courses: data };
  },
};
</script>
