<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
  .index{
    nav {
      background: #0e0e0e;
      flex: 0 0 60px;
      display: flex;
      align-items: center;
      padding: 0 20px;
    }
    .router-link {
      display: inline-block;
      color: white;
      text-decoration: none;
      padding: 20px 20px;
      position: relative;
      z-index: 1;
      transition: 0.2s;
      &::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        z-index: -1;
        background: white;
        top: 0;
        left: 0;
        transform: skewX(-30deg) scaleY(0);
        transition: 0.2s;
        transform-origin: center;
      }
      &:active,
      &:hover {
        color: #2d3436;
        &::after {
          transform: skewX(-30deg) scaleY(1);
        }
      }
    }
    .active {
      color: #2d3436;
      &::after {
        transform: skewX(-30deg) scaleY(1);
      }
    }
    .header{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 20px;
      img {
        width: 100%;
      }
    }
  }
</style>

<template>
    <div class="index">
        <nav>
            <span class="header"><img src="../../assets/images/header.jpg"></span>
            <router-link class="router-link active" to="/">首页</router-link>
            <router-link  class="router-link" to="/product">留言版</router-link>
            <router-link  class="router-link" to="/contact">聊天入口</router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            };
        },
        components: {}
    };
</script>

