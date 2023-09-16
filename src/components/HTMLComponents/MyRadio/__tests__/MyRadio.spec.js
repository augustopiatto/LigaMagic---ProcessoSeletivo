import { test, expect, describe } from "vitest";
import { mount } from "@vue/test-utils";
import MyRadio from "../MyRadio.vue";

describe("MyRadio.vue", () => {
  test("Componente sendo montado", () => {
    const wrapper = mount(MyRadio);
    expect(wrapper).toBeTruthy();
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

    const radioInputs = wrapper.findAll('input[type="radio');
    const yes = radioInputs.at(0);
    const no = radioInputs.at(1);

    expect(yes.element.checked).toBe(false);
    expect(no.element.checked).toBe(false);

    await no.setChecked(true);

    expect(wrapper.emitted("update:modelValue")).toEqual([["no"]]);
    expect(yes.element.checked).toBe(false);
    expect(no.element.checked).toBe(true);
  });
});
