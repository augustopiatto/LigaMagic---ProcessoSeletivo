<template>
  <div class="my-text-field">
    <span class="mtf__title">
      <slot> Field </slot>
    </span>
    <input v-model="model" class="mtf__input" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      required: true,
      type: String,
    },
  },
  computed: {
    model: {
      get() {
        return this.$props.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.my-text-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 300px;
  min-width: 100px;

  .mtf__title {
    font-size: 20px;
    font-weight: 600;
  }

  .mtf__input {
    border: 1px solid;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 16px;
  }
}
</style>
