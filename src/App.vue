<template>
  <div id="app">
    <div class="home w-screen h-screen bg-red-900">
      <div id="mainContainer" class="max-w-md mx-auto min-h-screen bg-red-800 text-white outline-1 outline-dashed">
        <div id="heading" class="w-full">
          <img src="./assets/title.png" alt="" class="w-5/6 mx-auto pt-9 mb-3">
          <!-- <h1 class="mx-auto text-center text-2xl  pt-10 pb-4 text-yellow-300"
            style="font-family: Cambria,'Times New Roman',Times, Cochin, Georgia, STFangsong, 楷体, serif;">
            NIMOer
            的春节愿望</h1> -->
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
  border-top: 1px dashed #f8cccb;
  color: #f8cccb;
  overflow: visible;
  text-align: center;
  height: 0px;
  margin-top: 0.2rem !important;
  margin-bottom: 0.2rem !important;
}

.wishCard {
  background-image: url('./assets/cloud.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-color: #f8cccb;
  outline-color: #f8cccb;
}

.btn {
  background-image: url('./assets/cloud_full.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.interRed {
  background-color: #89281f;
}

p {
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}

#mainContainer {
  background-image: url('./assets/up_boarder.png'), url('./assets/up_boarder-1.png'), url('./assets/up_boarder-2.png'), url('./assets/up_boarder-3.png');
  background-size: 60%, 60%, 60%, 60%;
  background-repeat: no-repeat, no-repeat,
    no-repeat,
    no-repeat;
  background-position: left top, right top, right bottom, left bottom;
}
</style>
