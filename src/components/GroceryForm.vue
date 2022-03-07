<template>
  <form
    class="form_container"
    @submit.prevent="handleAddNewproduct(newProduct)"
  >
    <div class="field_container">
      <div class="icon_container">
        <i class="fa-solid fa-pencil"></i>
      </div>
      <input
        v-model.trim="newProduct"
        type="text"
        placeholder="Agregar un producto a la lista"
      />
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { StateInterface } from "../vuex/store";

export default defineComponent({
  setup() {
    let newProduct = ref("");
    const store = useStore<StateInterface>();

    const handleAddNewproduct = (product: string) => {
      if (product.trim()) {
        store.commit("groceryModule/addNewGrocery", product);
        newProduct.value = "";

        return;
      }
    };
    return {
      newProduct,
      handleAddNewproduct,
    };
  },
});
</script>

<style>
.form_container {
  width: 80%;
  padding: 20px;
}
.field_container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 1rem;
}
.icon_container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 30px;
  color: rgb(255, 187, 0);
}
input {
  flex: 1;
  padding: 8px;
  border: none;
  border-bottom: solid 1px black;
  outline: none;
  font-size: 20px;
}
</style>
