<template>
  <div class="stepper">
    <div class="s__header">
      <div class="sh__step-format" />
      <slot name="item1">Formato</slot>
      <div class="sh__step-format" />
      <slot name="item2">Questionário</slot>
      <div class="sh__step-format" />
      <slot name="item3">Pagamento</slot>
      <div class="sh__step-format" />
      <slot name="item4">Torneio</slot>
    </div>
    <div class="s__content">
      <slot name="content"></slot>
    </div>
    <div class="s__actions">
      <slot name="actions">
        <button class="button secondary" @click="close">Fechar</button>
        <button v-if="step < items.length" class="button primary" @click="next">
          Avançar
        </button>
        <button
          v-if="step === items.length"
          class="button primary"
          @click="submit"
        >
          Enviar
        </button>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      default: ["Step 1", "Step 2", "Step 3"],
      type: Array,
    },
  },
  data() {
    return {
      step: 1,
    };
  },
  methods: {
    next() {
      this.step += 1;
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

    .sh__step-format {
      border-radius: 8px;
      width: 50px;
      height: 50px;
      background-color: grey;
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
  }
}
</style>
