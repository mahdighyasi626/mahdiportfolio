<template>
<div class="">
  <div class="bg-blue-20 fixed top-0 z-50 min-w-full md:w-full">
    <nav class="flex flex-wrap items-center justify-between container px-6 md:px-0">
      <!-- <div class="flex flex-shrink-0">
        <span class="text-slate-50 font-medium text-xl">MG<span class="text-yellow-300">.</span></span>
      </div> -->
      <router-link to="/" class="h-32 w-48 flex flex-shrink-0">
        <img src="../assets/icons/nav.svg" alt="">
      </router-link>
      <div class="block lg:hidden">
        <button @click="toggleTag" class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <ul v-if="showTag" class="w-full md:w-auto block md:flex lg:flex lg:items-center lg:w-auto border border-white md:border-none p-2 md:p-0">
        <li class="mr-12">
          <router-link to="/" class="text-slate-300 text-sm hover:text-gray-400 transition-all duration-75 ease-in-out leading-tight" href="">Home</router-link>
        </li>
        <li class="mr-12">
          <a class="text-slate-300 text-sm hover:text-gray-400 transition-all duration-75 ease-in-out leading-tight" href="">Skill</a>
        </li>
        <li class="mr-12">
          <a class="text-slate-300 text-sm hover:text-gray-400 transition-all duration-75 ease-in-out leading-tight" href="">Project</a>
        </li>
        <li class="">
          <a class="text-slate-300 text-sm hover:text-gray-400 transition-all duration-75 ease-in-out leading-tight" href="">Contact</a>
        </li>
        <div class="pl-32">
        <router-link to="/resume" class="btn">Build Resume</router-link>
      </div>
      </ul>
      
    </nav>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      showTag: true
    }
  },
  methods: {
    toggleTag() {
      this.showTag = !this.showTag
    }
  },
  mounted() {
    
  },
}
</script>