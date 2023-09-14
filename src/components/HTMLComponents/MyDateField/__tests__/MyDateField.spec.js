import { test, expect, describe } from "vitest";
import { mount } from "@vue/test-utils";
import MyDateField from "../MyDateField.vue";

describe("MyDateField.vue", () => {
  test("Componente sendo montado", () => {
    const wrapper = mount(MyDateField, {});

    // expect(wrapper.getAttribute("checked")).toBe(false);
  });
});
