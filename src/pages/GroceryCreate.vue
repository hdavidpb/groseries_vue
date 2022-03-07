<template>
  <div id="grocery_create_container">
    <h1>Lista de compras</h1>
    <grocery-form />
    <grocery-list />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import GroceryForm from "../components/GroceryForm.vue";
import GroceryList from "../components/GroceryList.vue";
import { StateInterface } from "../vuex/store";

export default defineComponent({
  components: { GroceryForm, GroceryList },
  setup() {
    const store = useStore<StateInterface>();
  },
});
</script>
>

<style>
#grocery_create_container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
h1 {
  width: 100%;
  text-align: center;
  padding: 20px;
  font-size: 45px;
}
</style>
