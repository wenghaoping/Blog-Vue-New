<style lang="less" type="text/less">
  .chat{
    overflow: hidden;
    .chat_title{
      position: fixed;
      top: 0;
      left: 0;
    }
    .chatStyle{
      width: 100%;
      border-bottom: 1px dotted black;
    }
    .time{
      margin-left: 10px;
    }
    .chatEdit{
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 0 4rem 0 4rem;
      z-index: 999;
      background: white;
    }
    .el-form-item{
      margin-bottom: 5px;
    }
    .el-form--label-top .el-form-item__label{
      padding: 0px;
    }
  }
</style>

<template>
  <div class="chat relative" style="margin-top: 20px;min-height: 719px;">
    <h1 class="align_center">交流一下想法</h1>
    <div class="container"  style="padding-top: 10px; overflow: auto">
      <div class="chatStyle" v-for="(chatList, index) in chatLists" :key="index">
        <h4 class="text-left"><strong>{{chatList.chat_name}}</strong><small class="time">{{chatList.chat_time}}</small></h4>
        <p class="text-left" style="font-size: 13px;">{{chatList.detail}}</p>
      </div>
    </div>
    <i class="el-icon-caret-left back"></i>
  </div>
</template>

<script>
export default {
    name: 'index',
    data () {
        return {
            loading: false,
            checkEdit: false, //
            chatDetail: {
                chat_name: '', // 名字
                detail: '', // 内容
                chat_time: '' // 创建时间
            },
            chatLists: [
                {
                    chat_name: '123',
                    detail: '123',
                    chat_time: '123'
                },
                {
                    chat_name: '123',
                    detail: '123',
                    chat_time: '123'
                },
                {
                    chat_name: '123',
                    detail: '123',
                    chat_time: '123'
                }
            ]
        };
    }
};
</script>

