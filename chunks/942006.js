function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSelect: function() {
            return f
        },
        HiddenSelect: function() {
            return m
        }
    }), n("222007");
    var r = n("240849"),
        a = n("884691"),
        i = n("932165"),
        o = n("388032"),
        s = n("564341"),
        c = n("113581"),
        l = n("139796"),
        u = n("759840"),
        d = n("828551");
    let p = new WeakMap;

    function f(e, t, n) {
        let {
            keyboardDelegate: u,
            isDisabled: d,
            isRequired: f,
            name: m,
            validationBehavior: h = "aria"
        } = e, v = (0, s.useCollator)({
            usage: "search",
            sensitivity: "base"
        }), g = (0, a.useMemo)(() => u || new i.ListKeyboardDelegate(t.collection, t.disabledKeys, null, v), [u, t.collection, t.disabledKeys, v]), {
            menuTriggerProps: y,
            menuProps: b
        } = (0, l.useMenuTrigger)({
            isDisabled: d,
            type: "listbox"
        }, t, n), {
            typeSelectProps: x
        } = (0, i.useTypeSelect)({
            keyboardDelegate: g,
            selectionManager: t.selectionManager,
            onTypeSelect(e) {
                t.setSelectedKey(e)
            }
        }), {
            isInvalid: S,
            validationErrors: w,
            validationDetails: D
        } = t.displayValidation, {
            labelProps: C,
            fieldProps: k,
            descriptionProps: P,
            errorMessageProps: E
        } = (0, c.useField)({
            ...e,
            labelElementType: "span",
            isInvalid: S,
            errorMessage: e.errorMessage || w
        });
        x.onKeyDown = x.onKeyDownCapture, delete x.onKeyDownCapture;
        let T = (0, r.filterDOMProps)(e, {
                labelable: !0
            }),
            M = (0, r.mergeProps)(x, y, k),
            R = (0, r.useId)();
        return p.set(t, {
            isDisabled: d,
            isRequired: f,
            name: m,
            validationBehavior: h
        }), {
            labelProps: {
                ...C,
                onClick: () => {
                    !e.isDisabled && (n.current.focus(), (0, o.setInteractionModality)("keyboard"))
                }
            },
            triggerProps: (0, r.mergeProps)(T, {
                ...M,
                isDisabled: d,
                onKeyDown: (0, r.chain)(M.onKeyDown, e => {
                    switch (e.key) {
                        case "ArrowLeft": {
                            e.preventDefault();
                            let n = null != t.selectedKey ? g.getKeyAbove(t.selectedKey) : g.getFirstKey();
                            n && t.setSelectedKey(n);
                            break
                        }
                        case "ArrowRight": {
                            e.preventDefault();
                            let n = null != t.selectedKey ? g.getKeyBelow(t.selectedKey) : g.getFirstKey();
                            n && t.setSelectedKey(n)
                        }
                    }
                }, e.onKeyDown),
                onKeyUp: e.onKeyUp,
                "aria-labelledby": [R, M["aria-labelledby"], M["aria-label"] && !M["aria-labelledby"] ? M.id : null].filter(Boolean).join(" "),
                onFocus(n) {
                    !t.isFocused && (e.onFocus && e.onFocus(n), e.onFocusChange && e.onFocusChange(!0), t.setFocused(!0))
                },
                onBlur(n) {
                    !t.isOpen && (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1))
                }
            }),
            valueProps: {
                id: R
            },
            menuProps: {
                ...b,
                autoFocus: t.focusStrategy || !0,
                shouldSelectOnPressUp: !0,
                shouldFocusOnHover: !0,
                disallowEmptySelection: !0,
                linkBehavior: "selection",
                onBlur: n => {
                    !n.currentTarget.contains(n.relatedTarget) && (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1))
                },
                "aria-labelledby": [k["aria-labelledby"], M["aria-label"] && !k["aria-labelledby"] ? M.id : null].filter(Boolean).join(" ")
            },
            descriptionProps: P,
            errorMessageProps: E,
            isInvalid: S,
            validationErrors: w,
            validationDetails: D
        }
    }

    function m(e) {
        var t;
        let {
            state: n,
            triggerRef: i,
            label: s,
            name: c,
            isDisabled: l
        } = e, f = (0, a.useRef)(null), {
            containerProps: m,
            inputProps: h,
            selectProps: v
        } = function(e, t, n) {
            var a;
            let i = p.get(t) || {},
                {
                    autoComplete: s,
                    name: c = i.name,
                    isDisabled: l = i.isDisabled
                } = e,
                {
                    validationBehavior: f,
                    isRequired: m
                } = i,
                h = (0, o.useInteractionModality)(),
                {
                    visuallyHiddenProps: v
                } = (0, d.useVisuallyHidden)();
            return (0, r.useFormReset)(e.selectRef, t.selectedKey, t.setSelectedKey), (0, u.useFormValidation)({
                validationBehavior: f,
                focus: () => n.current.focus()
            }, t, e.selectRef), {
                containerProps: {
                    ...v,
                    "aria-hidden": !0,
                    "data-a11y-ignore": "aria-hidden-focus"
                },
                inputProps: {
                    type: "text",
                    tabIndex: null == h || t.isFocused || t.isOpen ? -1 : 0,
                    style: {
                        fontSize: 16
                    },
                    onFocus: () => n.current.focus(),
                    disabled: l
                },
                selectProps: {
                    tabIndex: -1,
                    autoComplete: s,
                    disabled: l,
                    required: "native" === f && m,
                    name: c,
                    value: null !== (a = t.selectedKey) && void 0 !== a ? a : "",
                    onChange: e => t.setSelectedKey(e.target.value)
                }
            }
        }({
            ...e,
            selectRef: f
        }, n, i);
        return n.collection.size <= 300 ? a.createElement("div", {
            ...m,
            "data-testid": "hidden-select-container"
        }, a.createElement("input", h), a.createElement("label", null, s, a.createElement("select", {
            ...v,
            ref: f
        }, a.createElement("option", null), [...n.collection.getKeys()].map(e => {
            let t = n.collection.getItem(e);
            if ("item" === t.type) return a.createElement("option", {
                key: t.key,
                value: t.key
            }, t.textValue)
        })))) : c ? a.createElement("input", {
            type: "hidden",
            autoComplete: v.autoComplete,
            name: c,
            disabled: l,
            value: null !== (t = n.selectedKey) && void 0 !== t ? t : ""
        }) : null
    }
}