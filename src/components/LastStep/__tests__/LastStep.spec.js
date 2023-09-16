import { test, expect, describe } from "vitest";
import { mount } from "@vue/test-utils";
import LastStep from "../LastStep.vue";
import MyDateField from "../../../components/HTMLComponents/MyDateField/MyDateField.vue";

describe("LastStep.vue", () => {
  test("Componente sendo montado", () => {
    const wrapper = mount(LastStep);
    expect(wrapper).toBeTruthy();
  });

  test("Somente um componente de data por passo", async () => {
    const wrapper = mount(LastStep);
    const inputs = wrapper.findAllComponents(MyDateField);

    //: Afinal se usa v-show devem haver 3 renderizados no DOM
    expect(inputs.length).toBe(3);
    //: Testando se está visível, pois o isVisible() não funciona.
    //: Como não há "display: none", está correto
    expect(inputs.at(0).attributes("style")).toBe();
    expect(inputs.at(1).attributes("style")).toBe("display: none;");
    expect(inputs.at(2).attributes("style")).toBe("display: none;");

    await inputs.at(0).setValue("2023-01-01");
    await wrapper.vm.next();

    expect(inputs.at(0).attributes("style")).toBe("display: none;");
    expect(inputs.at(1).attributes("style")).toBe();
    expect(inputs.at(2).attributes("style")).toBe("display: none;");
  });
});
