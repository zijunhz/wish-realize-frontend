<template>
  <div class="w-full px-4 pt-2">
    <div v-if="wishCnt === 1">
      <h2 class="text-center mb-2">实现这个愿望🎇</h2>
      <div v-for="wish in wishes" :key="wish.wishID"
        class="wishCard mb-2 wishContainer outline-dotted outline-1 mx-auto h-fit rounded-md px-2 py-2">
        <p>{{ wish.wisher }}的愿望是：</p>
        <p>{{ wish.wishContent }}</p>
        <hr>
        <p>作为回报：</p>
        <p>{{ wish.reward }}</p>
      </div>
      <button @click="confirmWish()"
        class="btn interRed mt-2 text-yellow w-full mx-auto block border-2 border-dotted rounded-md py-1 hover:border-solid">实现并折叠愿望</button>
    </div>
    <div v-if="wishCnt != 1">
      <h2 class="text-center mb-2">这个愿望已被实现或正在入队❌</h2>
    </div>
    <button @click="backToHomeView()"
      class="btn interRed mt-2 text-yellow w-full mx-auto block border-2 border-dotted rounded-md py-1 hover:border-solid">返回愿望队列</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'confirmWishView',
  components: {
  },
  data () {
    return {
      wishes: [],
      wishCnt: 1,
      token: ''
    }
  },
  methods: {
    confirmWish () {
      axios({
        method: 'get',
        url: `http://127.0.0.1:8000/wishes/confirmWish/${this.$route.params.wishID}`,
      }).then((res) => {
        if (res.data === 'success') {
          alert('已确认实现愿望！')
          this.$router.push('/')
        } else {
          alert('出现了未知错误，请重试')
        }
      })
    },
    updateWishes () {
      axios({
        method: 'get',
        url: `http://127.0.0.1:8000/wishes/getSingleWish/${this.$route.params.wishID}`,
      }).then((res) => {
        // console.log(res.data)
        let data = res.data
        let tempWishes = []
        let wishCnt = data['wishCnt']
        if (wishCnt != 1) {
          this.wishCnt = 0
          return
        }
        this.wishCnt = 1
        for (let i = 1; i <= wishCnt; i++) {
          tempWishes.push({ 'wishID': data[`wishID${i}`], 'wishContent': data[`wishContent${i}`], 'reward': data[`reward${i}`], 'wisher': data[`wisher${i}`], 'isRealized': data[`isRealized${i}`] })
        }
        this.wishes = tempWishes
      })
    },
    backToHomeView () {
      this.$router.push(`/`)
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

<style lang="scss">

</style>
