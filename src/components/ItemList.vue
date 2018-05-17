<template>
  <b-container>
    <h1>Fields Configured</h1>
    <b-alert :show="!list.length" variant="warning">You havn't setup any fields yet.</b-alert>
    <b-list-group>
      <b-list-group-item  v-for="item in list" :key="item.name">
        {{item.name}}({{item.type}})
      </b-list-group-item>
    </b-list-group>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  name: "ItemList",
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(['list'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
