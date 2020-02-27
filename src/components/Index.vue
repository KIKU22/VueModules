<template>
  <div class="Index">
    
      <p>这是Index</p>
    <!-- 第一种：路由标签跳转 -->
    <!-- path------------跳转路径( 例：path: '/index/page1' ) -->
<!-- 　　name------------跳转路由名称( 例：name: 'router name' ) -->
    <router-link :to="{ path: '/HelloWorld/1'}">路由标签跳转(跳转路径)</router-link>
    <br>
    <router-link :to="{ name: 'Hello', query: { a: 1}}">路由标签跳转(跳转路由名称)</router-link>
    <br>
    <!-- 第二种函数操作 -->
    <button @click="ToHellworld">params方式传参</button>
    <br>
    <button @click="ToHello">query方式传参</button>
    <br>
    <router-link :to="{ path: '/Modal/Calculator' }">计数</router-link>
    <p>{{ count }}</p>
     <button @click="setOneHundred(100)">设为100</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    name: 'Index',
    // 写法一
    // computed:mapState({
    //     // 方法1 普通写法
    //     // count() {
    //     //     return this.$store.state.count;
    //     // }
    //     // 方法2 ES6箭头函数写法
    //     // count: state => state.count
    // }),

    // 写法二
    computed:{
        // 数组的形式
        // ...mapState(["count"])
        // 对象的形式
        ...mapState({
            count: state => state.count
        })
    },
    methods: {
        ToHellworld() {
            // 对象写法
            this.$router.push({
                name: 'HelloWorld',
                params: {
                    a:1
                }
            })

            // 字符串写法
            // this.$router.push('/Hello')
        },
        ToHello() {
            // 对象写法
            // this.$router.push({
            //     name: 'Hello',
            //     query: {
            //         b:2
            //     }
            // })

             // 字符串写法
             this.$router.push('/Hello?pp=12&qq=33');
        },

        setOneHundred(n){
            this.setNum(n);
        },

        // 数组写法
        // ...mapMutations(['setNum'])

        // 对象写法
        ...mapMutations({
            setNum: 'setNum'
        })
    }
}
</script>

<style>

</style>