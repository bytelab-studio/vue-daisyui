import {expect, describe, it} from "vitest";
import {mount} from "@vue/test-utils";
import {BreadcrumbItem, Breadcrumbs} from ".";

describe("Breadcrumbs", () => {
    it("should render Breadcrumbs", () => {
        const wrapper = mount(Breadcrumbs, {});
        const breadcrumb = wrapper.get("[role=navigation]");
        expect(breadcrumb).toBeTruthy();
    });

    it("should render its children", () => {
        const wrapper = mount(Breadcrumbs, {
            slots: {
                default: BreadcrumbItem
            }
        });
        const breadcrumb = wrapper.get("[role=navigation]");
        const items = breadcrumb.findAll("li");
        expect(items.length).toBe(1);
    });
});