<template>
  <div class="pa-3">
    <h1>{{ course.CourseName }}</h1>
    <v-select :items="items" v-model="currentIndex" label="课时"></v-select>
    <video width="100%" controls :src="episode.EpisodeFile"></video>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const { id } = params;
    const course = await $axios.$get(`/courses/${id}`, {
      params: {
        query: {
          populate: 'CourseEpisodes',
        },
      },
    });
    return { id, course };
  },
  data: () => ({ currentIndex: 0 }),
  computed: {
    items() {
      return this.course.CourseEpisodes.map((v, i) => ({ text: v.EpisodeName, value: i }));
    },
    episode() {
      return this.course.CourseEpisodes[this.currentIndex];
    },
  },
};
</script>

<style></style>
