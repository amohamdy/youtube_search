import { shallowMount } from "@vue/test-utils";
import SearchForm from "@/components/search/SearchForm.vue";

const wrapper = shallowMount(SearchForm, {
    propsData: {
            mScreen:false,
     },
});
const submitForm= jest.fn();
wrapper.setMethods({
    submitForm:submitForm
})

describe("cehck if search button already exist", () => {
    it("check if button already exist", () => {
        expect( wrapper.find('.search-btn').exists()).toBe(true)
    });
});
