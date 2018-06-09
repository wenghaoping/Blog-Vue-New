<style lang="less">
    .co-menu {
        height: 24px;
        width: 24px;
        .menu-div {
            height: 100%;
            width: 100%;
            background: #ffffff no-repeat;
            background-size: contain;
        }
        .mask-menu {
            .row {
                position: fixed;
                right: 0;
                top: 0;
                height: 100%;
                bottom: 0;
                width: 66%;
                background: #fff;
                z-index: 200;
                overflow: auto;
            }
            .list {
                border-bottom: 0;
            }
            .item {
                padding: 8px 5px;
                p {
                    height: 44px;
                    line-height: 44px;
                }
            }
            .menu-list-enter-active {
                animation: menu-in 0.3s;
            }
            .menu-list-leave-active {
                animation: menu-out 0.3s;
            }
            @keyframes menu-in {
                from {
                    transform: translateX(100%);
                }
                to {
                    transform: translateX(0);
                }
            }
            @keyframes menu-out {
                from {
                    transform: translateX(0);
                }
                to {
                    transform: translateX(100%);
                }
            }
        }
    }
</style>
<!--右侧选择跳转的地方-->
<template>
    <div class="co-menu">
        <div class="menu-div" @click="menuFlag = true" v-if="!menuSpmFlag"></div>
        <div class="mask-menu" @click="menuFlag = false">
            <div class="mask" v-show="menuFlag"></div>
            <transition name="menu-list">
                <div class="row" v-show="menuFlag">
                    <div class="list">
                        <div class="item">
                            <router-link :to="{name: 'home'}">
                                <p>首页</p>
                            </router-link>
                            <router-link :to="{name: 'list'}">
                                <p>买新车</p>
                            </router-link>
                            <router-link :to="{name: 'buyUsed'}">
                                <p>买二手车</p>
                            </router-link>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'header-menu',
        data() {
            return {
                menuFlag: false
            };
        },
        computed: {
            menuSpmFlag() {
                return !!this.$store.state.mstationMenu;
            }
        }
    };
</script>
