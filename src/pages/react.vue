<template>
  <div>
    <h1>History page</h1>
    <h1>{{ msg }}</h1>
  </div>
</template>
<script lang="ts" setup>

import { ref, Ref } from "vue";
const msg: Ref<number> = ref(1);
setInterval(() => {
  msg.value++;
}, 1000);
</script>
<style scope>
h1 {
  color: red;
}
</style>
