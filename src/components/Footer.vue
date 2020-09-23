<template>
  <div class="wrapperFooter">
    <div class="socialMediaSection">
      <div>
      <a href=""><img class="socialMediaIcons" src="../assets/facebookIcon.png" alt=""></a>
      </div>
      <div>
        <a href=""><img class="socialMediaIcons" src="../assets/twitterIcon.png" alt=""></a>
      </div>
      <div>
       <a href=""><img class="socialMediaIcons" src="../assets/instagramIcon.png" alt=""></a> 
      </div>
    </div>
    <div class="footerLinks">
      <div style="margin-bottom:3vh" class="footer1">
        <ul>
          <li v-for="(item,index) in footerLinks1" :key="index"><a href="">{{ item }} </a></li>
        </ul>
      </div>
      <div style="margin-bottom:3vh" class="footer2">
        <ul>
          <li v-for="(item,index) in footerLinks2" :key="index"><a href="">{{ item }} </a></li>
        </ul>
      </div>
       <div style="margin-bottom:3vh" class="footer3">
        <ul>
          <li v-for="(item,index) in footerLinks3" :key="index"><a href="">{{ item }} </a></li>
        </ul>
      </div>
       <div style="margin-bottom:3vh" class="footer4">
        <ul>
          <li v-for="(item,index) in footerLinks4" :key="index"><a href="">{{ item }} </a></li>
        </ul>
      </div>
    </div>
    <p>Copyright © 2020 Noyispa</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      footerLinks1: [
        "Şirketimiz",
        "Ekibimiz",
        "Referanslarımız",
        "İnsan Kaynakları",
        "Basın Materyalleri",
      ],
      footerLinks2: [
        "Aydınlatma Metni",
        "Kalite Politikası",
        "Bilgi Güvenliği",
        "Banka Bilgileri",
        "SSS",
      ],
      footerLinks3: [
        "Noyispa",
        "Yoğuşmalı Kombi",
        "Kurumsal Çözümler",
        "Ek Garantiler",
      ],
      footerLinks4: [
        "0216 911 87 77",
        "Altayçeşme Mah. Öz Sokak No:19 Gold Plaza Ofis 6 4843 Maltepe / İstanbul",
        "info@noyispa.com",
      ],
    };
  },
};
</script>

<style scoped>
.wrapperFooter {
  width: 970px;
  margin: auto;
}
.footerLinks a{
    text-decoration: none;
    color:#878787
}
p{
    text-align: center;
    color:#878787;
    font-size:0.75em;
    padding: 10px;
}
span {
  margin: 57vh;
}
.socialMediaIcons{
  width: 50%;
}
.socialMediaSection{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top:3vh;
  margin-bottom: 3vh;
}
.footerLinks li {
    width: 10em;
    line-height: 4vh;
   
}
.footerLinks{
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    
}
@media screen and (max-width: 768px) {
 .wrapperFooter{
     width: 120%;
 }  
 .footerLinks{
     display: flex;
     flex-direction: column;
     align-items: center;
   
 }
.socialMediaImg{
    margin-left: 10vh;
}
.wrapperFooter span {
    margin-left:18vh ;
}
}
</style>