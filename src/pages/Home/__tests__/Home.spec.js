import { test, expect, describe } from "vitest";
import { mount } from "@vue/test-utils";
import Home from "../Home.vue";

describe("Home.vue", () => {
  test("Componente sendo montado", () => {
    const wrapper = mount(Home);
    expect(wrapper).toBeTruthy();
  });
});
