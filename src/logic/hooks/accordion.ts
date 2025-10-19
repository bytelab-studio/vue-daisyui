const name: symbol = Symbol("accordion-name");
const joined: symbol = Symbol("accordion-joined");

export function useAccordion() {
    return {
        name,
        joined
    }
}