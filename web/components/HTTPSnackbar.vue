<template>
  <v-snackbar top absolute color="success" v-model="snackbar">
    登录成功
    <v-btn dark text @click="snackbar = false">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  data: () => ({ snackbar: false }),
};
</script>

<style></style>
