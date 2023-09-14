import { test, expect, describe } from "vitest";
import { mount } from "@vue/test-utils";
import MyCheckbox from "../MyCheckbox.vue";

describe("MyCheckbox.vue", () => {
  test("Componente sendo montado", () => {
    const wrapper = mount(MyCheckbox, {});
    const checkboxInput = wrapper.find('input[type="checkbox"]');

    expect(checkboxInput.element.checked).toBe(false);
  });

  test("Componente checkado", async () => {
    const wrapper = mount(MyCheckbox, {});
    const checkboxInput = wrapper.find('input[type="checkbox"]');

    await checkboxInput.setChecked();

    expect(checkboxInput.element.checked).toBe(true);
  });
});
