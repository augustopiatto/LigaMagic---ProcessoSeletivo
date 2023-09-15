<template>
  <div class="my-radio">
    <span class="mr__title">
      <slot> Pick one </slot>
    </span>
    <label
      v-for="item in items"
      :key="item.value"
      :for="item.value"
      class="mr__label"
    >
      <input
        v-bind="$attrs"
        class="mrl__single-input"
        name="radio"
        type="radio"
        :checked="item.value === $attrs.modelValue"
        :id="item.value"
        :value="item.value"
        @change="$emit('update:modelValue', item.value)"
      />

      {{ item.label }}</label
    >
  </div>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  items: {
    required: true,
    type: Array,
  },
});
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

  .mr__label {
    font-size: 18px;
    line-height: 20px;
    margin-left: 4px;
    display: flex;
    align-items: center;
    gap: 8px;

    .mrl__single-input {
      height: 25px;
      width: 25px;
    }
  }
}
</style>
