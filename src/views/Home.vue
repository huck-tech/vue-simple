<template>
  <div class="home">
    <img src="../assets/logo.png">
    <InputItem />
    <ItemList msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import InputItem from "@/components/InputItem.vue"
import ItemList from "@/components/ItemList.vue"

export default {
  name: "home",
  components: {
    InputItem,
    ItemList
  }
};
</script>
