function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        a = n.n(r),
        s = n("888469"),
        o = n("436898");
    let l = Object.freeze({
            STANDARD: s.colorStandard,
            MUTED: s.colorMuted,
            ERROR: s.colorError,
            BRAND: s.colorBrand,
            LINK: s.colorLink,
            HEADER_PRIMARY: s.colorHeaderPrimary,
            HEADER_SECONDARY: s.colorHeaderSecondary,
            STATUS_YELLOW: s.colorStatusYellow,
            STATUS_GREEN: s.colorStatusGreen,
            STATUS_RED: s.colorStatusRed,
            INTERACTIVE_ACTIVE: s.colorInteractiveActive,
            INTERACTIVE_NORMAL: s.colorInteractiveNormal,
            ALWAYS_WHITE: s.colorWhite,
            CUSTOM: null
        }),
        u = Object.freeze({
            SIZE_10: o.size10,
            SIZE_12: o.size12,
            SIZE_14: o.size14,
            SIZE_16: o.size16,
            SIZE_20: o.size20,
            SIZE_24: o.size24,
            SIZE_32: o.size32
        }),
        d = e => {
            let {
                className: t,
                color: n = l.STANDARD,
                size: r = u.SIZE_14,
                tag: o = "div",
                selectable: d = !1,
                strong: _ = !1,
                children: c,
                style: E,
                "aria-label": I,
                ...T
            } = e;
            return (0, i.jsx)(o, {
                "aria-label": I,
                className: a()(n, r, t, {
                    [s.selectable]: d,
                    [s.strong]: _
                }),
                style: E,
                ...T,
                children: c
            })
        };
    d.Colors = l, d.Sizes = u, t.default = d
}