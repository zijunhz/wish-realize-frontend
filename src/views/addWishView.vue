<template>
  <div class="w-full px-2 pt-2">
    <h2 class="text-center mb-2">新增一个愿望🖊</h2>
    <div class="mx-auto w-full px-2">
      <input v-model="wisher" type="text" class="customInput" placeholder="你的名字/MAC地址/...">
      <input v-model="wishContent" type="text" class="customInput" placeholder="你的愿望">
      <input v-model="reward" type="text" class="customInput" placeholder="你的回报">
      <button @click="addWish()"
        class="btn interRed text-yellow w-full mx-auto block border-2 border-dotted rounded-md py-1 hover:border-solid">wishes.push();</button>
      <button @click="backToHomeView()"
        class="btn interRed mt-2 text-yellow w-full mx-auto block border-2 border-dotted rounded-md py-1 hover:border-solid">返回愿望队列</button>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'addWishView',
  data () {
    return {
      wisher: '',
      wishContent: '',
      reward: ''
    }
  },
  components: {
  },
  methods: {
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
    addWish () {
      if (this.wisher.length > 0 && this.wishContent.length > 0 && this.reward.length > 0) {
        let re = {}
        re['wisher'] = this.wisher
        re['wishContent'] = this.wishContent
        re['reward'] = this.reward
        axios({
          headers: {
            'X-CSRFToken': this.token,
            'Content-Type': 'application/json',
          },
          withCredentials: true,
          url: `http://127.0.0.1:8000/wishes/addNewWish/`,
          method: 'post',
          data: re,
        }).then((res) => {
          if (res.data != 'success') {
            alert('出现了未知错误，请重试')
          } else {
            alert('愿望已入队！')
            this.$router.push('/')
          }
        })
      } else {
        alert('请填写内容')
      }
    }
  },
  mounted () {
    this.getToken()
  },
}
</script>

<style lang="scss">
.customInput {
  margin-bottom: 0.8rem;
  background: none;
  outline: 1px dotted white;
  width: 100%;
  padding: 0.4rem;
  border-radius: 0.2rem;

  &::placeholder {
    color: #e49793;
  }
}
</style>
