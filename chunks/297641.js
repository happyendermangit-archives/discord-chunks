function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useLink: function() {
            return s
        }
    });
    var r = n("240849"),
        i = n("447259"),
        o = n("388032");

    function s(e, t) {
        let {
            elementType: n = "a",
            onPress: s,
            onPressStart: a,
            onPressEnd: c,
            onClick: u,
            isDisabled: d,
            ...l
        } = e, f = {};
        "a" !== n && (f = {
            role: "link",
            tabIndex: d ? void 0 : 0
        });
        let {
            focusableProps: p
        } = (0, i.useFocusable)(e, t), {
            pressProps: h,
            isPressed: v
        } = (0, o.usePress)({
            onPress: s,
            onPressStart: a,
            onPressEnd: c,
            isDisabled: d,
            ref: t
        }), g = (0, r.filterDOMProps)(l, {
            labelable: !0,
            isLink: "a" === n
        }), b = (0, r.mergeProps)(p, h), m = (0, r.useRouter)();
        return {
            isPressed: v,
            linkProps: (0, r.mergeProps)(g, {
                ...b,
                ...f,
                "aria-disabled": d || void 0,
                "aria-current": e["aria-current"],
                onClick: e => {
                    var t;
                    null === (t = h.onClick) || void 0 === t || t.call(h, e), u && (u(e), console.warn("onClick is deprecated, please use onPress")), !m.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && (0, r.shouldClientNavigate)(e.currentTarget, e) && (e.preventDefault(), m.open(e.currentTarget, e))
                }
            })
        }
    }
}