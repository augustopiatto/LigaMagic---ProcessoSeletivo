<template>
  <MyStepper
    :currentStep="currentSep"
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
      <div v-show="step === 1">
        <MyRadio v-model="radioValue" :items="radioItems"
          >Você sabe o que é Circuito LigaMagic?</MyRadio
        >
      </div>
      <div v-show="step === 2">
        <MyTextField v-model="name">Nome</MyTextField>
      </div>
      <div v-show="step === 3">
        <LastStep ref="lastStep" />
      </div>
    </template>
  </MyStepper>
</template>

<script>
import MyCheckbox from "../components/HTMLComponents/MyCheckbox/MyCheckbox.vue";
import MyDateField from "../components/HTMLComponents/MyDateField/MyDateField.vue";
import MyRadio from "../components/HTMLComponents/MyRadio/MyRadio.vue";
import MyStepper from "../components/HTMLComponents/MyStepper/MyStepper.vue";
import MyTextField from "../components/HTMLComponents/MyTextField/MyTextField.vue";
import LastStep from "../components/LastStep.vue";

export default {
  components: {
    MyCheckbox,
    MyDateField,
    MyStepper,
    MyRadio,
    MyTextField,
    LastStep,
  },
  data() {
    return {
      checkboxValue: [],
      currentSep: 0,
      name: "",
      radioItems: [
        { label: "Sim", value: "yes" },
        { label: "Não", value: "no" },
      ],
      radioValue: "",
      steps: ["Formato", "Questionário", "Pagamento", "Torneio"],
    };
  },
  methods: {
    increase() {
      if (this.currentSep <= this.steps.length - 2) {
        this.currentSep += 1;
      }
    },
    next() {
      if (this.currentSep === 0) {
        if (this.checkboxValue.length > 0) {
          this.increase();
          return;
        }
      } else if (this.currentSep === 1) {
        if (!!this.radioValue) {
          this.increase();
          return;
        }
      } else if (this.currentSep === 2) {
        if (!!this.name) {
          this.increase();
          return;
        }
      }
      console.log("vazio!");
    },

    previous() {
      if (this.currentSep > 0) {
        this.currentSep -= 1;
      }
    },
    reset() {
      this.checkboxValue = [];
      this.radioValue = "";
      this.name = "";
      this.modernDate = "";
      this.pauperDate = "";
      this.standardDate = "";
      this.$refs.lastStep.reset();
    },
    submit() {
      if (!this.$refs.lastStep.validate()) {
        console.log("vazio!");
        return;
      }
      const obj = {
        checkboxValue: this.checkboxValue,
        radioValue: this.radioValue,
        name: this.name,
        tournamentDates: {
          modernDate: this.modernDate,
          pauperDate: this.pauperDate,
          standardDate: this.standardDate,
        },
      };
      console.log(obj);
      this.reset();
      this.$refs.lastStep.reset();
      this.currentSep = 0;
    },
  },
};
</script>
