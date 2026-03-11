import {expect, describe, it} from "vitest";
import {mount} from "@vue/test-utils";
import {Menu} from ".";

describe("Menu", () => {
    it("should render Menu", () => {
        const wrapper = mount(Menu);
        expect(wrapper.get("ul")).toBeTruthy();
    });

    it("should apply horizontal modifer class", () => {
        const wrapper = mount(Menu, {
            props: {
                horizontal: true
            }
        });

        const menu = wrapper.get("ul");
        expect(menu.classes()).toContain("menu-horizontal");
        expect(menu.classes()).not.toContain("menu-vertical");
    });

    it("should apply veritcal modifer class", () => {
        const wrapper = mount(Menu);

        const menu = wrapper.get("ul");
        expect(menu.classes()).toContain("menu-vertical");
        expect(menu.classes()).not.toContain("menu-horzontal");
    });
});