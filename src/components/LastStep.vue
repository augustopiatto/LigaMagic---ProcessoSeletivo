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

<script setup>
import MyDateField from "../components/HTMLComponents/MyDateField/MyDateField.vue";
import MyStepper from "../components/HTMLComponents/MyStepper/MyStepper.vue";
import { ref } from "vue";

const currentStep = ref(0);
const error = ref("");
const modernDate = ref("");
const pauperDate = ref("");
const steps = ref(["Standard", "Modern", "Pauper"]);
const standardDate = ref("");

defineExpose({
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
  if (currentStep.value === 0) {
    if (!!standardDate.value) {
      increase();
      return;
    }
  } else if (currentStep.value === 1) {
    if (!!modernDate.value) {
      increase();
      return;
    }
  }
  error.value = "Preencha a data";
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
  if (!pauperDate.value) {
    return false;
  }
  return true;
}
</script>
