import {expect, describe, it} from "vitest";
import {mount} from "@vue/test-utils";
import {Card} from ".";

describe("Card", () => {
    it("should render", () => {
        const wrapper = mount(Card);
        expect(wrapper.get(".card")).toBeTruthy();
    });

    it("should apply bordered prop", () => {
        const wrapper = mount(Card, {
            props: {
                border: true
            }
        });
        const card = wrapper.get(".card");
        expect(card.classes()).toContain("card-border");
    });

    it("should apply imageFull prop", () => {
        const wrapper = mount(Card, {
            props: {
                imageFull: true
            }
        });
        const card = wrapper.get(".card");
        expect(card.classes()).toContain("image-full");
    });

    it("should apply cardSide prop", () => {
        const wrapper = mount(Card, {
            props: {
                side: true
            }
        });
        const card = wrapper.get(".card");
        expect(card.classes()).toContain("card-side");
    });
});