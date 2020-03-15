import { shallowMount } from "@vue/test-utils";
import TheSearchBox from "@/components/TheSearchBox";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { createLocalVue } from "@vue/test-utils";

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe("TheSearchBox.vue", () => {
  it("renders props.msg when passed", () => {
    const label = "Search";
    const wrapper = shallowMount(TheSearchBox, {
      propsData: { label },
      localVue
    });

    expect(wrapper.text()).toMatch(label);
  });
});
