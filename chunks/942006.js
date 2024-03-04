function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSelect: function() {
            return p
        },
        HiddenSelect: function() {
            return h
        }
    }), n("222007");
    var r = n("240849"),
        i = n("884691"),
        o = n("932165"),
        s = n("388032"),
        a = n("564341"),
        c = n("113581"),
        u = n("139796"),
        d = n("759840"),
        l = n("828551");
    let f = new WeakMap;

    function p(e, t, n) {
        let {
            keyboardDelegate: d,
            isDisabled: l,
            isRequired: p,
            name: h,
            validationBehavior: v = "aria"
        } = e, g = (0, a.useCollator)({
            usage: "search",
            sensitivity: "base"
        }), b = (0, i.useMemo)(() => d || new o.ListKeyboardDelegate(t.collection, t.disabledKeys, null, g), [d, t.collection, t.disabledKeys, g]), {
            menuTriggerProps: m,
            menuProps: y
        } = (0, u.useMenuTrigger)({
            isDisabled: l,
            type: "listbox"
        }, t, n), {
            typeSelectProps: x
        } = (0, o.useTypeSelect)({
            keyboardDelegate: b,
            selectionManager: t.selectionManager,
            onTypeSelect(e) {
                t.setSelectedKey(e)
            }
        }), {
            isInvalid: w,
            validationErrors: S,
            validationDetails: k
        } = t.displayValidation, {
            labelProps: E,
            fieldProps: _,
            descriptionProps: M,
            errorMessageProps: D
        } = (0, c.useField)({
            ...e,
            labelElementType: "span",
            isInvalid: w,
            errorMessage: e.errorMessage || S
        });
        x.onKeyDown = x.onKeyDownCapture, delete x.onKeyDownCapture;
        let C = (0, r.filterDOMProps)(e, {
                labelable: !0
            }),
            P = (0, r.mergeProps)(x, m, _),
            T = (0, r.useId)();
        return f.set(t, {
            isDisabled: l,
            isRequired: p,
            name: h,
            validationBehavior: v
        }), {
            labelProps: {
                ...E,
                onClick: () => {
                    !e.isDisabled && (n.current.focus(), (0, s.setInteractionModality)("keyboard"))
                }
            },
            triggerProps: (0, r.mergeProps)(C, {
                ...P,
                isDisabled: l,
                onKeyDown: (0, r.chain)(P.onKeyDown, e => {
                    switch (e.key) {
                        case "ArrowLeft": {
                            e.preventDefault();
                            let n = null != t.selectedKey ? b.getKeyAbove(t.selectedKey) : b.getFirstKey();
                            n && t.setSelectedKey(n);
                            break
                        }
                        case "ArrowRight": {
                            e.preventDefault();
                            let n = null != t.selectedKey ? b.getKeyBelow(t.selectedKey) : b.getFirstKey();
                            n && t.setSelectedKey(n)
                        }
                    }
                }, e.onKeyDown),
                onKeyUp: e.onKeyUp,
                "aria-labelledby": [T, P["aria-labelledby"], P["aria-label"] && !P["aria-labelledby"] ? P.id : null].filter(Boolean).join(" "),
                onFocus(n) {
                    !t.isFocused && (e.onFocus && e.onFocus(n), e.onFocusChange && e.onFocusChange(!0), t.setFocused(!0))
                },
                onBlur(n) {
                    !t.isOpen && (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1))
                }
            }),
            valueProps: {
                id: T
            },
            menuProps: {
                ...y,
                autoFocus: t.focusStrategy || !0,
                shouldSelectOnPressUp: !0,
                shouldFocusOnHover: !0,
                disallowEmptySelection: !0,
                linkBehavior: "selection",
                onBlur: n => {
                    !n.currentTarget.contains(n.relatedTarget) && (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1))
                },
                "aria-labelledby": [_["aria-labelledby"], P["aria-label"] && !_["aria-labelledby"] ? P.id : null].filter(Boolean).join(" ")
            },
            descriptionProps: M,
            errorMessageProps: D,
            isInvalid: w,
            validationErrors: S,
            validationDetails: k
        }
    }

    function h(e) {
        var t;
        let {
            state: n,
            triggerRef: o,
            label: a,
            name: c,
            isDisabled: u
        } = e, p = (0, i.useRef)(null), {
            containerProps: h,
            inputProps: v,
            selectProps: g
        } = function(e, t, n) {
            var i;
            let o = f.get(t) || {},
                {
                    autoComplete: a,
                    name: c = o.name,
                    isDisabled: u = o.isDisabled
                } = e,
                {
                    validationBehavior: p,
                    isRequired: h
                } = o,
                v = (0, s.useInteractionModality)(),
                {
                    visuallyHiddenProps: g
                } = (0, l.useVisuallyHidden)();
            return (0, r.useFormReset)(e.selectRef, t.selectedKey, t.setSelectedKey), (0, d.useFormValidation)({
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
                    tabIndex: null == v || t.isFocused || t.isOpen ? -1 : 0,
                    style: {
                        fontSize: 16
                    },
                    onFocus: () => n.current.focus(),
                    disabled: u
                },
                selectProps: {
                    tabIndex: -1,
                    autoComplete: a,
                    disabled: u,
                    required: "native" === p && h,
                    name: c,
                    value: null !== (i = t.selectedKey) && void 0 !== i ? i : "",
                    onChange: e => t.setSelectedKey(e.target.value)
                }
            }
        }({
            ...e,
            selectRef: p
        }, n, o);
        return n.collection.size <= 300 ? i.createElement("div", {
            ...h,
            "data-testid": "hidden-select-container"
        }, i.createElement("input", v), i.createElement("label", null, a, i.createElement("select", {
            ...g,
            ref: p
        }, i.createElement("option", null), [...n.collection.getKeys()].map(e => {
            let t = n.collection.getItem(e);
            if ("item" === t.type) return i.createElement("option", {
                key: t.key,
                value: t.key
            }, t.textValue)
        })))) : c ? i.createElement("input", {
            type: "hidden",
            autoComplete: g.autoComplete,
            name: c,
            disabled: u,
            value: null !== (t = n.selectedKey) && void 0 !== t ? t : ""
        }) : null
    }
}