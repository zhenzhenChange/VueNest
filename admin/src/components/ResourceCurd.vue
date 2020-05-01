<template>
  <avue-crud
    :page="page"
    :data="data.data"
    :option="option"
    @on-load="changePage"
    @row-del="remove"
    @row-save="create"
    @row-update="update"
    @sort-change="onSort"
    @search-change="onSearch"
    @refresh-change="fetch"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component({})
export default class ResourceCurd extends Vue {
  @Prop(String) resource!: string;

  data: any = {};
  page: any = { total: 0 };
  query: any = {};
  option: any = {};

  created() {
    this.fetch();
    this.fetchOption();
  }

  async fetch() {
    const params = { query: this.query };
    const { data } = await this.$http.get(`${this.resource}`, { params });
    this.data = data;
    this.page.total = data.total;
  }
  async fetchOption() {
    const { data } = await this.$http.get(`${this.resource}/option`);
    this.option = data;
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

  async changePage({ pageSize, currentPage }) {
    this.query.page = currentPage;
    this.query.limit = pageSize;
    this.fetch();
  }

  async onSort({ prop, order }) {
    if (!order) {
      this.query.sort = null;
    } else {
      this.query.sort = { [prop]: order === 'ascending' ? 1 : 0 };
    }
    this.fetch();
  }

  async onSearch(where, done) {
    for (const key in where) {
      where[key] = { $regex: where[key] };
    }
    this.query.where = where;
    this.fetch();
    done();
  }
}
</script>
