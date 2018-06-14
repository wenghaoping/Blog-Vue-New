<style lang="less" type="text/less">
    .w-input {
      position: relative;
      font-size: 14px;
      display: inline-block;
      .w-input__inner{
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        width: 100%;
      }
      .w-textarea__inner {
        display: block;
        resize: vertical;
        padding: 5px 15px;
        line-height: 1.5;
        box-sizing: border-box;
        width: 100%;
        font-size: inherit;
        color: #606266;
        background-color: #fff;
        background-image: none;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      }
    }
</style>

<template>
  <div class="w-input">
    <input :type="type"
           v-if="type !== 'textarea'"
           autocomplete="off"
           placeholder="请输入内容"
           class="w-input__inner"
           :value="currentValue">
    <textarea
      v-else
      class="w-textarea__inner"
      :value="currentValue">
    </textarea>
  </div>
</template>

<script>
    export default {
        name: 'w-input',
        props: {
            value: [String, Number],
            type: {
                type: String,
                default: 'text'
            }
        },
        data () {
            return {
                currentValue: this.value === undefined || this.value === null ? '' : this.value
            };
        }
    };
</script>

