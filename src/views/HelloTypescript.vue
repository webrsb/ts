<template>
  <div class="HelloTypescript">
    <h1>HelloTypescript</h1>
  </div>
</template>

<script lang="ts">
function helloWorld(params:string):void {
  console.log(params)
}

let msg:string = 'helloWorld'

helloWorld(msg)

import { defineComponent } from '@vue/composition-api'

export default defineComponent({
})
</script>
