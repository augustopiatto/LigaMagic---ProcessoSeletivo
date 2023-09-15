import { test, expect, describe } from "vitest";
import { mount } from "@vue/test-utils";
import MyButton from "../MyButton.vue";

describe("MyButton.vue", () => {
  test("Componente sendo montado", () => {
    const wrapper = mount(MyButton);
    expect(wrapper).toBeTruthy();
  });

  test("Componente sem estilo clicável quando desabilitado", () => {
    const wrapper = mount(MyButton, {
      propsData: {
        disabled: true,
      },
    });

    const button = wrapper.find("button");
    expect(button.attributes().disabled).toBeDefined();
    expect(button.classes()).toEqual(expect.arrayContaining(["disabled"]));
  });
});
