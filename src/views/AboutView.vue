<template>
  <div class="about">
    <h1>個人自傳</h1>
    <p>您好，我的名字是姜昱呈，現任就讀元智大學資訊傳播學系科技組，我的個性雖然比較慢熟，但是是開朗的我做事情喜歡有效率，<br>
      會為了目標而努力去完成，在平日的閒暇時刻我喜歡和朋友相約去打桌球和羽毛球等等的運動<br>
      在學校也參加了學校的桌球校隊和寰宇文化的活動。
    </p>    
    <h2>學校參與:寰宇文化領航員計畫</h2>
    <p>雖然我和不熟的人會需要一點時間才可以聊得開，但是我很喜歡去認識新的事物，因此我參加了寰宇文化領航員的活動<br>
    此活動的目的就是邀請本校生和本校的外籍學生一起合作去國小教課，外籍老師準備課程去教導小孩子<br>
    而我們的任務就是當老師和孩子們之間溝通的橋樑，為了不要讓老師的課堂冷卻下來，我們也是需要花費心力去讓孩子們融入老師的課程。<br>
    雖然準備的過程和跑外面去上課會比較累，但是我可以認識新的外籍生，教導小孩子，拓寬我的視野，整體的感覺是充實且有意義的。
    </p>
    <CarouselComp :images=carouselData1 />
    <h2>學校參與:桌球隊</h2>
    <p>在高中下課要去補習的路上，同班同學遇到我，說了一句:來打桌球，成為了我喜愛桌球的契機 <br>
    雖然高中開始學習真的比起國小練習過的其他人還要難學許多，但我抱著對桌球濃厚的興趣才得以加入學校的桌球隊 <br>
    現在我在桌球隊裡雖然不是強的，但是可以跟實力高強的人切磋來練自己的基礎，就是豐富的收穫。
    </p>
    <CarouselComp :images=carouselData2 />
    <h4>歡迎到上方項目點選觀看在學期間的作品</h4>
    <h1>非常感謝撥冗時間觀看!!</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import CarouselComp from '@/components/Carousel.vue'
import Image01 from '@/assets/images/01.jpg'
import Image02 from '@/assets/images/02.jpg'
import Image03 from '@/assets/images/03.jpg'
import Image04 from '@/assets/images/04.jpg'
import Image05 from '@/assets/images/05.jpg'
import Image06 from '@/assets/images/06.jpg'
import Image07 from '@/assets/images/07.jpg'

export default {
  name: 'HomeView',
  data(){
    return{
      carouselData1: [{
        caption: '我和另外一組外籍老師一起配合教課的合照',
        src: Image01
      },{
        caption: '外籍老師和學生們的合照',
        src: Image02
      },{
        caption: '第一次參加活動和外籍老師的合照',
        src: Image03
      },{
        caption: '我和全體學生的合照',
        src: Image04
      }],
      carouselData2: [{
        caption: '110年度新生杯',
        src: Image05
      },{
        caption: '淡大杯',
        src: Image06
      },{
        caption: '111年度新生盃',
        src: Image07
      }]
    }
  },
  components: {
    CarouselComp
  }
}
</script>
