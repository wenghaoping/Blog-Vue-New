<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
    * {
        padding: 0;
        margin: 0;
    }

    body {
        height: 100vh;
    }

    #app {
        min-height: 100%;
        display: flex;
        flex-direction: column;
    }

    nav {
        background: #2d3436;
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
    .transition-bubble {
        position: fixed;
        top: 50%;
        right: 0;
        z-index: 99;
    }
    .bubble {
        position: absolute;
        background: white;
        width: 1px;
        height: 1px;
        border-radius: 50%;
        transform-origin: 50% 50%;
        transform: scale(0);
        display: inline-block;
    }

    .page {
        flex: 1 1 auto;
        font-size: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    }

    .page-home {
        background: #dfe6e9;
    }
    .page-product {
        background: #ffeaa7;
    }
    .page-contact {
        background: #ff7675;
    }
</style>

<template>
    <div class="index">
        <nav>
            <router-link class="router-link" to="/">Home</router-link>
            <router-link  class="router-link" to="/product">Product</router-link>
            <router-link  class="router-link" to="/contact">Contact</router-link>
            <side-menu class="side-menu"></side-menu>
        </nav>
    </div>
</template>

<script>
    import SideMenu from 'components/header/menu';

    export default {
        name: 'index',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            };
        },
        components: {
            SideMenu
        }
    };
</script>

