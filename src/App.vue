<template>
  <MyStepper>
    <template v-slot:content>
      <!-- step1
      <MyCheckbox v-model="checkboxValue" value="Standard">Standard</MyCheckbox>
      <MyCheckbox v-model="checkboxValue" value="Modern">Modern</MyCheckbox>
      <MyCheckbox v-model="checkboxValue" value="Pauper">Pauper</MyCheckbox> -->
      <!-- step 2
      <MyRadio v-model="radioValue" :items="radioItems"
        >Você sabe o que é Circuito LigaMagic?</MyRadio
      > -->
      <!-- step 3
      <MyTextField v-model="name">Nome</MyTextField> -->
      <MyDateField v-model="date">Escolha uma data</MyDateField>
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
    };
  },
  watch: {
    date() {
      console.log(this.date);
    },
  },
};
</script>
