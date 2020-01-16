<template>
  <div>
    <h2>课程列表</h2>
    <el-table :data="data.data" border stripe>
      <el-table-column
        v-for="(column, key) in columns"
        :prop="key"
        :key="key"
        :label="column.label"
        :width="column.width"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class CourseList extends Vue {
  data = {}
  columns = {
    _id: { label: 'ID' },
    CourseName: { label: '课程名称' },
    CourseCover: { label: '课程封面' }
  }

  created() {
    this.fetch()
  }

  async fetch() {
    // const res = await this['$http'].get('courses')
    const res = await this.$http.get('courses')
    this.data = res.data
  }
}
</script>
