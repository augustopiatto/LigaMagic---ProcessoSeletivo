import { test, expect, describe } from "vitest";
import { mount } from "@vue/test-utils";
import MyButton from "../MyButton.vue";

describe("MyButton.vue", () => {
  test("Componente sendo montado", () => {
    const wrapper = mount(MyButton, {
      propsData: {
        disabled: false,
      },
    });

    expect(wrapper.props().disabled).toBe(false);
  });

  test("Componente sem estilo clicável quando desabilitado", () => {
    const wrapper = mount(MyButton, {
      propsData: {
        disabled: true,
      },
    });

    expect(wrapper.classes()).toEqual(expect.arrayContaining(["disabled"]));
  });
});
