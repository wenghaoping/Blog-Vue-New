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
        <topHeader></topHeader>
        <keep-alive include="index">
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
        <footered></footered>
    </div>
</template>

<script type="text/ecmascript-6">
    import footered from 'components/footer.vue';
    import topHeader from 'components/header/top-header.vue';

    export default {
        data () {
            return {
                transitionName: 'slide-left'
            };
        },
        components: {
            footered,
            topHeader
        },
        methods: {},
        created () {},
        watch: {
            '$route' (to) {
                if (to) {
                    this.transitionName = 'slide-right';
                } else {
                    this.transitionName = 'slide-left';
                }
            }
        }
    };
</script>
