<template>
  <div id="header">
    <div class="background">
      <img class="bannerImg" src="../assets/Banner.png" alt />
    </div>
    <div class="combiImg">
      <img class="combiImg" src="../assets/CombiPhoto.png" alt />
    </div>
    <div class="features">
      <ul>
        <li v-for="(item,index) in features" :key="index">{{ item }}</li>
      </ul>

      <div class="btn">
        <a href="#" class="detailBtn">Detaylı Bilgi</a>
      </div>
    </div>
    <div class="btnCall">
      <a href="#" class="callBtn">Ara 444 0 123</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      features: [
        "Erp-Eco Design Kriterlerine Uygun",
        "Premix Yoğuşma Teknolojisi ile -Yüksek Verim",
        "26,5 kW ve 34 kW'lık Kapasite Seçenekleri",
        "A Enerji Sınıfı",
        "Ferroli Patentli, Titanyum Alaşımlı Paslanmaz",
        "Çelik Eşanjör",
        "Modülasyonlu Sirkülasyon Pompası",
        "Kompakt Ölçüler, Montaj Kolaylığı",
        "Mükemmel İzolasyon, Sessiz Çalışma",
      ],
    };
  },
};
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
}
.bannerImg {
  width: 100%;
  height: 90vh;
}
.combiImg {
  height: 70vh;
  position: absolute;
  top: 10vh;
  left: 18vw;
}
.features {
  position: absolute;
  top: 40vh;
  left: 62vw;
  font-family: "Roboto", sans-serif;
  font-weight: lighter;
  color: #ffffff;
  font-size: 1.1em;
  letter-spacing: 1px;
  line-height: 1.5rem;
}
.btn {
  margin-top: 5vh;
  margin-left: 14vh;
}
.detailBtn {
  color: #ffffff;
  text-decoration: none;
  background-color: #f08041;
  padding: 10px 25px;
  font-weight: normal;
  cursor: pointer;
  border-radius: 25px;
}
.detailBtn:hover {
  background-color: #251106;
}
.callBtn {
  text-decoration: none;
  padding: 10px 25px;
  font-weight: normal;
  cursor: pointer;
  border-radius: 25px;
  border: 4px solid #f08041;
  color: #f08041;
  font-weight: 700;
  position: absolute;
  background-color: #ffffff;
  top: 20vh;
  left: 150vh;
}
.callBtn:hover {
  background-color: #e4b79d;
  opacity: 90%;
  border: 4px solid #251106;
  color: #251106;
}
@media screen and (max-width: 1024px) {
  .combiImg {
    height: 65vh;
    position: absolute;
    top: 14vh;
    left: 12vw;
  }
  .callBtn {
    top: 20vh;
    left: 13vh;
  }
}
@media screen and (max-width: 768px) {
  .combiImg {
    height: 55vh;
    position: absolute;
    top: 10vh;
    left: 5vw;
  }
  .features {
    position: absolute;
    top: 72vh;
    left: 10vw;
    font-size: 1em;
    letter-spacing: 1px;
    line-height: 1.5rem;
  }
  .callBtn {
    top: 15vh;
    left: 20vh;
  }
  .bannerImg {
    height: 110vh;
  }
}
</style>