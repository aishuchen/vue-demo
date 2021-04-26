<template>
  <h1>Welcome</h1>

</template>

<script setup>
import router from "../route/router"

function hasLocalToken(){
  return localStorage.getItem("sweetieToken") != null;
}


if (!hasLocalToken()){
  router.replace("/checkToken");
} else {
  router.replace("/users");
}


</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
