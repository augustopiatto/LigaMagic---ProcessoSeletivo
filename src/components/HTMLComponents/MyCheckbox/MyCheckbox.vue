<template>
  <div class="my-checkbox">
    <input
      v-bind="$attrs"
      v-model="model"
      class="mc__input"
      type="checkbox"
      :id="value"
      :value="value"
    />
    <label class="mc__label" :for="value">
      <slot> Check me </slot>
    </label>
  </div>
</template>

<script setup>
import { computed, useAttrs } from "vue";

const attrs = useAttrs();
const emit = defineEmits(["update:modelValue"]);

defineOptions({
  inheritAttrs: false,
});

defineProps({
  value: {
    required: false,
    type: String,
  },
});

const model = computed({
  get: () => attrs.modelValue,
  set: (value) => emit("update:modelValue", value),
});
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
