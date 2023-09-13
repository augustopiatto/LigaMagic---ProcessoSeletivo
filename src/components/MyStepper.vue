<template>
  <div class="stepper">
    <div class="s__header">
      <div v-for="item in items" :key="item" class="sh__step--whole">
        <div class="shs__step-format" />
        <!-- <div v-if="isLastItem(item)" class="shs__step-divider" /> -->
        <!-- <slot name="item1">{{ item }}</slot> -->
      </div>
    </div>
    <div class="s__content">
      <slot name="content" :step="currentStep" />
    </div>
    <div class="s__actions">
      <slot name="actions">
        <MyButton
          class="sa__secondary"
          :disabled="this.currentStep === 0"
          @click="previous"
          >Voltar</MyButton
        >
        <MyButton v-if="!isLastStep" class="sa__primary" @click="next"
          >Avançar</MyButton
        >
        <MyButton v-if="isLastStep" class="sa__primary" @click="submit"
          >Enviar</MyButton
        >
      </slot>
    </div>
  </div>
</template>

<script>
import MyButton from "./MyButton.vue";

export default {
  props: {
    items: {
      default: ["Step 1", "Step 2", "Step 3"],
      type: Array,
    },
  },
  components: {
    MyButton,
  },
  data() {
    return {
      currentStep: 0,
    };
  },
  computed: {
    isLastStep() {
      return this.currentStep === this.items.length - 1;
    },
  },
  methods: {
    isLastItem(item) {
      return item !== this.items[this.items.length - 1];
    },
    next() {
      if (this.currentStep <= this.items.length - 2) {
        this.currentStep += 1;
      }
    },
    previous() {
      if (this.currentStep > 0) {
        this.currentStep -= 1;
      }
    },
    submit() {
      console.log("oi");
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
.stepper {
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid;
  padding: 24px;
  gap: 16px;

  .s__header {
    display: flex;
    flex: row;
    border: 1px solid;

    .sh__step--whole {
      display: flex;
      width: 100%;

      .shs__step-format {
        border-radius: 8px;
        width: 50px;
        height: 50px;
        background-color: grey;
      }
      .shs__step-divider {
        border-top: 20px solid white;
        border-bottom: 20px solid white;
        flex: 1;
        background-color: grey;
      }
    }
  }
  .s__content {
    padding: 16px;
    min-height: 200px;
    border: 1px solid;
  }

  .s__actions {
    display: flex;
    justify-content: space-between;

    .sa__primary {
      background-color: var(--primary-color);
      color: white;
      border: none;
    }
    .sa__secondary {
      border: -2px solid grey;
    }
  }
}
</style>
