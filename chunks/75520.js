function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useLink: function() {
            return o
        }
    });
    var r = n("182823"),
        i = n("706682"),
        a = n("612001");

    function o(e, t) {
        let {
            elementType: n = "a",
            onPress: o,
            onPressStart: s,
            onPressEnd: u,
            onClick: c,
            isDisabled: l,
            ...d
        } = e, f = {};
        "a" !== n && (f = {
            role: "link",
            tabIndex: l ? void 0 : 0
        });
        let {
            focusableProps: p
        } = (0, i.useFocusable)(e, t), {
            pressProps: h,
            isPressed: m
        } = (0, a.usePress)({
            onPress: o,
            onPressStart: s,
            onPressEnd: u,
            isDisabled: l,
            ref: t
        }), g = (0, r.filterDOMProps)(d, {
            labelable: !0,
            isLink: "a" === n
        }), _ = (0, r.mergeProps)(p, h), b = (0, r.useRouter)();
        return {
            isPressed: m,
            linkProps: (0, r.mergeProps)(g, {
                ..._,
                ...f,
                "aria-disabled": l || void 0,
                "aria-current": e["aria-current"],
                onClick: e => {
                    var t;
                    null === (t = h.onClick) || void 0 === t || t.call(h, e), c && (c(e), console.warn("onClick is deprecated, please use onPress")), !b.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && (0, r.shouldClientNavigate)(e.currentTarget, e) && (e.preventDefault(), b.open(e.currentTarget, e))
                }
            })
        }
    }
}