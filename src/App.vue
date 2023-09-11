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
      <MyTextField></MyTextField>
    </template>
  </MyStepper>
</template>

<script>
import MyCheckbox from "./components/MyCheckbox.vue";
import MyRadio from "./components/MyRadio.vue";
import MyStepper from "./components/MyStepper.vue";
import MyTextField from "./components/MyTextField.vue";

export default {
  components: {
    MyCheckbox,
    MyStepper,
    MyRadio,
    MyTextField,
  },
  data() {
    return {
      checkboxValue: [],
      radioItems: [
        { label: "Sim", value: "yes" },
        { label: "Não", value: "no" },
      ],
      radioValue: "",
    };
  },
};
</script>
