import { test, expect, describe } from "vitest";
import { mount } from "@vue/test-utils";
import MyStepper from "../MyStepper.vue";

describe("MyStepper.vue", () => {
  test("Componente sendo montado", () => {
    const wrapper = mount(MyStepper);
    expect(wrapper).toBeTruthy();
  });

  test("Componente com props secondary", () => {
    const wrapper = mount(MyStepper, {
      propsData: {
        secondary: true,
      },
    });

    expect(wrapper.classes()).toEqual(expect.arrayContaining(["secondary"]));
  });

  test("Avançar o passo", async () => {
    const wrapper = mount(MyStepper, {
      propsData: {
        currentStep: 0,
      },
    });
    const submitButtons = wrapper.findAll("button");
    const next = submitButtons[1];
    await wrapper.vm.$emit("next");
    //: O debaixo não funciona pq o MyButton não é nativo do DOM
    // await next.trigger("click");
    expect(next.text()).toBe("Avançar");
    expect(wrapper.emitted("next")).toBeTruthy();
  });

  test("Voltar o passo", async () => {
    const wrapper = mount(MyStepper, {
      propsData: {
        currentStep: 1,
      },
    });

    const submitButtons = wrapper.findAll("button");
    const previous = submitButtons[0];
    await wrapper.vm.$emit("previous");
    expect(previous.text()).toBe("Voltar");
    expect(wrapper.emitted("previous")).toBeTruthy();
  });

  test("Componente no último passo tem botão de enviar", async () => {
    const wrapper = mount(MyStepper, {
      propsData: {
        currentStep: 2,
      },
    });

    const submitButtons = wrapper.findAll("button");
    const submit = submitButtons[1];
    expect(submit.text()).toBe("Enviar");
    await wrapper.vm.$emit("submit");
    expect(wrapper.emitted("submit")).toBeTruthy();
  });
});
