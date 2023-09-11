<template>
  <div class="my-checkbox">
    <input
      v-model="model"
      type="checkbox"
      class="mc__checkbox"
      :value="value"
    />
    <span class="mc__label">
      <slot> Check me </slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      required: true,
      type: Array,
    },
    value: {
      required: false,
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
.my-checkbox {
  display: flex;
  align-items: center;
  margin: 8px 0;

  .mc__checkbox {
    height: 25px;
    width: 25px;
    border-radius: 2px;
  }
  .mc__label {
    font-size: 20px;
    line-height: 25px;
    margin-left: 4px;
  }
}
</style>
