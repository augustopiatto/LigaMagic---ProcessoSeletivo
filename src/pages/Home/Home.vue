<template>
  <MyStepper
    :currentStep="currentStep"
    :items="steps"
    @next="next"
    @previous="previous"
    @submit="submit"
  >
    <template v-slot:content="{ step }">
      <div v-show="step === 0">
        <MyCheckbox v-model="checkboxValue" value="Standard"
          >Standard</MyCheckbox
        >
        <MyCheckbox v-model="checkboxValue" value="Modern">Modern</MyCheckbox>
        <MyCheckbox v-model="checkboxValue" value="Pauper">Pauper</MyCheckbox>
      </div>
      <MyRadio v-show="step === 1" v-model="radioValue" :items="radioItems"
        >Você sabe o que é Circuito LigaMagic?</MyRadio
      >
      <MyTextField v-show="step === 2" v-model="name">Nome</MyTextField>
      <LastStep ref="lastStep" v-show="step === 3" />
      <p v-if="error" class="error-message">{{ error }}</p>
    </template>
  </MyStepper>
</template>

<script setup>
import MyCheckbox from "../../components/HTMLComponents/MyCheckbox/MyCheckbox.vue";
import MyRadio from "../../components/HTMLComponents/MyRadio/MyRadio.vue";
import MyStepper from "../../components/HTMLComponents/MyStepper/MyStepper.vue";
import MyTextField from "../../components/HTMLComponents/MyTextField/MyTextField.vue";
import LastStep from "../../components/LastStep/LastStep.vue";
import { mainStepperNextStep } from "../../helpers/validations.js";
import { ref } from "vue";

const checkboxValue = ref([]);
const currentStep = ref(0);
const error = ref("");
const lastStep = ref(null);
const name = ref("");
const radioItems = ref([
  { label: "Sim", value: "yes" },
  { label: "Não", value: "no" },
]);
const radioValue = ref("");
const steps = ref(["Formato", "Questionário", "Pagamento", "Torneio"]);

function increase() {
  if (currentStep.value <= steps.value.length - 2) {
    currentStep.value += 1;
  }
  error.value = "";
}

function next() {
  const { errorMessage, shouldIncrease } = mainStepperNextStep(
    currentStep.value,
    checkboxValue.value,
    radioValue.value,
    name.value
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
  checkboxValue.value = [];
  radioValue.value = "";
  name.value = "";
  error.value = "";
  lastStep.value.reset();
}

function submit() {
  if (!lastStep.value.validate()) {
    lastStep.value.error = "Está faltando o campo de data";
    return;
  }
  //: Para ser enviado ao back
  const obj = {
    checkboxValue: checkboxValue.value,
    radioValue: radioValue.value,
    name: name.value,
    tournamentDates: {
      modernDate: lastStep.value.modernDate,
      pauperDate: lastStep.value.pauperDate,
      standardDate: lastStep.value.standardDate,
    },
  };
  console.log(window.alert("Formulário enviado!"));
  reset();
  currentStep.value = 0;
}
</script>
