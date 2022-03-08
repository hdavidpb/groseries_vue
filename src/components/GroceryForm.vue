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
    <button type="button" class="btn" @click="saveList">Guardar Lista</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { IGroceries, ISavedList } from "../vuex/modules/grocesy/interface";
import { StateInterface } from "../vuex/store";

export default defineComponent({
  setup() {
    let newProduct = ref("");
    const store = useStore<StateInterface>();

    const handleAddNewproduct = (product: string) => {
      if (product.trim()) {
        const productLowerCase = product.toLowerCase();
        const CapitalLetter = productLowerCase.charAt(0).toUpperCase();
        const productPharse = productLowerCase.replace(
          productLowerCase.charAt(0),
          CapitalLetter
        );
        console.log(productPharse);
        const newGrocery: IGroceries = {
          name: productPharse,
          checked: false,
        };
        store.commit("groceryModule/addNewGrocery", newGrocery);
        newProduct.value = "";

        return;
      }
    };
    const saveList = () => {
      console.log("first");
      if (store.state.groceryModule.grocesryData.groceries.length === 0) {
        alert("No hay nada en la lista que guardar!");
        return;
      }
      const newList: ISavedList = {
        date: Date.now().toString(),
        dataList: store.state.groceryModule.grocesryData.groceries,
      };
      localStorage.setItem(
        "saved-list",
        JSON.stringify([
          ...store.state.groceryModule.grocesryData.savedList,
          newList,
        ])
      );
      store.commit("groceryModule/saveList", newList);
      alert("Lista guardada");
    };
    return {
      newProduct,
      handleAddNewproduct,
      saveList,
    };
  },
});
</script>

<style>
.form_container {
  width: 80%;
  padding: 20px;
  position: relative;
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
.btn {
  border: none;
  font-size: 17px;
  padding: 10px;
  border-radius: 6px;
  background: rgb(255, 174, 0);
  color: #ffffff;
  font-weight: bold;
  position: absolute;
  right: 0;
  bottom: -21px;
  cursor: pointer;
  transition: all 0.4s;
}
.btn:hover {
  transform: scale(1.1);
}
</style>
