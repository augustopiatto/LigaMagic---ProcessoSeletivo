<template>
  <MyStepper :items="steps">
    <template v-slot:content="{ step }">
      <div v-if="step === 0">
        <MyCheckbox v-model="checkboxValue" value="Standard"
          >Standard</MyCheckbox
        >
        <MyCheckbox v-model="checkboxValue" value="Modern">Modern</MyCheckbox>
        <MyCheckbox v-model="checkboxValue" value="Pauper">Pauper</MyCheckbox>
      </div>
      <div v-if="step === 1">
        <MyRadio v-model="radioValue" :items="radioItems"
          >Você sabe o que é Circuito LigaMagic?</MyRadio
        >
      </div>
      <div v-if="step === 2">
        <MyTextField v-model="name">Nome</MyTextField>
      </div>
      <div v-if="step === 3">
        <MyDateField v-model="date">Escolha uma data</MyDateField>
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
      date: "",
      name: "",
      radioItems: [
        { label: "Sim", value: "yes" },
        { label: "Não", value: "no" },
      ],
      radioValue: "",
      steps: ["Formato", "Questionário", "Pagamento", "Torneio"],
    };
  },
};
</script>
