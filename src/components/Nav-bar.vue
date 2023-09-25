<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="info">
      <b-navbar-brand href="/personal-web/dist">
        姜昱呈的個人介紹網站
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    </b-navbar>

    <ul class="nav bg-light justify-content-center border nav-tabs">
  
      <li class="nav-item">
        <router-link  class="nav-link  flex-sm-fill text-sm-center" :to="links.phaser">Phaser作品</router-link>
      </li>
      <li class="nav-item">
        <router-link  class="nav-link  flex-sm-fill text-sm-center" :to="links.web">Web/APP作品</router-link>
      </li>
      <li class="nav-item">
        <router-link  class="nav-link  flex-sm-fill text-sm-center" :to="links.unity">Unity作品</router-link>
      </li>      
      <li class="nav-item">
        <router-link  class="nav-link  flex-sm-fill text-sm-center" :to="links.unityMMD">UnityMMD作品</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return ({
      links: {
        phaser:'/phaser',
        web: '/web',
        unity: '/unity',
        unityMMD: '/mmd'
      }
    })
  }
}
</script>
<style scoped lang="scss">
.navbar {
  background-color: #EDFFEC !important;
  justify-content: center;
}
.bg-light{
  background-color: #CAF7E3 !important;
}
</style>