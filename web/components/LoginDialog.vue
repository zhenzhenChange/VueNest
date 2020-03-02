<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">Login ......</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field clearable label="username" v-model="user.username"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                clearable
                type="password"
                label="password"
                v-model="user.password"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" @click="dialog = false">
          <v-icon right dark>mdi-close</v-icon>取消
        </v-btn>
        <v-btn color="blue darken-1" :loading="loading" :disabled="loading" @click="login">
          <v-icon right dark>mdi-login</v-icon>登录
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'LoginDialog',
  data: () => ({
    dialog: false,
    loading: false,
    user: { username: '', password: '' },
  }),
  methods: {
    async login() {
      this.loading = true;
      await this.$auth.loginWith('local', { data: this.user });
      this.loading = false;
      this.dialog = false;
    },
  },
};
</script>
