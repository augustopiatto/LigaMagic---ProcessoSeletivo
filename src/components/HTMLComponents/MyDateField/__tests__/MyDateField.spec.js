import { test, expect, describe } from "vitest";
import { mount } from "@vue/test-utils";
import MyDateField from "../MyDateField.vue";

describe("MyDateField.vue", () => {
  test("Componente sendo montado", () => {
    const wrapper = mount(MyDateField, {});
    const dateInput = wrapper.find('input[type="date"]');

    expect(dateInput.element.value).toBe("");
  });

  test("Data escolhida", async () => {
    const wrapper = mount(MyDateField, {});
    const dateInput = wrapper.find('input[type="date"]');

    await dateInput.setValue("2023-01-01");

    expect(dateInput.element.value).toBe("2023-01-01");
  });
});
