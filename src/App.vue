<template>
  <div id="app">
    <div class="home  w-screen h-screen bg-red-900">
      <div id="mainContainer" class="max-w-md mx-auto min-h-screen bg-red-800 text-white outline-1 outline-dashed">
        <div id=" heading" class="w-full">
          <h1 class="mx-auto text-center text-2xl bg-red-900 pt-5 pb-6 text-yellow-300"
            style="font-family: Cambria,'Times New Roman',Times, Cochin, Georgia, STFangsong, 楷体, serif;">NIMOer
            的春节愿望</h1>
        </div>
        <router-view />
      </div>
      <!-- <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    </div>
  </div>
</template>

<style lang="scss">
hr {
  border: none;
  border-top: 1px dashed #fff;
  color: #fff;
  overflow: visible;
  text-align: center;
  height: 0px;
  margin-top: 0.2rem !important;
  margin-bottom: 0.2rem !important;
}

.interRed {
  background-color: #89281f;
}
</style>
