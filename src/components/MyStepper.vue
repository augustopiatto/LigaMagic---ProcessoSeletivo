<template>
  <div class="stepper">
    <div class="s__header" :class="{ secondary: secondary }">
      <div
        v-for="(item, idx) in items"
        :key="item"
        class="sh__step--whole"
        :class="{ active: idx < currentStep, secondary: secondary }"
      >
        <div
          class="shs__step--format"
          :class="{ active: idx === currentStep, secondary: secondary }"
        />
        <span
          class="shs__step--title"
          :class="{ active: idx === currentStep, secondary: secondary }"
          >{{ item }}</span
        >
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
    secondary: {
      required: false,
      type: Boolean,
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
  border: 1px solid rgb(194, 194, 194);
  box-shadow: 0 1px 4px 1px rgb(194, 194, 194);
  border-radius: 4px;
  gap: 16px;
  min-width: 320px;

  // Estilos primários
  .s__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(194, 194, 194);
    box-shadow: 0 1px 4px 1px rgb(194, 194, 194);

    .sh__step--whole {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px 0;
      position: relative;
      width: 100%;

      .shs__step--format {
        border-radius: 8px;
        width: 50px;
        height: 50px;
        background-color: grey;
        z-index: 1;
      }
      .shs__step--format.active {
        background-color: rgb(194, 194, 194);
        border: 2px solid grey;
        box-sizing: border-box;
      }

      .shs__step--title {
        margin-top: 8px;
      }
    }

    .sh__step--whole:not(:last-child):after {
      content: "";
      background-color: grey;
      margin-top: 15px;
      height: 20px;
      position: absolute;
      width: 100%;
      left: 50%;
    }
  }

  // Estilos secundários
  .s__header.secondary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: none;
    box-shadow: none;

    .sh__step--whole.secondary {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px 0;
      position: relative;
      width: 100%;

      .shs__step--format.secondary {
        border-radius: 0;
        width: 0;
        height: 20px;
        background-color: none;
        z-index: none;
      }
      .shs__step--format.active.secondary {
        border: 0;
      }

      .shs__step--title.secondary {
        margin-top: 0;
        position: absolute;
        transform: translateY(-50%);
      }

      .shs__step--title.active.secondary {
        font-size: 18px;
        font-weight: 600;
      }
    }

    .sh__step--whole.secondary:not(:last-child):after {
      content: "";
      background-color: rgb(194, 194, 194);
      margin-top: 15px;
      height: 20px;
      position: absolute;
      width: 100%;
      left: 50%;
    }
    .sh__step--whole.active.secondary:not(:last-child):after {
      background-color: grey;
    }
  }

  .s__content {
    padding: 8px 24px;
    min-height: 200px;
  }

  .s__actions {
    display: flex;
    justify-content: space-between;
    padding: 24px;

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
