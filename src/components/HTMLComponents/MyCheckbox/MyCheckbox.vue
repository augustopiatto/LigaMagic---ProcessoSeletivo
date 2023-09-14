<template>
  <div class="my-checkbox">
    <input
      v-bind="$attrs"
      v-model="model"
      :id="value"
      type="checkbox"
      class="mc__input"
      :value="value"
    />
    <label class="mc__label" :for="value">
      <slot> Check me </slot>
    </label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      required: false,
      type: String,
    },
  },
  computed: {
    model: {
      get() {
        return this.$attrs.modelValue;
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

  .mc__input {
    height: 25px;
    width: 25px;
    border-radius: 2px;
  }
  .mc__label {
    font-size: 18px;
    line-height: 20px;
    margin-left: 4px;
  }
}
</style>
