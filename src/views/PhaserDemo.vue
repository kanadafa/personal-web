<template>
    <div class="about">
      <h1>Phaser小遊戲</h1>
      <p>這個網頁遊戲的玩法非常簡單，就是中間的塔不可以被四周隨機生成的魔物攻擊到，總共有三個關卡 <br>
        後續的關卡魔物攻擊力會變得更高，在地圖上也更不好看清楚，塔的血量也會變少，就是一款簡單而快速的遊戲 <br>
        <strong>可以直接在下方遊玩!!</strong>
        <strong>請注意:此小遊戲只支援網頁瀏覽器(Google,Edge等等)，手機及平板不支援</strong>
      </p>
      <div class="iframe-wrapper">
        <b-embed
          type="iframe"
          aspect="16by9"
          scrolling="no"
          src="https://kanadafa.github.io/phaser-game/"
        ></b-embed>
      </div>
    </div>
</template>
<style scoped lang="scss">
.iframe-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 50px;;
}

</style>
