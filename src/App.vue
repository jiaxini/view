<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
  name: 'App',
  components: {Header,Footer}
}
</script>

<style>
*{margin: 0 auto; padding: 0;}
</style>
