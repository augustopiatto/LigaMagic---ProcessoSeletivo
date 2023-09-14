<template>
  <div class="my-date-field">
    <span class="mdf__title">
      <slot> Date </slot>
    </span>
    <input
      v-bind="$attrs"
      :value="$attrs.modelValue"
      type="date"
      class="mdf__input"
      @change="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>

<style lang="scss" scoped>
.my-date-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 300px;
  min-width: 100px;

  .mdf__title {
    font-size: 20px;
    font-weight: 600;
  }

  .mdf__input {
    border: 1px solid;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 16px;
  }
}
</style>
