<template>
  <div class="HelloTypescript">
    <h1>HelloTypescript</h1>
  </div>
</template>

<script lang="ts">
interface A {
  x: number,
  y: string
}
interface B {
  x: number,
  y: string,
  z?: boolean
}
interface C {
  [number: number]: number | string
}
interface D {
  (arg0: string): number
}
interface E {
  (arg0: string, arg1: string): string
}
interface F {
  (): string
}
interface G {
  (x: number, y: number): number
}
interface H {
  (cb: (x: number)=> void): void
}
interface I {
  [idx: number]: string
}

(() => {
  let a:A = { x: 5, y: '6'}
  let b:B = { x: 5, y: '6'}
  b.z = true
  let c:C = [1, '2'] // 此題類似I
  let d:D = function (arg0) {
      return Number(arg0)
  }

  let e:E = function (arg0, arg1):string {
      return arg0 + arg1
  }

  let f:F = () => 'Hello'
  let g:G = (x:number, y: number) => x + y

  let cb = function (x: number) {
      return x+1
  }

  let h:H = (cb) => {}
  let i:I = {} // 這個 object 的 key 可以是任意整數，value為字串
})

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
