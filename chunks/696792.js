function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useButton: function() {
            return s
        },
        useToggleButton: function() {
            return a
        }
    });
    var r = n("240849"),
        i = n("447259"),
        o = n("388032");

    function s(e, t) {
        let n, {
            elementType: s = "button",
            isDisabled: a,
            onPress: c,
            onPressStart: u,
            onPressEnd: d,
            onPressUp: l,
            onPressChange: f,
            preventFocusOnPress: p,
            allowFocusWhenDisabled: h,
            onClick: v,
            href: g,
            target: b,
            rel: m,
            type: y = "button"
        } = e;
        n = "button" === s ? {
            type: y,
            disabled: a
        } : {
            role: "button",
            tabIndex: a ? void 0 : 0,
            href: "a" === s && a ? void 0 : g,
            target: "a" === s ? b : void 0,
            type: "input" === s ? y : void 0,
            disabled: "input" === s ? a : void 0,
            "aria-disabled": a && "input" !== s ? a : void 0,
            rel: "a" === s ? m : void 0
        };
        let {
            pressProps: x,
            isPressed: w
        } = (0, o.usePress)({
            onPressStart: u,
            onPressEnd: d,
            onPressChange: f,
            onPress: c,
            onPressUp: l,
            isDisabled: a,
            preventFocusOnPress: p,
            ref: t
        }), {
            focusableProps: S
        } = (0, i.useFocusable)(e, t);
        h && (S.tabIndex = a ? -1 : S.tabIndex);
        let k = (0, r.mergeProps)(S, x, (0, r.filterDOMProps)(e, {
            labelable: !0
        }));
        return {
            isPressed: w,
            buttonProps: (0, r.mergeProps)(n, k, {
                "aria-haspopup": e["aria-haspopup"],
                "aria-expanded": e["aria-expanded"],
                "aria-controls": e["aria-controls"],
                "aria-pressed": e["aria-pressed"],
                onClick: e => {
                    v && (v(e), console.warn("onClick is deprecated, please use onPress"))
                }
            })
        }
    }

    function a(e, t, n) {
        let {
            isSelected: i
        } = t, {
            isPressed: o,
            buttonProps: a
        } = s({
            ...e,
            onPress: (0, r.chain)(t.toggle, e.onPress)
        }, n);
        return {
            isPressed: o,
            buttonProps: (0, r.mergeProps)(a, {
                "aria-pressed": i
            })
        }
    }
}