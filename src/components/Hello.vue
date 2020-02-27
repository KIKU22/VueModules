<template>
  <div class="hello">
      <p>hello</p>
        <p>  {{ bbb }} </p>
    <br>
    <button @click="goHelloWorld">去HelloWorld(使用push)</button>
    <br>
    <button @click="goHelloWorldR">去HelloWorld(使用replace)</button>
    <br>
    <button @click="back">返回上一步</button>
  </div>
</template>

<script>
export default {

    data() {
        return {
            bbb: this.$route.query?this.$route.query:'bb'
        }
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
        goHelloWorld(){
            this.$router.push({
                name: 'HelloWorld',
                params: {
                    a: 1
                }
            })
        },
        goHelloWorldR(){
            this.$router.replace({
                name: 'HelloWorld',
                params: {
                    a: 1
                }
            })
        }
    }
}
</script>

<style>

</style>