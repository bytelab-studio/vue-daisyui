import {expect, describe, it} from "vitest";
import {mount} from "@vue/test-utils";
import {Button} from ".";

describe("Button", () => {
    it("renders a default state", () => {
        const wrapper = mount(Button, {
            slots: {
                default: "Test"
            }
        });

        const button = wrapper.get("button");
        expect(button).toBeTruthy();
        expect(button.text()).toBe("Test");
    });

    it("renders a variant", () => {
        const wrapper = mount(Button, {
            props: {
                variant: "outline"
            }
        });

        const button = wrapper.get("button");
        expect(button.classes()).toContain("btn-outline");
    });

    it("renders a size", () => {
        const wrapper = mount(Button, {
            props: {
                size: "xs"
            }
        });

        const button = wrapper.get("button");
        expect(button.classes()).toContain("btn-xs");        
    });

    it("renders a color", () => {
        const wrapper = mount(Button, {
            props: {
                color: "success"
            }
        });

        const button = wrapper.get("button");
        expect(button.classes()).toContain("btn-success");        
    });

    it("renders responsive", () => {
        const wrapper = mount(Button, {
            props: {
                responsive: true
            }
        });

        const button = wrapper.get("button");
        const badgeClasses = button.classes();
        expect(badgeClasses).toContain("btn-xs");
        expect(badgeClasses).toContain("sm:btn-sm");
        expect(badgeClasses).toContain("md:btn-md");
        expect(badgeClasses).toContain("lg:btn-lg");
    });
});