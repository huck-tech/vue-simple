<template>
  <b-container>
    <b-form inline class="d-flex justify-content-center my-3">
      <label class="sr-only" for="ItemName">Name</label>
      <b-input class="mb-2 mr-sm-2 mb-sm-0" id="ItemName" placeholder="Type the field" v-model="form.name"/>
      <label class="sr-only" for="ItemType">Type</label>
      <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-select class="mb-2 mr-sm-2 mb-sm-0"
          :value="null"
          :options="typeList"
          id="ItemType"
          v-model="form.type">
        <option slot="first" :value="null">-- Choose One --</option>
      </b-form-select>
      </b-input-group>
      <b-button @click="onSubmit" variant="primary" :disabled="!form.name || !form.type">Save</b-button>
    </b-form>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {

  data () {
    return {
      form: {
        type: '',
        name: '',
      },
    }
  },
  methods: {
    ...mapActions(["addItem"]),
    onSubmit (evt) {
      const { name, type } = this.form;
      this.addItem({name, type});
      this.form.name = "";
      this.form.type = "";
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  },
  created() {
    console.log(this.typeList);
  },
  computed: {
    ...mapGetters(['typeList'])
  }
}
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
