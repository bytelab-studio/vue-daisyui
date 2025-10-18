import {type Ref, ref} from "vue";

export interface StyleClasses {
    button: {
        component: string;
        color: {
            neutral: string;
            primary: string;
            secondary: string;
            accent: string;
            info: string;
            success: string;
            warning: string;
            error: string;
        },
        variant: {
            outline: string;
            dash: string;
            soft: string;
            ghost: string;
            link: string;
        },
        behavior: {
            active: string;
            disabled: string;
        },
        size: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        },
        modifier: {
            wide: string;
            block: string;
            square: string;
            circle: string;
        }
    },
    dropdown: {
        component: string;
        part: {
            content: string;
        },
        placement: {
            start: string;
            center: string;
            end: string;
            top: string;
            bottom: string;
            left: string;
            right: string;
        },
        modifier: {
            hover: string;
            open: string;
        }
    },
    modal: {
        component: string;
        part: {
            box: string;
            action: string;
            backdrop: string;
            toggle: string;
        },
        modifier: {
            open: string;
        },
        placement: {
            top: string;
            middle: string;
            start: string;
            end: string;
        }
    }
}

const classes: Ref<StyleClasses> = ref({
    button: {
        component: "btn",
        color: {
            neutral: "btn-neutral",
            primary: "btn-primary",
            secondary: "btn-secondary",
            accent: "btn-accent",
            info: "btn-info",
            success: "btn-success",
            warning: "btn-warning",
            error: "btn-error"
        },
        variant: {
            outline: "btn-outline",
            dash: "btn-dash",
            soft: "btn-soft",
            ghost: "btn-ghost",
            link: "btn-link"
        },
        behavior: {
            active: "btn-active",
            disabled: "btn-disabled",
        },
        size: {
            xs: "btn-xs",
            sm: "btn-sm",
            md: "btn-md",
            lg: "btn-lg",
            xl: "btn-xl"
        },
        modifier: {
            wide: "btn-wide",
            block: "btn-block",
            square: "btn-square",
            circle: "btn-circle"
        }
    },
    dropdown: {
        component: "dropdown",
        part: {
            content: "dropdown-content"
        },
        placement: {
            start: "dropdown-start",
            center: "dropdown-start",
            end: "dropdown-end",
            top: "dropdown-top",
            bottom: "dropdown-bottom",
            left: "dropdown-left",
            right: "dropdown-right"
        },
        modifier: {
            hover: "dropdown-hover",
            open: "dropdown-open"
        }
    },
    modal: {
        component: "modal",
        part: {
            box: "modal-box",
            action: "modal-action",
            backdrop: "modal-backdrop",
            toggle: "modal-toggle"
        },
        modifier: {
            open: "modal-open"
        },
        placement: {
            top: "modal-top",
            middle: "modal-middle",
            bottom: "modal-bottom",
            start: "modal-start",
            end: "modal-end"
        }
    }
});

export function setClasses(_classes: StyleClasses): void {
    classes.value = _classes;
}

export default classes;