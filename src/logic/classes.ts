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
    },
    swap: {
        component: string;
        part: {
            on: string;
            off: string;
            indeterminate: string;
        },
        modifier: {
            active: string;
        },
        style: {
            rotate: string;
            flip: string;
        }
    },
    collapse: {
        component: string;
        part: {
            title: string;
            content: string;
        },
        modifier: {
            arrow: string;
            plus: string;
            open: string;
            close: string;
        }
    },
    badge: {
        component: string;
        variant: {
            outline: string;
            dash: string;
            soft: string;
            ghost: string;
        },
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
        size: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        }
    },
    select: {
        component: string,
        variant: {
            ghost: string;
        },
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
        size: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
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
    },
    swap: {
        component: "swap",
        part: {
            on: "swap-on",
            off: "swap-off",
            indeterminate: "swap-indeterminate"
        },
        modifier: {
            active: "swap-active"
        },
        style: {
            rotate: "swap-rotate",
            flip: "swap-flip"
        }
    },
    collapse: {
        component: "collapse",
        part: {
            title: "collapse-title",
            content: "collapse-content"
        },
        modifier: {
            arrow: "collapse-arrow",
            plus: "collapse-plus",
            open: "collapse-open",
            close: "collapse-close"
        }
    },
    badge: {
        component: "badge",
        variant: {
            outline: "badge-outline",
            dash: "badge-dash",
            soft: "badge-soft",
            ghost: "badge-ghost"
        },
        color: {
            neutral: "badge-neutral",
            primary: "badge-primary",
            secondary: "badge-secondary",
            accent: "badge-accent",
            info: "badge-info",
            success: "badge-success",
            warning: "badge-warning",
            error: "badge-error"
        },
        size: {
            xs: "badge-xs",
            sm: "badge-sm",
            md: "badge-md",
            lg: "badge-lg",
            xl: "badge-xl"
        }
    },
    select: {
        component: "select",
        variant: {
            ghost: "select-ghost"
        },
        color: {
            neutral: "select-neutral",
            primary: "select-primary",
            secondary: "select-secondary",
            accent: "select-accent",
            info: "select-info",
            success: "select-success",
            warning: "select-warning",
            error: "select-error"
        },
        size: {
            xs: "select-xs",
            sm: "select-sm",
            md: "select-md",
            lg: "select-lg",
            xl: "select-xl"
        }
    }
});

export function setClasses(_classes: StyleClasses): void {
    classes.value = _classes;
}

export default classes;