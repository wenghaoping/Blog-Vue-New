<style lang="less">
    #indexArticle{

    }
</style>

<template>
  <!--文章首页,显示全部-->
    <div id="indexArticle" class="relative">
      <div class="container" style="padding-top: 10px;min-height: 439px;">

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
                    title: '接口有问题啦', // 标题
                    detail: '接口有问题啦', // 简介
                    main: '', // 主内容
                    creat_time: '接口有问题啦', // 创建时间
                    creat_name: '', // 编写人
                    art_id: '', // 文章Id
                    access_times: '' // 查看次数
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

