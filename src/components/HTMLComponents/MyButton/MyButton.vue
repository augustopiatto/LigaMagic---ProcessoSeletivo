<template>
  <button class="button" :class="{ disabled: disabled }" :disabled="disabled">
    <slot> Click Me </slot>
  </button>
</template>

<script setup>
defineProps({
  disabled: {
    default: false,
    type: Boolean,
  },
});
</script>

<style lang="scss" scoped>
.button {
  font-size: 16px;
  font-weight: 600;
  padding: 16px 24px;
  text-transform: uppercase;
  background-color: transparent;
  border-radius: 4px;
  border: -1px solid;
  cursor: pointer;
}

.button.disabled {
  cursor: auto;
}
</style>
