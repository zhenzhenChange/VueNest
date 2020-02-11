<template>
  <el-container>
    <el-aside class="w-200">
      <el-menu mode="vertical" class="vh-100" :default-active="$route.path" router>
        <el-submenu
          v-for="(submenu, submenuIndex) in Submenu.submenus"
          :index="`${submenuIndex + 1}`"
          :key="`submenu-${submenuIndex}`"
        >
          <template slot="title">{{ submenu.title }}</template>
          <el-menu-item
            v-for="(menu, menuIndex) in submenu.menus"
            :key="`submenu-${submenuIndex}-${menuIndex}`"
            :index="menu.path"
          >
            {{ menu.title }}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        后台管理
      </el-header>
      <el-main>
        <routerView :key="$route.path" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Main extends Vue {
  Submenu = {
    submenus: [
      {
        title: '内容管理',
        menus: [
          { title: '首页', path: '/' },
          { title: '课程管理', path: '/courses/list' },
          { title: '课时管理', path: '/episodes/list' },
        ],
      },
      {
        title: '运营管理',
        menus: [{ title: '用户管理', path: '/users/list' }],
      },
    ],
  };
}
</script>
