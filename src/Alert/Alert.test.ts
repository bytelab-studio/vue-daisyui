import {expect, describe, it} from "vitest";
import {mount} from "@vue/test-utils";
import {Alert} from ".";

describe("Alert", () => {
    it("renders a default state", () => {
        const wrapper = mount(Alert, {
            slots: {
                default: "Test"
            }
        });

        const alert = wrapper.get("[role=alert]");
        expect(alert).toBeTruthy();
    });

    it("renders a status", () => {
        const wrapper = mount(Alert, {
            props: {
                status: "success"
            },
            slots: {
                default: "Test"
            }
        });

        const alert = wrapper.get("[role=alert]");
        expect(alert.classes()).toContain("alert-success");
    });
});