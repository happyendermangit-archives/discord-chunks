function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        HiddenSelect: function() {
            return h
        },
        useSelect: function() {
            return p
        }
    });
    var r = n("182823"),
        i = n("470079"),
        a = n("457283"),
        o = n("612001"),
        s = n("602607"),
        u = n("251433"),
        c = n("740143"),
        l = n("705782"),
        d = n("297821");
    let f = new WeakMap;

    function p(e, t, n) {
        let {
            keyboardDelegate: l,
            isDisabled: d,
            isRequired: p,
            name: h,
            validationBehavior: m = "aria"
        } = e, g = (0, s.useCollator)({
            usage: "search",
            sensitivity: "base"
        }), _ = (0, i.useMemo)(() => l || new a.ListKeyboardDelegate(t.collection, t.disabledKeys, null, g), [l, t.collection, t.disabledKeys, g]), {
            menuTriggerProps: b,
            menuProps: v
        } = (0, c.useMenuTrigger)({
            isDisabled: d,
            type: "listbox"
        }, t, n), {
            typeSelectProps: y
        } = (0, a.useTypeSelect)({
            keyboardDelegate: _,
            selectionManager: t.selectionManager,
            onTypeSelect(e) {
                t.setSelectedKey(e)
            }
        }), {
            isInvalid: E,
            validationErrors: S,
            validationDetails: x
        } = t.displayValidation, {
            labelProps: w,
            fieldProps: T,
            descriptionProps: C,
            errorMessageProps: D
        } = (0, u.useField)({
            ...e,
            labelElementType: "span",
            isInvalid: E,
            errorMessage: e.errorMessage || S
        });
        y.onKeyDown = y.onKeyDownCapture, delete y.onKeyDownCapture;
        let O = (0, r.filterDOMProps)(e, {
                labelable: !0
            }),
            M = (0, r.mergeProps)(y, b, T),
            A = (0, r.useId)();
        return f.set(t, {
            isDisabled: d,
            isRequired: p,
            name: h,
            validationBehavior: m
        }), {
            labelProps: {
                ...w,
                onClick: () => {
                    !e.isDisabled && (n.current.focus(), (0, o.setInteractionModality)("keyboard"))
                }
            },
            triggerProps: (0, r.mergeProps)(O, {
                ...M,
                isDisabled: d,
                onKeyDown: (0, r.chain)(M.onKeyDown, e => {
                    switch (e.key) {
                        case "ArrowLeft": {
                            e.preventDefault();
                            let n = null != t.selectedKey ? _.getKeyAbove(t.selectedKey) : _.getFirstKey();
                            n && t.setSelectedKey(n);
                            break
                        }
                        case "ArrowRight": {
                            e.preventDefault();
                            let n = null != t.selectedKey ? _.getKeyBelow(t.selectedKey) : _.getFirstKey();
                            n && t.setSelectedKey(n)
                        }
                    }
                }, e.onKeyDown),
                onKeyUp: e.onKeyUp,
                "aria-labelledby": [A, M["aria-labelledby"], M["aria-label"] && !M["aria-labelledby"] ? M.id : null].filter(Boolean).join(" "),
                onFocus(n) {
                    !t.isFocused && (e.onFocus && e.onFocus(n), e.onFocusChange && e.onFocusChange(!0), t.setFocused(!0))
                },
                onBlur(n) {
                    !t.isOpen && (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1))
                }
            }),
            valueProps: {
                id: A
            },
            menuProps: {
                ...v,
                autoFocus: t.focusStrategy || !0,
                shouldSelectOnPressUp: !0,
                shouldFocusOnHover: !0,
                disallowEmptySelection: !0,
                linkBehavior: "selection",
                onBlur: n => {
                    !n.currentTarget.contains(n.relatedTarget) && (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1))
                },
                "aria-labelledby": [T["aria-labelledby"], M["aria-label"] && !T["aria-labelledby"] ? M.id : null].filter(Boolean).join(" ")
            },
            descriptionProps: C,
            errorMessageProps: D,
            isInvalid: E,
            validationErrors: S,
            validationDetails: x
        }
    }

    function h(e) {
        var t;
        let {
            state: n,
            triggerRef: a,
            label: s,
            name: u,
            isDisabled: c
        } = e, p = (0, i.useRef)(null), {
            containerProps: h,
            inputProps: m,
            selectProps: g
        } = function(e, t, n) {
            var i;
            let a = f.get(t) || {},
                {
                    autoComplete: s,
                    name: u = a.name,
                    isDisabled: c = a.isDisabled
                } = e,
                {
                    validationBehavior: p,
                    isRequired: h
                } = a,
                m = (0, o.useInteractionModality)(),
                {
                    visuallyHiddenProps: g
                } = (0, d.useVisuallyHidden)();
            return (0, r.useFormReset)(e.selectRef, t.selectedKey, t.setSelectedKey), (0, l.useFormValidation)({
                validationBehavior: p,
                focus: () => n.current.focus()
            }, t, e.selectRef), {
                containerProps: {
                    ...g,
                    "aria-hidden": !0,
                    "data-a11y-ignore": "aria-hidden-focus"
                },
                inputProps: {
                    type: "text",
                    tabIndex: null == m || t.isFocused || t.isOpen ? -1 : 0,
                    style: {
                        fontSize: 16
                    },
                    onFocus: () => n.current.focus(),
                    disabled: c
                },
                selectProps: {
                    tabIndex: -1,
                    autoComplete: s,
                    disabled: c,
                    required: "native" === p && h,
                    name: u,
                    value: null !== (i = t.selectedKey) && void 0 !== i ? i : "",
                    onChange: e => t.setSelectedKey(e.target.value)
                }
            }
        }({
            ...e,
            selectRef: p
        }, n, a);
        return n.collection.size <= 300 ? i.createElement("div", {
            ...h,
            "data-testid": "hidden-select-container"
        }, i.createElement("input", m), i.createElement("label", null, s, i.createElement("select", {
            ...g,
            ref: p
        }, i.createElement("option", null), [...n.collection.getKeys()].map(e => {
            let t = n.collection.getItem(e);
            if ("item" === t.type) return i.createElement("option", {
                key: t.key,
                value: t.key
            }, t.textValue)
        })))) : u ? i.createElement("input", {
            type: "hidden",
            autoComplete: g.autoComplete,
            name: u,
            disabled: c,
            value: null !== (t = n.selectedKey) && void 0 !== t ? t : ""
        }) : null
    }
}