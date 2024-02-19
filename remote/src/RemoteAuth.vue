<script setup lang="ts">
import {counterState} from "./store.ts";
let counter = counterState()



</script>

<template>
  <div class="wrapper">
    counter-state
    <button @click="counter.increase()">
      +1
    </button>
    <div>
      {{counter.count}}
    </div>
  </div>

</template>

<style scoped>
.wrapper{
  background-color: #888888;
  padding: 24px;
  border-radius: 8px;
}
</style>
