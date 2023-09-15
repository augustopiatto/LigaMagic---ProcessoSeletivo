import { test, expect, describe } from "vitest";
import { mount } from "@vue/test-utils";
import MyCheckbox from "../MyCheckbox.vue";

describe("MyCheckbox.vue", () => {
  test("Componente sendo montado", () => {
    const wrapper = mount(MyCheckbox);
    expect(wrapper).toBeTruthy();
  });

  test("Componente checkado", async () => {
    const wrapper = mount(MyCheckbox, {});
    const checkboxInput = wrapper.find('input[type="checkbox"]');

    await checkboxInput.setChecked();
    expect(wrapper.emitted("update:modelValue")).toEqual([[true]]);
    expect(checkboxInput.element.checked).toBe(true);
  });
});
