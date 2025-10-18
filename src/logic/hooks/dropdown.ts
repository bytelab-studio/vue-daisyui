const popoverSymbol: symbol =Symbol("dropdown-popover");
const anchorSymbol: symbol =Symbol("dropdown-anchor");

export function useDropdown() {
    return {
        popover: popoverSymbol,
        anchor: anchorSymbol
    }
}