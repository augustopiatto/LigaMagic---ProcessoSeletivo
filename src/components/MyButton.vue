<template>
  <button class="button">
    <slot> Click Me </slot>
  </button>
</template>

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
</style>
