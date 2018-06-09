<style lang="less" type="text/less">
    .article{
        box-shadow: 5px 5px 25px #dadada;
        border-radius: 5px;
        position: relative;
        margin: 15px auto;
        max-width: 900px;
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
</style>

<template>
    <div>
        <article class="article" v-for="(article, index) in articles" :key="index"> <time>{{article.creat_time}}</time>
            <h2 class="title align_left"><a @click="toDetail(article.art_id)">{{article.title}}</a></h2>
            <span class="lag"><i><strong>作者: {{article.creat_name}}</strong> 阅读( {{article.access_times}} )</i></span>
            <section class="article-content markdown-body align_left" v-html="article.detail">

            </section>
            <footer>
                <button class="btn btn-primary">查看更多</button>
            </footer>
        </article>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
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
        }
    };
</script>