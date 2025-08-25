<template>
    <!-- スマホ用ヘッダー -->
    <header class="top-bar-sp" id="header">
      <button class="menu-button" @click="toggleMenu">
        <i class="fa-solid fa-bars" v-if="!isOpen"></i>
        <i class="fa-solid fa-xmark" v-else></i>
      </button>
      <nav class="navmenu" v-show="isOpen">
        <ul>
          <li><a href="#about" @click="closeMenu">ABOUT</a></li>
          <li><a href="#price" @click="closeMenu">PRICE</a></li>
          <li><a href="#reserve" @click="closeMenu">RESERVE</a></li>
          <li><a href="#access" @click="closeMenu">ACCESS</a></li>
        </ul>
      </nav>
    </header>
  
    <!-- ヘッダー -->
    <nav class="top-bar" :style="{ borderBottom: '4px solid' + currentSlide.color }">
      <div class="bar-flex">
        <div class="bar-contents">
          <a href="#about">
            <span>ABOUT</span>
            <p :style="{ color: currentSlide.color }">お店について</p>
          </a>
        </div>
        <div class="bar-contents">
          <a href="#price">
            <span>PRICE</span>
            <p :style="{ color: currentSlide.color }">料金プラン</p>
          </a>
        </div>
        <div class="bar-contents">
          <a href="#reserve">
            <span>RESERVE</span>
            <p :style="{ color: currentSlide.color }">LINE予約</p>
          </a>
        </div>
        <div class="bar-contents">
          <a href="#access">
            <span>ACCESS</span>
            <p :style="{ color: currentSlide.color }">アクセス</p>
          </a>
        </div>
      </div>
    </nav>
    <!-- スライドショー -->
    <section :style="{ backgroundColor: currentSlide.color }" class="slideshow-wrapper">
      <div class="slide-content">
        <a href="#header"><img :src="currentSlide.img" alt="スタジオの外観" loading="lazy" /></a>
        <h2 class="consept-sub">
          頑張るあなたのためのスタジオ<br />SNS・コンカフェ・配信・TikTok撮影<br />あなたの世界を形にします
        </h2>
      </div>
    </section>
  
    <!-- テスト -->
    <main>
      <!-- 要素A（左から） -->
      <FadeInOnScroll direction="left">
        <section class="box box-a" id="about">
          <h2>ABOUT</h2>
          <p>
            コスプレイヤー専門コンカフェ「星狼」の運営チームが手がける、コスプレイヤーによる、コスプレイヤーのための撮影スタジオが誕生！<br />実際にコスプレを愛するスタッフが「本当に欲しかった」空間を形にしました。<br />背景・小道具・ライティングまで、すべてが“映える”仕様。<br />ポップで可愛い世界観から、非日常なシーンまで、あなたの「なりたい」が叶う場所です。<br />撮影初心者から上級者まで大歓迎。<br />あなたの表現がもっと自由になる、新しいスタジオ体験を。
          </p>
        </section>
      </FadeInOnScroll>
  
      <!-- 要素B（右から） -->
      <FadeInOnScroll direction="right">
        <section class="box box-b" id="price">
          <h2>PRICE</h2>
          <div class="price-slideshow-wrapper">
            <div class="price-slide-content">
              <img :src="currentPriceSlide.img" alt="料金表" loading="lazy" />
            </div>
            
            <!-- PRICE手動切り替えボタン -->
            <div class="price-slide-controls">
              <button @click="prevPriceSlide" class="price-slide-btn prev-price-btn" aria-label="前の料金表">
                <i class="fa-solid fa-chevron-left"></i>
              </button>
              <button @click="nextPriceSlide" class="price-slide-btn next-price-btn" aria-label="次の料金表">
                <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            
            <!-- PRICEインジケーター -->
            <div class="price-slide-indicators">
              <button 
                v-for="(slide, index) in priceSlides" 
                :key="index"
                @click="currentPriceIndex = index"
                :class="['price-indicator', { active: currentPriceIndex === index }]"
                :aria-label="`料金表${index + 1}に移動`"
              ></button>
            </div>
          </div>
        </section>
      </FadeInOnScroll>
  
      <!-- 要素C（左から） -->
      <FadeInOnScroll direction="left">
        <section class="box box-c" id="reserve">
          <h2>RESERVE</h2>
          <div class="reverve-flex">
            <div class="line-link">
              <a
                href="https://lin.ee/UblIDG8"
                class="line-button"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LINEで予約"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg"
                  alt="LINE"
                  class="line-icon"
                  loading="lazy"
                />
              </a>
            </div>
            <div class="reserve-contents">
              <p>簡単1STEP！<br />公式LINEを追加して簡単予約！</p>
            </div>
          </div>
        </section>
      </FadeInOnScroll>
  
      <!-- 要素D（右から） -->
      <FadeInOnScroll direction="right">
        <section class="box box-d" id="access">
          <h2>ACCESS</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6563.509613604946!2d135.50314355!3d34.6608947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e742446b2055%3A0x4a890021a83a6e86!2z6I-K5LmL5aW977yI5qCq77yJ!5e0!3m2!1sja!2sjp!4v1747811546241!5m2!1sja!2sjp"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            alt="マップ"
          ></iframe>
          <p>
            〒５５６ー０００５ 大阪府大阪市浪速区日本橋３丁目１−１８ 菊乃好ビル ４階<br />なんば駅から徒歩11分・近鉄日本橋駅から徒歩6分<br />近隣にパーキングあり
          </p>
        </section>
      </FadeInOnScroll>
    </main>
    <!-- テスト -->
  
    <!-- グリッド -->
    <FadeInOnScroll class="grid" direction="up">
      <img
        class="grid-img"
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        alt="作品集"
        loading="lazy"
      />
    </FadeInOnScroll>
  
    <!-- フッダー -->
    <footer>
      <div class="footer-flex">
        <a href="#header"><img src="/logo.png" alt="ロゴ" loading="lazy" class="logo" /></a>
        <section class="sns-icons">
          <a href="https://lin.ee/UblIDG8" alt="LINE">
            <i class="fa-brands fa-line"></i>
          </a>
          <a
            href="https://www.instagram.com/studio_wolf2025"
            alt="インスタグラム"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a 
            href="https://x.com/studiowolf2025" 
            alt="X"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-x-twitter"></i>
          </a>
        </section>
      </div>
      <router-link to="/tokusho" class="tokusho-page">特定商取引法に基づく表記</router-link>
      <small>© 2025 ポップな写真が撮れる撮影スタジオ</small>
    </footer>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  import FadeInOnScroll from './FadeInOnScroll.vue'
  
  // スマホ用ヘッダー
  const isOpen = ref(false)
  const toggleMenu = () => {
    isOpen.value = !isOpen.value
  }
  const closeMenu = () => {
    isOpen.value = false
  }
  
  // スライドショー
  const slides = [
    { img: '/intro-img3.jpg', color: '#FF9900' },
    { img: '/intro-img2.jpg', color: '#0033FF' },
    { img: '/intro-img4.jpg', color: '#FF3399' },
    { img: '/intro-img5.jpg', color: '#0033FF' },
    { img: '/intro-img6.jpg', color: '#FF9900' },
    { img: '/intro-img7.jpg', color: '#FF3399' },
    { img: '/intro-img8.jpg', color: '#0033FF' },
    { img: '/intro-img9.jpg', color: '#FF9900' },
  ]
  
  const currentIndex = ref(0)
  const currentSlide = computed(() => slides[currentIndex.value])
  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % slides.length
  }
  
  const intervalID = ref(null)
  onMounted(() => {
    intervalID.value = setInterval(() => {
      nextSlide()
    }, 3000)
  })
  onUnmounted(() => {
    clearInterval(intervalID.value)
  })
  
  // グリッド
  const images = ['/intro-img1.jpg', '/intro-img2.jpg', '/intro-img3.jpg', '/intro-img4.jpg', '/intro-img5.jpg', '/intro-img6.jpg', '/intro-img7.jpg', '/intro-img8.jpg', '/intro-img9.jpg']
  
  // PRICE用スライドショー
  const priceSlides = [
    { img: '/price1.jpg' },
    { img: '/price2.jpg' }
  ]
  
  const currentPriceIndex = ref(0)
  const currentPriceSlide = computed(() => priceSlides[currentPriceIndex.value])
  const nextPriceSlide = () => {
    currentPriceIndex.value = (currentPriceIndex.value + 1) % priceSlides.length
  }
  
  const priceIntervalID = ref(null)
  // 手動切り替え用の関数（PRICE用のみ）
  const prevPriceSlide = () => {
    currentPriceIndex.value = (currentPriceIndex.value - 1 + priceSlides.length) % priceSlides.length
  }
  
  onMounted(() => {
    // メインスライドショーは自動（3秒間隔）
    intervalID.value = setInterval(() => {
      nextSlide()
    }, 3000)
    
    // PRICEスライドショーは手動のみ（自動切り替えなし）
  })
  onUnmounted(() => {
    clearInterval(intervalID.value)
  })
  </script>
  
  <style>
  :root {
    --header-height: 90px;
  }
  </style>
  
  <!-- グリッド -->
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  
  html,
  body {
    width: 100%;
    overflow-x: hidden;
  }
  
  /* スマホ用ヘッダー */
  .top-bar-sp {
    text-align: right;
    position: relative;
    z-index: 1;
    height: 10%;
  }
  .menu-button {
    position: relative;
    font-size: 2rem;
    background: none;
    border: none;
    z-index: 2;
    /* cursor: pointer; */
  }
  
  .navmenu {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    background: rgba(255, 255, 255, 0.8);
    height: 20vh;
    transition: all 0.6s ease;
  }
  
  .navmenu > ul {
    list-style: none;
    margin: 30px;
  }
  
  .navmenu > ul > li > a {
    display: block;
    text-decoration: none;
    color: black;
    margin: 16px;
  }
  
  /* ヘッダー */
  .top-bar {
    display: none;
  }
  
  .bar-flex {
    display: flex;
    justify-content: flex-end;
    padding: 16px;
  }
  
  .bar-contents {
    text-align: center;
    width: 130px;
    min-width: 48px;
    min-height: 48px;
    /* display: inline-flex; */
    align-items: center;
    justify-content: center;
  }
  
  .bar-contents > a {
    text-decoration: none;
    margin: 0;
    padding: 0;
    color: black;
  }
  
  .bar-contents > a > span {
    margin: 0;
    font-weight: bold;
  }
  
  .bar-contents > a > p {
    margin: 10px auto;
    font-size: 16px;
    font-weight: bold;
  }
  
  /* スライドショー */
  .slideshow-wrapper {
    transition: background-color 0.5s ease;
    margin-top: 10px;
    padding: 8px;
    color: #333;
  }
  
  .slide-content {
    position: relative;
  }
  
  img {
    height: 40vh;
    width: 100%;
    object-fit: cover;
  }
  
  .consept {
    margin: 0;
    padding: 0;
    color: white;
    font-size: 40px;
    opacity: 0.8;
    font-weight: bold;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    text-align: center;
    font-family: 'Hiragino Sans W7';
    z-index: 1;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  }
  
  .consept-sub {
    margin: 0;
    padding: 0;
    color: white;
    font-size: 24px;
    opacity: 0.8;
    font-weight: bold;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'Hiragino Sans W7';
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
    line-height: 1.2;
    max-width: 90%;
    word-break: keep-all;
    overflow-wrap: break-word;
  }
  
  .box {
    margin: 24px 0;
    padding: 16px;
    font-size: 20px;
    width: 80%;
  }
  
  .box > h2 {
    font-size: 40px;
    margin: 0;
    padding: 0;
    color: white;
    font-family: Impact;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  }
  
  .box > p {
    font-size: 16px;
    margin: 0;
    padding: 20px;
    color: white;
    text-align: left;
    font-family: 'Noto Sans JP', sans-serif;
    line-height: 1.5;
  }
  
  .box-a {
    background: #0033ff;
    background-size: 40px 40px;
    text-align: center;
    margin-right: auto;
  }
  
  .box-a > h2 {
    text-align: left;
  }
  
  .box-b {
    background: #ff3399;
    text-align: center;
    margin-left: auto;
  }
  
  /* PRICEスライドショー */
  .price-slideshow-wrapper {
    width: 100%;
    max-width: 800px;
    margin: 20px auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    background: white;
    padding: 20px;
  }
  
  .price-slide-content {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .price-slide-content img {
    max-width: 100%;
    height: auto;
    display: block;
    transition: opacity 0.5s ease;
    object-fit: contain;
  }
  
  /* PRICEスライドショーコントロール */
  .price-slide-controls {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 10;
  }
  
  .price-slide-btn {
    background: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 16px;
    color: #333;
  }
  
  .price-slide-btn:hover {
    background: rgba(255, 255, 255, 1);
    transform: scale(1.1);
  }
  
  /* PRICEインジケーター */
  .price-slide-indicators {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    z-index: 10;
  }
  
  .price-indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid #ff3399;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .price-indicator.active {
    background: #ff3399;
  }
  
  .price-indicator:hover {
    background: rgba(255, 51, 153, 0.5);
  }
  
  .box-b > h2 {
    text-align: right;
  }
  
  .table-wrapper {
    overflow-x: auto;
    width: 100%;
  }
  
  .price-table {
    padding: 0.6em;
    margin: 16px auto;
    background: #fff0f5;
    border: 2px solid #ccc;
    font-family: 'Hiragino Kaku Gothic ProN', sans-serif;
    color: #333;
  }
  
  .price-table h2 {
    font-size: 1em;
    text-align: center;
    margin-bottom: 1em;
    color: #ff3399;
    font-family: 'Hiragino Sans W7';
  }
  
  .price-table table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .price-table th,
  .price-table td {
    padding: 0.5em;
    border: 1px solid #ccc;
    text-align: center;
  }
  
  .price-table .note {
    margin-top: 1em;
    font-size: 0.7em;
    font-weight: bold;
    color: #ff3399;
    font-family: 'Hiragino Sans W7';
  }
  
  .line-link {
    /* min-width: 30px;
    min-height: 30px; */
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  
  .reverve-flex {
    display: flex;
    justify-content: space-around;
    padding: 16px;
  }
  
  .reserve-contents > p {
    font-size: 16px;
    margin: 0;
    padding: 20px;
    color: white;
    text-align: center;
    font-family: 'Noto Sans JP', sans-serif;
    line-height: 1.5;
  }
  
  .line-icon {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  
  .box-c {
    background: #ff9900;
    text-align: center;
    margin-right: auto;
    font-family: 'Hiragino Sans W7';
  }
  
  .box-c > h2 {
    text-align: left;
  }
  
  .box-d {
    background: #00cc33;
    text-align: center;
    margin-left: auto;
  }
  
  .box-d > h2 {
    text-align: right;
  }
  
  iframe {
    margin: 30px auto;
    width: 100%;
    height: 300px;
  }
  
  /* グリッド */
  .grid {
    display: flex;
    flex-wrap: wrap;
    margin: 32px 0;
  }
  
  .grid-img {
    width: 40%;
    margin: 2% 5%;
    height: 40%;
  }
  
  
  /* 特商法について */
  .tokusho-page {
   display: block;
   text-align: center;
   color: white;
   border: none;
   margin-top: .5erm;
   padding: 0;
  }
  
  /* フッダー */
  footer {
    display: flex;
    flex-direction: column;
    background: #ff9900;
    padding: 30px;
  }
  
  .footer-flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto 100px;
  }
  
  .logo {
    display: block;
    width: 80px;
    height: 80px;
    object-fit: contain;
  }
  
  .sns-icons {
    display: flex;
    justify-content: space-around;
  }
  
  .sns-icons > a {
    display: block;
    text-decoration: none;
    color: white;
  }
  
  .sns-icons > a > i {
    display: block;
    margin: 0 0 0 16px;
    font-size: 60px;
    line-height: 80px;
    text-align: center;
  }
  
  small {
    display: block;
    color: white;
    font-size: 10px;
    text-align: center;
  }
  
  @media (min-width: 480px) {
    .consept-sub {
      font-size: 26px;
      line-height: 1.3;
    }
  }

  @media (min-width: 768px) {
    /* ヘッダー */
    .top-bar-sp {
      display: none;
    }
  
    .top-bar {
      display: block;
      margin-bottom: 16px;
      width: 100%;
      height: var(--header-height);
      position: fixed;
      top: 0;
      left: 0;
      z-index: 3;
      background-color: rgba(255, 255, 255, 0.8);
    }
  
    .bar-flex {
      display: flex;
      justify-content: flex-end;
      padding: 16px;
    }
  
    .bar-contents {
      text-align: center;
      width: 130px;
      min-width: 48px;
      min-height: 48px;
      /* display: inline-flex; */
      align-items: center;
      justify-content: center;
    }
  
    .bar-contents > a {
      text-decoration: none;
      margin: 0;
      padding: 0;
      color: black;
    }
  
    .bar-contents > a > span {
      margin: 0;
      font-weight: bold;
    }
  
    .bar-contents > a > p {
      margin: 10px auto;
      font-size: 16px;
      font-weight: bold;
    }
  
    /* スライドショー */
      .slideshow-wrapper {
    transition: background-color 0.5s ease;
    margin-top: 100px;
    padding: 8px;
    /* min-height: 300px; */
    color: #333;
  }
  
    .slide-content {
      position: relative;
    }
  
    img {
      height: 500px;
      width: 100%;
      object-fit: cover;
    }
  
    .consept {
      font-size: 80px;
      top: 20px;
    }
  
    .consept-sub {
      font-size: 50px;
      top: 20%;
      line-height: 1.4;
    }
  
    .box {
      margin: 80px 0;
      padding: 16px 40px;
      font-size: 1.5rem;
      width: 80%;
    }
  
    .box > h2 {
      font-size: 80px;
      margin: 0;
      padding: 0;
      color: white;
      font-family: Impact;
    }
  
    .box-a {
      background: #0033ff;
      background-size: 40px 40px;
      text-align: center;
      margin-right: auto;
    }
  
    .box-a > h2 {
      text-align: left;
    }
  
    .box-b {
      background: #ff3399;
      text-align: center;
      margin-left: auto;
    }
    
    /* PRICEスライドショー（タブレット） */
    .price-slideshow-wrapper {
      max-width: 90%;
      margin: 30px auto;
      padding: 30px;
    }
    
    .price-slide-content img {
      max-height: 500px;
    }
  
    .box-b > h2 {
      text-align: right;
    }
  
    .price-table table {
      width: 80%;
      margin: 8px auto;
      padding: 0;
      border-collapse: collapse;
    }
  
    .price-table th,
    .price-table td {
      padding: 0.5em;
      border: 1px solid #ccc;
      text-align: center;
    }
  
    .line-link {
      min-width: 48px;
      min-height: 48px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  
    .reverve-flex {
      display: flex;
      padding: 16px;
      justify-content: space-around;
    }
  
    .reserve-contents > p {
      color: white;
      text-align: left;
      margin: auto 50px;
    }
  
    .line-icon {
      width: 150px;
      height: 150px;
      object-fit: cover;
    }
  
    .box-c {
      background: #ff9900;
      text-align: center;
      margin-right: auto;
    }
  
    .box-c > h2 {
      text-align: left;
    }
  
    .box-d {
      background: #00cc33;
      text-align: center;
      margin-left: auto;
    }
  
    .box-d > h2 {
      text-align: right;
    }
  
    iframe {
      margin: 30px auto;
      width: 100%;
      height: 50vh;
    }
  
    /* グリッド */
    .grid {
      display: flex;
      padding: 40px;
      /* flex-direction: row; */
      flex-wrap: wrap;
    }
  
    .grid-img {
      width: 40%;
      margin: 2% 5%;
      height: 350px;
    }
  
    /* 特商法について */
  
    /* フッダー */
   
    .footer-flex {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  
    .logo {
      width: 150px;
      height: 150px;
    }
  
    .sns-icons {
      height: 100px;
      width: 400px;
      display: flex;
      justify-content: space-around;
      min-width: 48px;
      min-height: 48px;
    }
  
    .sns-icons > a {
      display: block;
      width: 100px;
      text-decoration: none;
      color: white;
      font-size: 100px;
    }
  
    .sns-icons > a > i {
      display: block;
      width: 100%;
      height: 100%;
      font-size: 100px;
      line-height: 150px;
      text-align: center;
    }
  
    small {
      display: block;
      color: white;
      font-size: 20px;
      text-align: center;
      margin: 16px auto;
    }
  }
  
  @media (min-width: 1024px) {
    .slideshow-wrapper {
      height: 90vh;
    }
  
    .slide-content {
      height: 100%;
    }
  
    img {
      height: 100%;
    }
  
    .consept {
      margin: 100px 0 0 100px;
      font-size: 150px;
      top: 0;
    }
  
    .consept-sub {
      top: 30%;
      font-size: 100px;
      line-height: 1.5;
    }
  
    .box > h1 {
      font-size: 100px;
    }
  
    .box-a > p {
      font-size: 32px;
    }
  
    .price-table h2 {
      font-size: 2em;
    }
  
    .price-table .note {
      font-size: 2em;
    }
  
    .reserve-contents > p {
      font-size: 50px;
    }
  
    .line-icon {
      width: 250px;
      height: 250px;
      object-fit: cover;
    }
  
    .grid {
      display: flex;
      padding: 40px;
      /* flex-direction: row; */
      flex-wrap: wrap;
      justify-content: space-around;
    }
  
    .grid-img {
      margin: 30px;
      height: 350px;
      width: 350px;
    }
    
    /* PRICEスライドショー（デスクトップ） */
    .price-slideshow-wrapper {
      max-width: 1000px;
      margin: 40px auto;
      padding: 40px;
    }
    
    .price-slide-content img {
      max-height: 600px;
    }
  }
  </style>
  