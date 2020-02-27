<template>
 <div class="Calculator">
     
     <p>state状态直接获取：{{ aaa }}</p>
     <p>变化的：{{count}}</p>
    
     <button @click="addbtn">+</button>
     <button @click="reducebtn">-</button>
     <button @click="setZero">清零</button>


     <br>
     <br>
     <router-link :to="{path: '/'}">返回首页</router-link>
 </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
 export default {
    
    computed:{
        ...mapState({
            count: state => state.count
        }),

        ...mapGetters(["count"]),

        // count(){
        //     return this.$store.getters.count;
        // }
    },



    data () {
        return {
            aaa: this.$store.state.count,
           
        }
    },
    created(){
        this.$nextTick(() => {
            console.log(112,this);
        })
    },
    methods:{
        addbtn(){
            // 提交mutations
            // this.$store.commit('add');  // 意思是：触发或调用vuex.store.mutations中对应的事件

            // 提交actions，在从actions（中途可做异步操作）提交到mutations
            // this.$store.dispatch('add'); // 普通写法

            // 引入mapActions
            this.add();
        },
        reducebtn(){
            this.$store.commit('reduce');
        },
        setZero(){
            this.zero();
        },

        ...mapActions(["add"]),

        // 组件中模板获取Mutatiohs：mapMutations
        ...mapMutations([
            'zero',
        ])
    },
    components: {

  }
 }
</script>

<style scoped>

 
</style>
