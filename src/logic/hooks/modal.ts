const dialog: symbol = Symbol("modal-dialog");

export function useModal() {
    return {
        dialog: dialog
    }
}