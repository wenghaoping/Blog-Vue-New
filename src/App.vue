<style lang="less">
    @import './assets/css/index.less';
    * {
        -webkit-tap-highlight-color: transparent;
    }
    body {
        -webkit-overflow-scrolling: touch;
    }
</style>

<template>
    <div id="app">
        <!--顶部-->
        <topHeader></topHeader>
        <transition mode="out-in"
                    name="custom-classes-transition"
                    enter-active-class="pt-page-moveFromRight"
                    leave-active-class="pt-page-moveToLeft">
          <router-view></router-view>
        </transition>
        <!--底部-->
        <footered></footered>
    </div>
</template>

<script type="text/ecmascript-6">
    import footered from 'components/footer.vue';
    import topHeader from 'components/header/top-header.vue';

    export default {
        data () {
            return {};
        },
        components: {
            footered,
            topHeader
        },
        methods: {},
        created () {},
        watch: {}
    };
</script>
