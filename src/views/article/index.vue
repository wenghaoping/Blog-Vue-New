<style lang="less" scoped>
    .indexArticle{
      max-width: 90%;
      margin: 0 auto;
      .megagame{
        position: fixed;
        background-color: rgb(51, 122, 183);
        width:50px;
        height:50px;
        line-height: 50px;
        color:#ffffff;
        top: 85%;
        right: 23px;
        text-align: center;
        transition: all 0.5s ease;
        border-radius: 50%;
        z-index: 9999;
      }
      .article{
        box-shadow: 5px 5px 25px #dadada;
        border-radius: 5px;
        position: relative;
        margin: 40px auto;
        padding: 20px 0;
        max-width: 950px;
        background: rgb(255, 255, 255);
        text-align: center;
        time {
          position: absolute;
          top: 0;
          left: 0;
          border-bottom: 1px solid rgb(204, 204, 204);
          font-size: 14px;
          padding: 4px 5px 0;
          color: rgb(153, 153, 153);
        }
        h2 {
          line-height: 1.225;
          padding: 50px 0px 0px 20px;
          font-size: 22px;
          font-weight: 700;
          cursor: pointer;
        }
        .lag{
          border-radius: 0 5px 0 0;
          position: absolute;
          top: 0;
          right: 0;
          color: rgb(153, 153, 153);
          padding: 3px 10px;
          background: rgb(241, 241, 241);
          font-size: 14px;
        }
        p{
          font-size: 14px;
          margin: 1em 0;
        }
        section {
          text-align: left;
          padding: 0 20px 0 20px;
          font-size: 16px;
        }
        footer{
          padding: 20px 0 20px;
        }
      }
    }
</style>

<template>
  <!--文章首页,显示全部-->
    <div class="indexArticle relative">
      <div class="container">
        <article class="article" v-for="(article, index) in articles" :key="index" @click="toDetail(article.art_id)"> <time>{{article.creat_time}}</time>
          <h2 class="title align_left"><a @click="toDetail(article.art_id)">{{article.title}}</a></h2>
          <span class="lag"><i>阅读( {{article.access_times}} )</i></span>
          <section class="article-content markdown-body align_left" v-html="article.detail"></section>
        </article>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data () {
        return {
            loading: false,
            privileges: 0,
            timer: null,
            scrollTop: 0,
            chatDisplay: false,
            articles: [
                {
                    title: '测试标题', // 标题
                    detail: '简介', // 简介
                    main: '', // 主内容
                    creat_time: '1994、01、01', // 创建时间
                    creat_name: '翁浩平', // 编写人
                    art_id: '', // 文章Id
                    access_times: '123' // 查看次数
                }
            ]
        };
    },
    mounted () {},
    methods: {
        getArticleListAll () {}
    }
};
</script>

