<template>
  <MyStepper :items="mainSteps">
    <template v-slot:content="{ step }">
      <div v-show="step === 0">
        <MyCheckbox v-model="checkboxValue" value="Standard"
          >Standard</MyCheckbox
        >
        <MyCheckbox v-model="checkboxValue" value="Modern">Modern</MyCheckbox>
        <MyCheckbox v-model="checkboxValue" value="Pauper">Pauper</MyCheckbox>
      </div>
      <div v-show="step === 1">
        <MyRadio v-model="radioValue" :items="radioItems"
          >Você sabe o que é Circuito LigaMagic?</MyRadio
        >
      </div>
      <div v-show="step === 2">
        <MyTextField v-model="name">Nome</MyTextField>
      </div>
      <div v-show="step === 3">
        <MyStepper :items="secondarySteps">
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
          </template>
        </MyStepper>
      </div>
    </template>
  </MyStepper>
</template>

<script>
import MyCheckbox from "./components/MyCheckbox.vue";
import MyDateField from "./components/MyDateField.vue";
import MyRadio from "./components/MyRadio.vue";
import MyStepper from "./components/MyStepper.vue";
import MyTextField from "./components/MyTextField.vue";

export default {
  components: {
    MyCheckbox,
    MyDateField,
    MyStepper,
    MyRadio,
    MyTextField,
  },
  data() {
    return {
      checkboxValue: [],
      modernDate: "",
      pauperDate: "",
      name: "",
      radioItems: [
        { label: "Sim", value: "yes" },
        { label: "Não", value: "no" },
      ],
      radioValue: "",
      mainSteps: ["Formato", "Questionário", "Pagamento", "Torneio"],
      secondarySteps: ["Standard", "Modern", "Pauper"],
      standardDate: "",
    };
  },
};
</script>
