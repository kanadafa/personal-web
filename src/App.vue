<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>  
  import Navbar from "@/components/Nav-bar";
  export default {
  components: {
    Navbar,
  },
};
</script>
<style lang="scss">
#app {
  background-color:antiquewhite !important; 
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
p{
  margin: 0;
  padding: 0;
}
</style>
