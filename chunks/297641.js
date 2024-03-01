function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useLink: function() {
            return o
        }
    });
    var r = n("240849"),
        a = n("447259"),
        i = n("388032");

    function o(e, t) {
        let {
            elementType: n = "a",
            onPress: o,
            onPressStart: s,
            onPressEnd: c,
            onClick: l,
            isDisabled: u,
            ...d
        } = e, p = {};
        "a" !== n && (p = {
            role: "link",
            tabIndex: u ? void 0 : 0
        });
        let {
            focusableProps: f
        } = (0, a.useFocusable)(e, t), {
            pressProps: m,
            isPressed: h
        } = (0, i.usePress)({
            onPress: o,
            onPressStart: s,
            onPressEnd: c,
            isDisabled: u,
            ref: t
        }), v = (0, r.filterDOMProps)(d, {
            labelable: !0,
            isLink: "a" === n
        }), g = (0, r.mergeProps)(f, m), y = (0, r.useRouter)();
        return {
            isPressed: h,
            linkProps: (0, r.mergeProps)(v, {
                ...g,
                ...p,
                "aria-disabled": u || void 0,
                "aria-current": e["aria-current"],
                onClick: e => {
                    var t;
                    null === (t = m.onClick) || void 0 === t || t.call(m, e), l && (l(e), console.warn("onClick is deprecated, please use onPress")), !y.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && (0, r.shouldClientNavigate)(e.currentTarget, e) && (e.preventDefault(), y.open(e.currentTarget, e))
                }
            })
        }
    }
}