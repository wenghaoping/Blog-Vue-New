<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
  .backgroundpic{
    position: relative;
    p{
      position: relative;
      padding: 130px 0;
      color: rgba(255, 255, 255, 0.9);
      text-align: center;
      font-size: 20px;
      line-height: 2;
      z-index: 2;
      letter-spacing: 2.5px;
      text-shadow: 0 3px 25px rgba(0,0,0,.3);
      cursor: progress;
    }
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,.4);
      z-index: 1;
    }
  }
  @media screen and (max-width: 640px){
    .backgroundpic p {
      padding: 50px 0;
    }
  }
  .backgroundpic1 {
    background:url(../../assets/images/bgbig5.jpg) no-repeat center center;background-size: cover;
  }
</style>

<template>
    <div class="index">
      <section class="backgroundpic backgroundpic1">
        <p>
          <strong>I HAVE A DREAM</strong><br>
          人如果没有梦想<br>
          <s>那和咸鱼有什么区别</s><br>
          <small>我只是一个小前端</small><br>
        </p>
      </section>
      <article-index></article-index>
    </div>
</template>

<script>
  import articleIndex from 'src/views/article/index.vue';

  export default {
      name: 'index',
      data () {
          return {};
      },
      components: {
          articleIndex
      }
  };
</script>

