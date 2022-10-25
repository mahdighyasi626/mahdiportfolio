<template>
  <div class="h-60"></div>
  <div class="form-width" data-aos="flip-up" data-aos-delay="200">
    <div>
      {{ resumeData }}
      <h1 class="form-header">Professional Summary</h1>
      <p class="text-xs text-slate-50">Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills.</p>
      <div class="h-5"></div>
      <label for="message" class="label">Your message</label>
      <textarea id="message" rows="8" class="textarea" placeholder="Your message..." v-model="resumeData.professionalSummary.message"></textarea>
      <div class="h-5"></div>
      <div class="flex items-center justify-between">
        <button @click="$emit('changeComponent', 0)" class="btn">Previous</button>
        <button @click="$emit('changeComponent', 2)" class="btn">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['resumeData'],
// props: {
//   isShow: '',
// },
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