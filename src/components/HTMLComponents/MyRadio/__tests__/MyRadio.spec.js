import { test, expect, describe } from "vitest";
import { mount } from "@vue/test-utils";
import MyRadio from "../MyRadio.vue";

describe("MyRadio.vue", () => {
  test("Componente sendo montado", () => {
    const wrapper = mount(MyRadio, {
      propsData: {
        items: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
    });

    const yesRadioInput = wrapper.find('input[type="radio", value="yes"]');
    const noRadioInput = wrapper.find('input[type="radio", value="no"]');

    expect(yesRadioInput.element.checked).toBe(false);
    expect(noRadioInput.element.checked).toBe(false);
  });

  test("Selecionando uma das opções", async () => {
    const wrapper = mount(MyRadio, {
      propsData: {
        items: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
    });

    const radioInput = wrapper.find('input[type="radio", value="no"]');

    await radioInput.setChecked(true);

    expect(radioInput.element.checked).toBe(true);
  });
});
