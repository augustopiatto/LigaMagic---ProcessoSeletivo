<template>
  <MyStepper
    :currentStep="currentStep"
    :items="steps"
    @next="next"
    @previous="previous"
    secondary
  >
    <template v-slot:content="{ step }">
      <MyDateField v-show="step === 0" v-model="standardDate"
        >Escolha uma data</MyDateField
      >
      <MyDateField v-show="step === 1" v-model="modernDate"
        >Escolha uma data</MyDateField
      >
      <MyDateField v-show="step === 2" v-model="pauperDate"
        >Escolha uma data</MyDateField
      >
      <p v-if="error" class="error-message">{{ error }}</p>
    </template>
  </MyStepper>
</template>

<script setup>
import MyDateField from "../HTMLComponents/MyDateField/MyDateField.vue";
import MyStepper from "../HTMLComponents/MyStepper/MyStepper.vue";
import { secondaryStepperNextStep } from "../../helpers/validations.js";
import { ref } from "vue";

const currentStep = ref(0);
const error = ref("");
const modernDate = ref("");
const pauperDate = ref("");
const steps = ref(["Standard", "Modern", "Pauper"]);
const standardDate = ref("");

defineExpose({
  //: next só está aqui por causa do teste que não tinha visibilidade deste método
  next,
  reset,
  validate,
  error,
  modernDate,
  pauperDate,
  standardDate,
});

function increase() {
  if (currentStep.value <= steps.value.length - 2) {
    currentStep.value += 1;
  }
  error.value = "";
}

function next() {
  const { errorMessage, shouldIncrease } = secondaryStepperNextStep(
    currentStep.value,
    standardDate.value,
    modernDate.value
  );
  if (shouldIncrease) return increase();
  error.value = errorMessage;
}

function previous() {
  if (currentStep.value > 0) {
    currentStep.value -= 1;
  }
}

function reset() {
  currentStep.value = 0;
  modernDate.value = "";
  pauperDate.value = "";
  standardDate.value = "";
  error.value = "";
}

function validate() {
  return !!pauperDate.value;
}
</script>
