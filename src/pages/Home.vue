<template>
  <Header />
  <Skills />
  <Projects />
  <ContactUs />
  </template>
  
  <script>
  import Header from '../components/Header.vue'
  import Skills from '../components/Skills.vue'
  import Projects from '../components/Projects.vue'
  import ContactUs from '../components/ContactUs.vue'
  export default {
    name: 'App',
    components: { Header, Skills, Projects, ContactUs },
    data() {
      return {
        
      }
    },
  }
  </script>