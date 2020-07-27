<template>
  <div class="HelloTypescript">
    <h1>HelloTypescript</h1>
  </div>
</template>

<script lang="ts">
/**
  * 2020/07/24 解答
  */
let a:number = 10
let b:string = '10'
let c:boolean = true
let d:undefined = undefined
let e:null = null
let f:any
let g:number[] = [1, 2]
let h:Array<number|string> = [1, '2']
let i:{ x: number, y: string } = { x: 5, y: '6'}

/**
  * 2020/07/17 解答
  */
function helloWorld(params:string):void {
  console.log(params)
}

let msg:string = 'helloWorld'

helloWorld(msg)

import { defineComponent } from '@vue/composition-api'

export default defineComponent({
})
</script>
