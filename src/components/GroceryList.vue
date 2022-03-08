<template>
  <ul class="list_container">
    <li v-for:="grocery in groceryList">- {{ grocery.name }}</li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { StateInterface } from "../vuex/store";

export default defineComponent({
  setup() {
    const store = useStore<StateInterface>();

    return {
      groceryList: computed(
        () => store.state.groceryModule.grocesryData.groceries
      ),
    };
  },
});
</script>

<style>
.list_container {
  width: 80%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
  gap: 1.5rem;
}
.list_container li {
  width: 100%;
  text-align: left;
  padding: 10px;
  font-size: 25px;
}
</style>
