<template>
  <ul class="list_container">
    <li
      :class="{ tachado: grocery.checked }"
      v-for:="(grocery, index) in groceryList"
      @click="handleChangeChecked(index)"
    >
      - {{ grocery.name }}
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { StateInterface } from "../vuex/store";

export default defineComponent({
  setup() {
    const store = useStore<StateInterface>();
    const handleChangeChecked = (index: number) => {
      store.commit("groceryModule/changeGroseryChecked", index);
    };

    return {
      groceryList: computed(
        () => store.state.groceryModule.grocesryData.groceries
      ),
      handleChangeChecked,
    };
  },
});
</script>

<style>
.tachado {
  text-decoration: line-through;
}
.list_container {
  width: 80%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
  gap: 0.5rem;
}
.list_container li {
  width: 100%;
  text-align: left;
  padding: 10px;
  font-size: 25px;
  cursor: pointer;
}
</style>
