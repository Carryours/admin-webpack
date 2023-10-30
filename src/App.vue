<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
import { ref } from "Vue";
export default {
  setup() {
    const msg = ref(1);
    setInterval(() => {
      msg.value++;
    }, 1000);
    return { msg };
  },
};
</script>
