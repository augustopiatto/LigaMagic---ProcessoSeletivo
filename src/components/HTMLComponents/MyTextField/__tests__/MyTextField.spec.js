import { test, expect, describe } from "vitest";
import { mount } from "@vue/test-utils";
import MyTextField from "../MyTextField.vue";

describe("MyTextField.vue", () => {
  test("Componente sendo montado", () => {
    const wrapper = mount(MyTextField, {});

    // expect(wrapper.getAttribute("checked")).toBe(false);
  });
});
