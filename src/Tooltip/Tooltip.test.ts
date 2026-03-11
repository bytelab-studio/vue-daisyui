import {expect, describe, it} from "vitest";
import {mount} from "@vue/test-utils";
import {Tooltip} from ".";

describe("Tooltip", () => {
    it("renders with message and children", () => {
        const wrapper = mount(Tooltip, {
            props: {
                message: "Tooltip message"
            },
            slots: {
                default: "<button>Hover me</button>"
            }
        });

        const button = wrapper.get("button");
        expect(button.text()).toBe("Hover me");

        const tooltipDiv = wrapper.get("[role=tooltip]");
        expect(tooltipDiv.attributes("data-tip")).toBe("Tooltip message");
    });

    it("should render with default styles and position", () => {
        const wrapper = mount(Tooltip, {
            props: {
                message: "Tooltip message"
            }
        });

        const tooltipDiv = wrapper.get("[role=tooltip]");
        const tooltipDivClasses = tooltipDiv.classes();
        expect(tooltipDivClasses).toContain("tooltip");
        expect(tooltipDivClasses).not.toContain("tooltip-open");
        expect(tooltipDivClasses).not.toContain("tooltip-primary");
        expect(tooltipDivClasses).not.toContain("tooltip-top");
    });

    it("should render with custom styles and positions", () => {
        const wrapper = mount(Tooltip, {
            props: {
                message: "Tooltip message",
                open: true,
                color: "primary",
                position: "top"
            }
        });

        const tooltipDiv = wrapper.get("[role=tooltip]");
        const tooltipDivClasses = tooltipDiv.classes();
        expect(tooltipDivClasses).toContain("tooltip");
        expect(tooltipDivClasses).toContain("tooltip-open");
        expect(tooltipDivClasses).toContain("tooltip-primary");
        expect(tooltipDivClasses).toContain("tooltip-top");
    });

    it("should apply additonal class names", () => {
        const wrapper = mount(Tooltip, {
            props: {
                message: "Tooltip message",
                class: "custom-class"
            }
        });

        const tooltipDiv = wrapper.get("[role=tooltip]");
        const tooltipDivClasses = tooltipDiv.classes();
        expect(tooltipDivClasses).toContain("custom-class");

    });
});
