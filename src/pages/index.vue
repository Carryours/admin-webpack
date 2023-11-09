<template>
  <div>
    <h1>index page</h1>
    <img src="@/assets/test.png" />
    <img src="@/assets/111222.jpg" />
    <button @click="user.add()">
      {{ user.count }}
    </button>
    <div>
      <button
        class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 border-none cursor-pointer">
        TailWindCss Ready
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useUserStore } from "@/stores/user";
import { ref, Ref } from "vue";
const user = useUserStore();
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
