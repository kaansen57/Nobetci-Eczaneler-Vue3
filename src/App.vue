<template>
<div>
    <Content></Content>
</div>
</template>

<script>
 import Content from './components/Content.vue'
export default {
  name: 'App',
  components: {
    Content
  }
}
</script>

<style >
@import "~normalize.css";
@import url('https://fonts.googleapis.com/css2?family=Cabin:wght@600&display=swap');
@font-face{
    font-family:"Sofia Pro";
    src:local("Sofia Pro"),
        url("./fonts/Sofia/Sofia Pro Light Az.otf") format("truetype");
}

*{
  font-family: 'Sofia Pro', sans-serif;
  box-sizing: border-box;
}

</style>
