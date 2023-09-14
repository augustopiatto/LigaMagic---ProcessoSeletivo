import { test, expect, describe } from "vitest";
import { mount } from "@vue/test-utils";
import MyStepper from "../MyStepper.vue";

describe("MyStepper.vue", () => {
  test("Componente sendo montado", () => {
    const wrapper = mount(MyStepper, {});
    const submitButtons = wrapper.findAll("button");
    const steps = wrapper.findAll(".sh__step--whole");

    expect(submitButtons.length).toBe(2);
    expect(submitButtons[1].text()).toBe("Avançar");
    expect(steps.length).toBe(3);
  });

  test("Componente com props secondary", () => {
    const wrapper = mount(MyStepper, {
      propsData: {
        secondary: true,
      },
    });

    expect(wrapper.classes()).toEqual(expect.arrayContaining(["secondary"]));
  });

  test("Componente no último passo tem botão de enviar", () => {
    const wrapper = mount(MyStepper, {
      propsData: {
        currentStep: 2,
      },
    });
    const submitButtons = wrapper.findAll("button");

    expect(submitButtons[1].text()).toBe("Enviar");
  });
});
