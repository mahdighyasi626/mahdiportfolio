<template>
  <div class="h-60"></div>
  <div class="form-width" data-aos="flip-up" data-aos-delay="200">
    <h1 class="form-header">Websites & Social Links</h1>
    <p class="text-xs text-slate-50">You can add links to websites you want hiring managers to see! Perhaps It will be a link to your portfolio, LinkedIn profile, or personal website</p>
    <div class="h-5"></div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div>
        <label class="label" for="first-name">
          Label
        </label>
        <input class="input" type="text" id="first-name">
      </div>
      <div>
        <label class="label" for="last-name">
          Link
        </label>
        <input class="input" id="last-name" type="text">
      </div>
    </div>
    <div class="flex items-center justify-between">
        <button @click="$emit('changeComponent', 3)" class="btn">Previous</button>
        <button @click="$emit('ChangeComponent', 5)" class="btn">Next</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>