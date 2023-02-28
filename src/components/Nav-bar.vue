<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="info">
      <b-navbar-brand href="/">
        姜昱呈的個人網站
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    </b-navbar>

    <ul class="nav bg-light justify-content-center border nav-tabs">
  
      <li class="nav-item">
        <a class="nav-link  flex-sm-fill text-sm-center " data-toggle="tab" :href=links.phaser>Phaser作品</a>
      </li>
      <li class="nav-item">
        <a class="nav-link flex-sm-fill text-sm-center " data-toggle="tab" :href=links.web>Web/APP作品</a>
      </li>
      <li class="nav-item">
        <a class="nav-link flex-sm-fill text-sm-center " data-toggle="tab" :href=links.unity>Unity作品</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return ({
      links: {
        phaser: process.env.NODE_ENV === 'production' ? '/personal-web/dist/phaser' : '/phaser',
        web: process.env.NODE_ENV === 'production' ? '/personal-web/dist/web' : '/web',
        unity: process.env.NODE_ENV === 'production' ? '/personal-web/dist/unity' : '/unity'
      }
    })
  }
}
</script>
<style scoped lang="scss">
.navbar {
  background-color: violet !important;
  justify-content: center;
}
.bg-light{
  background-color: aquamarine !important;
}
</style>