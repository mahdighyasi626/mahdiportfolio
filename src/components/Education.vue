<template>
  <div class="h-60"></div>
  <div class="form-width" data-aos="flip-up" data-aos-delay="200">

    <table>
      <thead>
        <tr>
          <th>School</th>
          <th>Degree</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="edu in resumeData.education" :key="edu.id">
          <td>{{edu.school}}</td>
          <td>{{edu.degree}}</td>
        </tr>
      </tbody>
    </table>

    <h1 class="form-header">Education</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div>
        <label class="label" for="first-name">
          School*
        </label>
        <input class="input" type="text" id="first-name" v-model="educationData.school">
      </div>
      <div>
        <label class="label" for="last-name">
          Degree*
        </label>
        <input class="input" id="last-name" type="text" v-model="educationData.degree">
      </div>
    </div>
    <div class="h-5"></div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
        <label class="label" for="first-name">
          Start Date*
        </label>
        <input class="input" type="date" id="first-name">
      </div>
      <div>
        <label class="label" for="last-name">
          End Date*
        </label>
        <input class="input" id="last-name" type="date">
      </div>
      </div>
      <div>
        <label class="label" for="last-name">
        City
        </label>
        <input class="input" id="last-name" type="text">
    </div>
  </div>
  <div class="h-1"></div>
      <label for="message" class="label">Your message</label>
      <textarea id="message" rows="8" class="textarea" placeholder="Your message..."></textarea>
      <div class="h-5"></div>
      <div class="flex items-center justify-between">
        <button @click="$emit('changeComponent', 2)" class="btn">Previous</button>
        <button @click="$emit('changeComponent', 4)" class="btn">Next</button>
        <button @click="saveData" class="btn">Save</button>
      </div>
  </div>
</template>

<script>
export default {
props: ['resumeData'],
data() {
  return {
    educationData: {},
  }
},
methods: {
  saveData() {
    this.resumeData.education.push(this.educationData)
    this.educationData = {}

  }
},
}
</script>

<style>

</style>