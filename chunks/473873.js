function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useButton: function() {
            return o
        },
        useToggleButton: function() {
            return s
        }
    });
    var r = n("182823"),
        i = n("706682"),
        a = n("612001");

    function o(e, t) {
        let n, {
            elementType: o = "button",
            isDisabled: s,
            onPress: u,
            onPressStart: c,
            onPressEnd: l,
            onPressUp: d,
            onPressChange: f,
            preventFocusOnPress: p,
            allowFocusWhenDisabled: h,
            onClick: m,
            href: g,
            target: _,
            rel: b,
            type: v = "button"
        } = e;
        n = "button" === o ? {
            type: v,
            disabled: s
        } : {
            role: "button",
            tabIndex: s ? void 0 : 0,
            href: "a" === o && s ? void 0 : g,
            target: "a" === o ? _ : void 0,
            type: "input" === o ? v : void 0,
            disabled: "input" === o ? s : void 0,
            "aria-disabled": s && "input" !== o ? s : void 0,
            rel: "a" === o ? b : void 0
        };
        let {
            pressProps: y,
            isPressed: E
        } = (0, a.usePress)({
            onPressStart: c,
            onPressEnd: l,
            onPressChange: f,
            onPress: u,
            onPressUp: d,
            isDisabled: s,
            preventFocusOnPress: p,
            ref: t
        }), {
            focusableProps: S
        } = (0, i.useFocusable)(e, t);
        h && (S.tabIndex = s ? -1 : S.tabIndex);
        let x = (0, r.mergeProps)(S, y, (0, r.filterDOMProps)(e, {
            labelable: !0
        }));
        return {
            isPressed: E,
            buttonProps: (0, r.mergeProps)(n, x, {
                "aria-haspopup": e["aria-haspopup"],
                "aria-expanded": e["aria-expanded"],
                "aria-controls": e["aria-controls"],
                "aria-pressed": e["aria-pressed"],
                onClick: e => {
                    m && (m(e), console.warn("onClick is deprecated, please use onPress"))
                }
            })
        }
    }

    function s(e, t, n) {
        let {
            isSelected: i
        } = t, {
            isPressed: a,
            buttonProps: s
        } = o({
            ...e,
            onPress: (0, r.chain)(t.toggle, e.onPress)
        }, n);
        return {
            isPressed: a,
            buttonProps: (0, r.mergeProps)(s, {
                "aria-pressed": i
            })
        }
    }
}