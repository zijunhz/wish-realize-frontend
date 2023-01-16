<template>
  <div class="home">
    <div id="addNewWishContainer" class="w-full px-4 pt-2">
      <button v-on:click="addNewWish()"
        class="btn interRed text-yellow w-full mx-auto block border-2 border-dotted rounded-md py-1 hover:border-solid">新增一个愿望🖊</button>
    </div>
    <p v-if="hasNotRealized" class="text-center my-2">或者，选择你想要为NIMOer实现的愿望</p>

    <div class="wishListContainer px-4">
      <div v-for="wish in wishes" :key="wish.wishID" v-on:click="confirm(wish)">
        <div v-if="!wish.isRealized"
          class="wishCard interRed mb-2 wishContainer border-dotted border-2 mx-auto h-fit rounded-md px-2 py-2 hover:border-solid">
          <p>{{ wish.wisher }}的愿望是：</p>
          <p> {{ wish.wishContent }}</p>
          <hr>
          <p>作为回报：</p>
          <p>{{ wish.reward }}</p>
        </div>

      </div>
    </div>
    <p v-if="hasRealized" class="text-center my-2">以下愿望已经被实现啦 ~</p>
    <div class="wishListContainer px-4">
      <div v-for="wish in wishes" :key="wish.wishID">
        <div v-if="wish.isRealized"
          class="wishCard mb-2 wishContainer outline-dotted outline-1 mx-auto h-fit rounded-md px-2 py-2">
          <p>{{ wish.wisher }}的愿望是：</p>
          <p> {{ wish.wishContent }}</p>
          <hr>
          <p>作为回报：</p>
          <p>{{ wish.reward }}</p>
        </div>
      </div>
    </div>
    <div class="h-10"></div>
    <div class="h-4"></div>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import axios from "axios"

export default {
  name: 'HomeView',

  data () {
    return {
      wishes: [],
      token: '',
      hasRealized: false,
      hasNotRealized: false
    }
  },

  components: {
    // HelloWorld
  },
  methods: {
    updateWishes () {
      axios({
        method: 'get',
        url: `http://127.0.0.1:8000/wishes/getAllWishes/`,
      }).then((res) => {
        // console.log(res.data)
        this.hasRealized = false
        this.hasNotRealized = false
        let data = res.data
        let tempWishes = []
        let wishCnt = data['wishCnt']
        for (let i = 1; i <= wishCnt; i++) {
          tempWishes.push({ 'wishID': data[`wishID${i}`], 'wishContent': data[`wishContent${i}`], 'reward': data[`reward${i}`], 'wisher': data[`wisher${i}`], 'isRealized': data[`isRealized${i}`] })
          if (data[`isRealized${i}`]) {
            this.hasRealized = true
          } else {
            this.hasNotRealized = true
          }
        }
        this.wishes = tempWishes
      })
    },
    confirm (wish) {
      this.$router.push(`/confirmWishView/${wish.wishID}`)
    },
    addNewWish () {
      this.$router.push(`/addWishView`)
    },
    getToken () {
      axios({
        method: 'get',
        url: `http://127.0.0.1:8000/wishes/get_csrf_token`,
        withCredentials: true
      })
        .then((res) => {
          this.token = res.data.token
          // console.log(this.token)
        })
    },
  },
  mounted: function () {
    this.updateWishes()
    this.getToken()
  }
}
</script>

<style>

</style>
