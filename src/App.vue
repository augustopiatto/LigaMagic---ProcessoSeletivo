<template>
  <MyStepper>
    <template v-slot:content>
      <MyCheckbox v-model="checkboxValue" value="Standard">Standard</MyCheckbox>
      <MyCheckbox v-model="checkboxValue" value="Modern">Modern</MyCheckbox>
      <MyCheckbox v-model="checkboxValue" value="Pauper">Pauper</MyCheckbox>
    </template>
  </MyStepper>
</template>

<script>
import MyCheckbox from "./components/MyCheckbox.vue";
import MyStepper from "./components/MyStepper.vue";

export default {
  components: {
    MyCheckbox,
    MyStepper,
  },
  data() {
    return {
      checkboxValue: [],
    };
  },
  methods: {
    teste() {
      console.log(this.checkboxStandard);
    },
  },
};
</script>
