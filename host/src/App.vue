<script setup lang="ts">

import {counterState} from 'remote/remoteStore'
const counter = counterState()

</script>

<template>

  <div style="border: solid 1px forestgreen; padding: 20px">
    <h1>HOST</h1>
    <h2>from remote state: {{counter.count}}</h2>

    <remote-auth></remote-auth>
  </div>

</template>

<style scoped>

</style>
