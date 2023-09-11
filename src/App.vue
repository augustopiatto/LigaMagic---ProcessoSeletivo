<template>
  <MyStepper>
    <template v-slot:content>
      <!-- step1
      <MyCheckbox v-model="checkboxValue" value="Standard">Standard</MyCheckbox>
      <MyCheckbox v-model="checkboxValue" value="Modern">Modern</MyCheckbox>
      <MyCheckbox v-model="checkboxValue" value="Pauper">Pauper</MyCheckbox> -->
      <MyRadio v-model="radioValue" :items="radioItems"
        >Você sabe o que é Circuito LigaMagic?</MyRadio
      >
    </template>
  </MyStepper>
</template>

<script>
import MyCheckbox from "./components/MyCheckbox.vue";
import MyRadio from "./components/MyRadio.vue";
import MyStepper from "./components/MyStepper.vue";

export default {
  components: {
    MyCheckbox,
    MyStepper,
    MyRadio,
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
  watch: {
    radioValue() {
      console.log(this.radioValue);
    },
  },
};
</script>
