<script>
  import PersonalDetails from '../components/PersonalDetails.vue';
  import ProfessionalSummary from '../components/ProfessionalSummary.vue'
  import EmploymentHistory from '../components/EmploymentHistory.vue';
  import Education from '../components/Education.vue';
  import SocialLinks from '../components/SocialLinks.vue';
  import PersonSkills from '../components/PersonSkills.vue'
  import Certificates from '../components/Certificates.vue'

export default {
  components: {
    PersonalDetails,
    ProfessionalSummary,
    EmploymentHistory, 
    Education, 
    SocialLinks, 
    PersonSkills, 
    Certificates
  },

  data() {
    return {
      activeComponent: 'PersonalDetails',
      allComponents: ['PersonalDetails', 'ProfessionalSummary', 'EmploymentHistory', 'Education', 'SocialLinks', 'PersonSkills', 'Certificates'],
      resumeData: {
        personalDetails: {},
        professionalSummary: {},
        education: []
      },
    }
  },

  methods: {
    changeComponent(index) {
      this.activeComponent = this.allComponents[index]
    }
  },

}
</script>

<template>
  <div class="bg-blue-10 min-h-screen">
  <component :is="activeComponent" :resumeData="resumeData" @change-component="changeComponent"></component>
  </div>
</template>


