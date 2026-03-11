import {expect, describe, it} from "vitest";
import {mount} from "@vue/test-utils";
import {Badge} from ".";

describe("Badge", () => {
    it("renders a default state", () => {
        const wrapper = mount(Badge, {
            slots: {
                default: "Test"
            }
        });
        const badge = wrapper.get("[aria-label=Badge]")
        expect(badge).toBeTruthy();
        expect(badge.text()).toBe("Test");
    });

    it("renders a variant", () => {
        const wrapper = mount(Badge, {
            props: {
                variant: "outline"
            }
        });

        const badge = wrapper.get("[aria-label=Badge]");
        expect(badge.classes()).toContain("badge-outline");
    });

    it("renders a size", () => {
        const wrapper = mount(Badge, {
            props: {
                size: "xs"
            }
        });

        const badge = wrapper.get("[aria-label=Badge]");
        expect(badge.classes()).toContain("badge-xs");        
    });

    it("renders a color", () => {
        const wrapper = mount(Badge, {
            props: {
                color: "success"
            }
        });

        const badge = wrapper.get("[aria-label=Badge]");
        expect(badge.classes()).toContain("badge-success");        
    });

    it("renders responsive", () => {
        const wrapper = mount(Badge, {
            props: {
                responsive: true
            }
        });

        const badge = wrapper.get("[aria-label=Badge]");
        const badgeClasses = badge.classes();
        expect(badgeClasses).toContain("badge-xs");
        expect(badgeClasses).toContain("md:badge-sm");
        expect(badgeClasses).toContain("lg:badge-md");
        expect(badgeClasses).toContain("xl:badge-lg");
    });
});