<template>
  <div id="contactSection">
    <!-- Title -->
    <div class="contactFormTitle">
      <div>
        <img class="contactIcon" src="../assets/contactIcon.png" alt />
      </div>
      <div>
        <span class="contactTitle" style="margin-left:10px">
          <u>İletişim</u>
        </span>
      </div>
    </div>
    <div class="wrapper">
      <div class="container">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(submitForm)">
            <div class="formLine">
              <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                <input type="text" placeholder="İsim" v-model="name" />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                <input type="text" placeholder="Soyisim" v-model="surname"/>
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="formLine">
              <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                <input class="inputs2" type="text" placeholder="Email adres" v-model="email" />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                <input class="inputs2" type="text" placeholder="Telefon Numarası" v-model="phone"/>
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div>
              <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                <input class="subjectInput" type="text" placeholder="Konu" v-model="subject"/>
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div>
              <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                <textarea cols="40" rows="3" placeholder="Mesaj" v-model="message"></textarea>
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="btnForm">
              <button type="submit" class="formBtn">Gönder</button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  name: "ContactForm",
  data(){
    return{
      name:"",
      surname:"",
      email:"",
      phone:"",
      subject:"",
      message:"",
    }
  },  
   components: {
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    submitForm(){
     this.name="";
     this.surname="";
     this.email="";
     this.phone="";
     this.subject="";
     this.message="";
    this.$toast.success("Mesajınız iletilmiştir. İyi günler dileriz.");
    }
  }
};
</script>

<style>
.contactFormTitle {
  margin-left: 90vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 3vh;
}
.contactTitle {
  font-size: 2.5em;
  color: #f08041;
  font-weight: 600;
}
.contactIcon {
  width: 70%;
}

.wrapper {
  background-color: #cfcfcf;
  padding: 8vh;
  padding-bottom: 12vh;
}
.container {
  width: 970px;
  margin: auto;
}
::placeholder {
  color: #f8f8f8;
}
input {
  width: 65vh;
  font-size: 1.5em;
  color: #f8f8f8;
  font-weight: normal;
  margin-bottom: 2px;
  line-height: 7vh;
  background: none;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-color: #f8f8f8;
}
input:focus {
  outline: none !important;
  border-color: #f8f8f8;
  box-shadow: none;
}
.inputs2 {
  margin-left: 3px;
}
.formLine {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 10vh;
}
textarea {
  width: 135vh;
  font-size: larger;
  line-height: 5vh;
  margin-top: 2vh;
  margin-left: auto;
  background: none;
  border-color: #f8f8f8;
  color: #f8f8f8;
  font-family: "Roboto", sans-serif;
}
textarea:focus {
  outline: none !important;
  border-color: #f8f8f8;
  box-shadow: none;
}
.btnForm {
  margin-top: 5vh;
  margin-left: 14vh;
}
.formBtn {
  color: #ffffff;
  background-color: #f08041;
  font-size: larger;
  padding: 10px 90px;
  position: absolute;
  margin-left: 40vh;
  font-weight: normal;
  cursor: pointer;
  border-radius: 25px;
}
.formBtn:hover {
  background-color: #251106;
}
@media screen and (max-width: 768px) {
  .contactFormTitle {
    margin-left: 20vh;
    margin-top: 5vh;
  }
  .contactTitle {
    font-size: 1.5em;
    color: #f08041;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .contactIcon {
    width: 50%;
  }

  .formLine {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 10%;
  }
  input {
    width: 53vh;
    height: 15vh;
  }
  textarea {
    width: 53vh;
  }
  .btnForm {
    margin-left: 7vh;
  }
  .formBtn {
    margin-left: 2vh;
  }
}
</style>