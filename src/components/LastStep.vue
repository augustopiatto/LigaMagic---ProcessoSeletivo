<template>
  <MyStepper
    :currentStep="currentStep"
    :items="steps"
    @next="next"
    @previous="previous"
    secondary
  >
    <template v-slot:content="{ step }">
      <div v-show="step === 0">
        <MyDateField v-model="standardDate">Escolha uma data</MyDateField>
      </div>
      <div v-show="step === 1">
        <MyDateField v-model="modernDate">Escolha uma data</MyDateField>
      </div>
      <div v-show="step === 2">
        <MyDateField v-model="pauperDate">Escolha uma data</MyDateField>
      </div>
      <p v-if="error" class="error-message">{{ error }}</p>
    </template>
  </MyStepper>
</template>

<script>
import MyDateField from "../components/HTMLComponents/MyDateField/MyDateField.vue";
import MyStepper from "../components/HTMLComponents/MyStepper/MyStepper.vue";

export default {
  components: {
    MyDateField,
    MyStepper,
  },
  data() {
    return {
      currentStep: 0,
      error: "",
      modernDate: "",
      pauperDate: "",
      steps: ["Standard", "Modern", "Pauper"],
      standardDate: "",
    };
  },
  methods: {
    increaseSecondary() {
      if (this.currentStep <= this.steps.length - 2) {
        this.currentStep += 1;
      }
      this.error = "";
    },
    next() {
      if (this.currentStep === 0) {
        if (!!this.standardDate) {
          this.increaseSecondary();
          return;
        }
      } else if (this.currentStep === 1) {
        if (!!this.modernDate) {
          this.increaseSecondary();
          return;
        }
      }
      this.error = "Preencha a data";
    },
    previous() {
      if (this.currentStep > 0) {
        this.currentStep -= 1;
      }
    },
    reset() {
      this.currentStep = 0;
      this.modernDate = "";
      this.pauperDate = "";
      this.standardDate = "";
      this.error = "";
    },
    validate() {
      if (!this.pauperDate) {
        return false;
      }
      return true;
    },
  },
};
</script>
