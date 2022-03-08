<script setup la
  components: { GroceryCreate },ng="ts">
import GroceryCreate from './pages/GroceryCreate.vue';


</script>

<template>
<div class="app_container">

  <grocery-create />
</div>
</template>

<style>
body{
  background: rgb(255, 196, 0);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Dancing Script', cursive;
}
.app_container{
  margin: auto;
  width: 60%;
  height: 100vh;
  background: #ffffff;

}

@media (max-width:600px){
  .app_container{
    width: 100%;
    
  }
 
}
</style>
