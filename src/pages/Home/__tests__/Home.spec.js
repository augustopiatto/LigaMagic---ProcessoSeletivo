import { test, expect, describe } from "vitest";
import { mount } from "@vue/test-utils";
import Home from "../Home.vue";
import MyCheckbox from "../../../components/HTMLComponents/MyCheckbox/MyCheckbox.vue";
import MyRadio from "../../../components/HTMLComponents/MyRadio/MyRadio.vue";
import MyTextField from "../../../components/HTMLComponents/MyTextField/MyTextField.vue";
import LastStep from "../../../components/LastStep/LastStep.vue";

describe("Home.vue", () => {
  test("Componente sendo montado", () => {
    const wrapper = mount(Home);
    expect(wrapper).toBeTruthy();
  });

  test("Verifica se os passos estão renderizando corretamente", async () => {
    const wrapper = mount(Home);
    const myCheckboxInputs = wrapper.findAllComponents(MyCheckbox);
    const myRadioInput = wrapper.findComponent(MyRadio);
    const myTextFieldInput = wrapper.findComponent(MyTextField);
    const lastStepInput = wrapper.findComponent(LastStep);

    //: Afinal se usa v-show todos estão renderizados
    expect(myCheckboxInputs.length).toBe(3);
    expect(myRadioInput.exists()).toBe(true);
    expect(myTextFieldInput.exists()).toBe(true);
    expect(lastStepInput.exists()).toBe(true);

    const checkboxesParentElement =
      myCheckboxInputs.at(0).element.parentElement;
    let checkboxesParentElementStyle =
      checkboxesParentElement.style?._attributes?.style?.value;

    //: Testando se está visível, pois o isVisible() não funciona.
    //: Como não há "display: none", está correto
    expect(checkboxesParentElementStyle).toBe();
    expect(myRadioInput.attributes("style")).toBe("display: none;");
    expect(myTextFieldInput.attributes("style")).toBe("display: none;");
    expect(lastStepInput.attributes("style")).toBe("display: none;");

    await myCheckboxInputs.at(0).setValue("Standard");
    await wrapper.vm.next();
    checkboxesParentElementStyle =
      checkboxesParentElement.style?._attributes?.style?.value;

    expect(checkboxesParentElementStyle).toBe("display: none;");
    expect(myRadioInput.attributes("style")).toBe();
    expect(myTextFieldInput.attributes("style")).toBe("display: none;");
    expect(lastStepInput.attributes("style")).toBe("display: none;");
  });
});
