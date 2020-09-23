<template>
<div id="newsSection">
 <div class="news">
      <!-- Title -->
      <div class="title">
          <div>
          <img class="newsIcon" src="../assets/newspaperIcon.png" alt="">
          </div>
          <div >
              <span class="newsTitle" style="margin-left:10px"><u>Haberler ve Duyurular</u></span>
          </div>
      </div>
     
      <!-- Left Image Card -->
    <div class="newsCardLeft">
      <div class="newsImg">
        <img src="../assets/vectorNewsImg.png" alt />
      </div>
      <div class="newsText">
        <h3 style="text-align:end">
          <i>Noyispa Yoğuşmalı Kombiler İle Tanışın</i>
        </h3>
        <p class="newText">
            60'tan fazla ülkede, 30 milyonu aşkın eve giren kombinin mucidi Noyispa, çok az yakan kombiyi de icat etti. 5 yoğuşmalı Noyispa kombiden dilediğinizi seçin, cebiniz de kafanız da rahat etsin.
            </p>
      </div>
    </div>
       <!-- Right Image Card -->
        <div class="newsCardRight">
      <div class="newsImg1">
        <img src="../assets/vectorNewsImg2.png" alt />
      </div>
      <div class="newsText1">
        <h3>
          <i>Yeni Zelanda’ya ihracat</i>
        </h3>
        <p class="newText1">
Noyispa Grubu’nun satış yaptığı ülkeler başta olmak üzere İngiltere’den İran’a, Fransa’dan Pakistan’a, Romanya’dan Yeni Zelanda ve Avustralya’ya kadar toplam 30 ülkeye ihracat yapıyoruz. Toplam üretimimizin yüzde 40’ını ihraç ediyor, yüzde 60’ını ise iç pazarda satıyoruz.            </p>
      </div>
    </div>
    </div> 
</div>
 
</template>

<script>
export default {
  name: "News",
};
</script>

<style>
.news {
  width: 970px;
  margin: auto;
}
.newsIcon{
    width: 80%;
}
.title {
    margin-top:5vh;
    margin-left: 35vh;
}
.newsTitle {
 
    font-size: 2.5em;
    color: #f08041;
    font-weight:600;
   
}
.title {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.newsCardLeft {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.newsText {
  margin-left: 10vh;
  margin-top: 10vh;
  line-height: 3vh;
}
.newText {
  margin-top: 4px;
  text-align: end;
}
.newsCardRight {
  display: flex;
  flex-direction:row-reverse;
  align-items: center;
}
.newsText1 {
  margin-top: 10vh;
  line-height: 3vh;
}
.newText1 {
  margin-top: 4px;
  text-align: start;
}
@media screen and (max-width: 768px) {
    .news {
  width: 100%;
  margin: auto;
}
    .title {
    margin-top:5vh;
    margin-left: 10vh;
}
.newsTitle {
    font-size: 1.25em;
    color: #f08041;
    font-weight:600;
    letter-spacing: 1px;
}
.newText {
margin-top: 4px;
  text-align: start;
}
.newsCardLeft {
  display: flex;
  flex-direction:column;
  align-items:flex-start;
}
.newsIcon {
    width: 60%;
}
.newsCardRight {
  display: flex;
  flex-direction:column;
  align-items: center;
}
.newsText1 {
  margin-top: 10vh;
  line-height: 3vh;
}
.newText1 {
  margin-top: 4px;
  text-align: start;
}
}
</style>