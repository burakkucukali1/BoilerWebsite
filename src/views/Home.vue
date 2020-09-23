<template>
  <div class="home">
<Navbar/>
<Header/>
<News/>
<ContactForm/>
<Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
 import Navbar from '@/components/Navbar.vue'
 import Header from '@/components/Header.vue'
 import News from '@/components/News.vue'
 import ContactForm from '@/components/ContactForm.vue'
 import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Header,
    News,
    ContactForm,
    Footer
  }
}
</script>
<style>
  
html {
    scroll-behavior: smooth;
}

</style>
