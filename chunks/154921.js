function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r),
        a = n("681429"),
        o = n("527166");
    let l = Object.freeze({
            STANDARD: a.colorStandard,
            MUTED: a.colorMuted,
            ERROR: a.colorError,
            BRAND: a.colorBrand,
            LINK: a.colorLink,
            HEADER_PRIMARY: a.colorHeaderPrimary,
            HEADER_SECONDARY: a.colorHeaderSecondary,
            STATUS_YELLOW: a.colorStatusYellow,
            STATUS_GREEN: a.colorStatusGreen,
            STATUS_RED: a.colorStatusRed,
            INTERACTIVE_ACTIVE: a.colorInteractiveActive,
            INTERACTIVE_NORMAL: a.colorInteractiveNormal,
            ALWAYS_WHITE: a.colorWhite,
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
                className: s()(n, r, t, {
                    [a.selectable]: d,
                    [a.strong]: _
                }),
                style: E,
                ...T,
                children: c
            })
        };
    d.Colors = l, d.Sizes = u, t.default = d
}