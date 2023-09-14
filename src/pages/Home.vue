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
      <p v-if="error" class="error-message">{{ error }}</p>
    </template>
  </MyStepper>
</template>

<script>
import MyCheckbox from "../components/HTMLComponents/MyCheckbox/MyCheckbox.vue";
import MyRadio from "../components/HTMLComponents/MyRadio/MyRadio.vue";
import MyStepper from "../components/HTMLComponents/MyStepper/MyStepper.vue";
import MyTextField from "../components/HTMLComponents/MyTextField/MyTextField.vue";
import LastStep from "../components/LastStep.vue";

export default {
  components: {
    MyCheckbox,
    MyStepper,
    MyRadio,
    MyTextField,
    LastStep,
  },
  data() {
    return {
      checkboxValue: [],
      currentSep: 0,
      error: "",
      name: "",
      radioItems: [
        { label: "Sim", value: "yes" },
        { label: "Não", value: "no" },
      ],
      radioValue: "",
      steps: ["Formato", "Questionário", "Pagamento", "Torneio"],
    };
  },
  watch: {
    name() {
      console.log(this.name);
    },
  },
  methods: {
    increase() {
      if (this.currentSep <= this.steps.length - 2) {
        this.currentSep += 1;
      }
      this.error = "";
    },
    next() {
      if (this.currentSep === 0) {
        if (this.checkboxValue.length > 0) {
          this.increase();
          return;
        }
        this.error = "Selecione pelo menos um dos valores";
      } else if (this.currentSep === 1) {
        if (!!this.radioValue) {
          this.increase();
          return;
        }
        this.error = "Selecione uma resposta";
      } else if (this.currentSep === 2) {
        if (!!this.name) {
          this.increase();
          return;
        }
        this.error = "Digite seu nome";
      }
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
      this.error = "";
      this.$refs.lastStep.reset();
    },
    submit() {
      if (!this.$refs.lastStep.validate()) {
        this.$refs.lastStep.error = "Está faltando o campo de data";
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
      console.log("Body a ser enviado para API", obj);
      this.reset();
      this.$refs.lastStep.reset();
      this.currentSep = 0;
    },
  },
};
</script>
