<template>
      <div class="h-60"></div>
      <div class="form-width" data-aos="flip-up" data-aos-delay="200">
        {{ resumeData }}
        <form action="">
          <h1 class="form-header">Personal Information</h1>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label class="label" for="first-name">
                    Job Title*
                  </label>
                  <input class="input" type="text" v-model="resumeData.personalDetails.jobTitle">
                </div>
                <div class="flex items-center gap-3">
                  <div class="h-16 w-16 bg-gray-300 flex items-center justify-center">
                    <img src="../assets/vue.svg" />
                  </div>
                  <p class="text-blue-300">Upload photo</p>
                </div>
              </div>
              <div class="h-5"></div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label class="label" for="first-name">
                    First Name*
                  </label>
                  <input class="input" type="text" id="first-name" v-model="resumeData.personalDetails.firstName">
                </div>
                <div>
                  <label class="label" for="last-name">
                    Last Name*
                  </label>
                  <input class="input" id="last-name" type="text" v-model="resumeData.personalDetails.lastName">
                </div>
              </div>
              <div class="h-5"></div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label class="label" for="first-name">
                    Email*
                  </label>
                  <input class="input" type="text" id="first-name">
                </div>
                <div>
                  <label class="label" for="last-name">
                    Phone*
                  </label>
                  <input class="input" id="last-name" type="text">
                </div>
              </div>
              <div class="h-5"></div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label class="label" for="first-name">
                    Country
                  </label>
                  <input class="input" type="text" id="first-name">
                </div>
                <div>
                  <label class="label" for="last-name">
                    City
                  </label>
                  <input class="input" id="last-name" type="text">
                </div>
              </div>
              <div class="h-5"></div>
              <div class="flex items-center justify-between gap-4">
                <button class="btn">Previous</button>
                <button @click="$emit('changeComponent', 1)" class="btn">Next</button>
              </div>
        </form>
      </div>
</template>

<script>
export default {
  props: ['resumeData'],
  data() {
    return {
      
    }
  },
  methods: {
    
  },
 
}
</script>

<style>

</style>