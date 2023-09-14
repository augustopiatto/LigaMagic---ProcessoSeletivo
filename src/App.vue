<template>
  <MyStepper
    :currentStep="currentMainStep"
    :items="mainSteps"
    @next="nextMain"
    @previous="previousMain"
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
        <MyStepper
          :currentStep="currentSecondaryStep"
          :items="secondarySteps"
          @next="nextSecondary"
          @previous="previousSecondary"
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
      currentMainStep: 0,
      currentSecondaryStep: 0,
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
  methods: {
    increaseMain() {
      if (this.currentMainStep <= this.mainSteps.length - 2) {
        this.currentMainStep += 1;
      }
    },
    increaseSecondary() {
      if (this.currentSecondaryStep <= this.mainSteps.length - 2) {
        this.currentSecondaryStep += 1;
      }
    },
    nextMain() {
      if (this.currentMainStep === 0) {
        if (this.checkboxValue.length > 0) {
          this.increaseMain();
          return;
        }
      } else if (this.currentMainStep === 1) {
        if (!!this.radioValue) {
          this.increaseMain();
          return;
        }
      } else if (this.currentMainStep === 2) {
        if (!!this.name) {
          this.increaseMain();
          return;
        }
      }
      console.log("vazio!");
    },
    nextSecondary() {
      if (this.currentSecondaryStep === 0) {
        if (!!this.standardDate) {
          this.increaseSecondary();
          return;
        }
      } else if (this.currentSecondaryStep === 1) {
        if (!!this.modernDate) {
          this.increaseSecondary();
          return;
        }
      }
      console.log("vazio!");
    },
    previousMain() {
      if (this.currentMainStep > 0) {
        this.currentMainStep -= 1;
      }
    },
    previousSecondary() {
      if (this.currentSecondaryStep > 0) {
        this.currentSecondaryStep -= 1;
      }
    },
    reset() {
      this.checkboxValue = [];
      this.radioValue = "";
      this.name = "";
      this.modernDate = "";
      this.pauperDate = "";
      this.standardDate = "";
    },
    submit() {
      if (!this.pauperDate) {
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
      this.currentMainStep = 0;
    },
  },
};
</script>
