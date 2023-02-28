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
        <a class="nav-link  flex-sm-fill text-sm-center " data-toggle="tab" href="/phaser">Phaser作品</a>
      </li>
      <li class="nav-item">
        <a class="nav-link flex-sm-fill text-sm-center " data-toggle="tab" href="/web">Web/APP作品</a>
      </li>
      <li class="nav-item">
        <a class="nav-link flex-sm-fill text-sm-center " data-toggle="tab" href="/unity">Unity作品</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {

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