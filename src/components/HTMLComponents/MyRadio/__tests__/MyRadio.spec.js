import { test, expect, describe } from "vitest";
import { mount } from "@vue/test-utils";
import MyRadio from "../MyRadio.vue";

describe("MyRadio.vue", () => {
  test("Componente sendo montado", () => {
    const wrapper = mount(MyRadio, {});

    // expect(wrapper.getAttribute("checked")).toBe(false);
  });
});
