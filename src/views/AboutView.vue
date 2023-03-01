<template>
  <div class="about">
    <h1>個人自傳</h1>
    <p>在家中孩子中排行老二，目前就讀元智大學資訊傳播學系科技組三年級，爸爸是在內科工作的上班族 <br>
      ，媽媽曾經創業加盟7-11，在一個上班族與創業族的家庭中長大，同時看到了上班族與創業族不同的辛苦 <br>
      ，媽媽是工作上對員工和善的老闆，對我卻無比的嚴厲，但我知道，這是要讓我不靠關係，培養工作能力，使我成為更好的人，爸爸是個冷面的主管 <br>
      ，對我卻溫柔無比完全沒架子，在這樣的家庭中成長，使我個性在工作上，沉穩、抗壓性高、行動力強，私下個性活潑開朗。 <br>
    </p>    
    <h2>學校參與:寰宇文化領航員計畫</h2>
    <p>大學求學時期參加了學校寰宇文化的活動，此活動是邀請本校的台灣籍及外國籍學生合作，至國小授課 <br>
      ，外籍生擔任老師用全英文溝通及授課，台灣籍擔任助教，過程中即時翻譯讓國小生理解內容 <br>
      ，是我最大的成就及挑戰，此認識許多外國學生，一起交流文化互相學習，開拓我的視野，充實我的大學生涯，從中也深深體會團隊合作的重要性。
    </p>
    <CarouselComp :images=carouselData1 />
    <h2>學校參與:桌球隊</h2>
    <p>在高中下課要去補習的路上，同班同學遇到我，說了一句:來打桌球，成為了我喜愛桌球的契機 <br>
    雖然高中開始學習真的比起國小練習過的其他人還要難學許多，但我抱著對桌球濃厚的興趣才得以加入學校的桌球隊 <br>
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
