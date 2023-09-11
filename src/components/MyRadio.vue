<template>
  <div class="my-radio">
    <span class="mr__title">
      <slot> Pick one </slot>
    </span>
    <div v-for="item in items" :key="item.value" class="mr__all-inputs">
      <input
        type="radio"
        class="mrai__single-input"
        :value="item.value"
        :id="item.value"
        :checked="item.value === modelValue"
        @change="$emit('update:modelValue', item.value)"
      />
      <label :for="item.value" class="mrai__label">{{ item.label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      required: true,
      type: Object,
    },
    modelValue: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.my-radio {
  display: flex;
  flex-direction: column;
  gap: 8px;
  .mr__title {
    font-size: 20px;
    font-weight: 600;
  }
  .mr__all-inputs {
    display: flex;
    align-items: center;
    .mrai__single-input {
      height: 25px;
      width: 25px;
    }
    .mrai__label {
      font-size: 18px;
      line-height: 20px;
      margin-left: 4px;
    }
  }
}
</style>
