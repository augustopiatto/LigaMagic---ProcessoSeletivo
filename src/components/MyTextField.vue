<template>
  <div class="my-text-field">
    <span class="mtf__title">
      <slot> Field </slot>
    </span>
    <input
      v-model="text"
      class="mtf__input"
      @input="$emit('update:modelValue', text)"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.my-text-field {
  display: flex;
  flex-direction: column;
  gap: 8px;

  .mtf__title {
    font-size: 20px;
    font-weight: 600;
  }

  .mtf__input {
    border-radius: 4px;
    border: 1px solid;
    padding: 8px 16px;
    font-size: 16px;
  }
}
</style>
