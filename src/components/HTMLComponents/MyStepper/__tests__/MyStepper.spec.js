import { test, expect, describe } from "vitest";
import { mount } from "@vue/test-utils";
import MyStepper from "../MyStepper.vue";

describe("MyStepper.vue", () => {
  test("Componente sendo montado", () => {
    const wrapper = mount(MyStepper, {});

    // expect(wrapper.getAttribute("checked")).toBe(false);
  });
});
