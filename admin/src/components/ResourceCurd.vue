<template>
  <avue-crud
    v-show="option"
    :data="data.data"
    :option="option"
    @row-del="remove"
    @row-save="create"
    @row-update="update"
    @refresh-change="fetch"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component({})
export default class ResourceCurd extends Vue {
  @Prop(String) resource!: string;
  data = {};
  option = {};

  created() {
    this.fetch();
    this.fetchOption();
  }

  async fetch() {
    const res = await this.$http.get(`${this.resource}`);
    this.data = res.data;
  }
  async fetchOption() {
    const res = await this.$http.get(`${this.resource}/option`);
    this.option = res.data;
  }

  async create(row, done, loading) {
    await this.$http.post(`${this.resource}`, row);
    this.$message.success('创建成功！');
    this.fetch();
    done();
  }

  async update(row, index, done, loading) {
    delete row.$index;
    await this.$http.put(`${this.resource}/${row._id}`, row);
    this.$message.success('修改成功！');
    this.fetch();
    done();
  }

  async remove(row) {
    try {
      await this.$confirm('确定要删除该条数据吗？');
    } catch (e) {
      return;
    }
    await this.$http.delete(`${this.resource}/${row._id}`);
    this.$message.success('删除成功！');
    this.fetch();
  }
}
</script>
