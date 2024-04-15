function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("806519"),
        l = n("768581"),
        u = n("895924"),
        d = n("669256"),
        _ = n("970952");

    function c(e) {
        let {
            section: t,
            isSelected: n,
            width: s,
            height: c,
            className: E,
            selectable: I = !1,
            onFocus: T,
            onBlur: f,
            onMouseOver: S,
            onMouseLeave: A,
            ...h
        } = e, [m, N] = r.useState(!1), O = r.useCallback(() => {
            N(!0), null == T || T()
        }, [T]), p = r.useCallback(() => {
            N(!1), null == f || f()
        }, [f]), R = r.useCallback(() => {
            N(!0), null == S || S()
        }, [S]), C = r.useCallback(() => {
            N(!1), null == A || A()
        }, [A]), g = r.useMemo(() => {
            if (t.type === u.ApplicationCommandSectionType.APPLICATION) {
                var e;
                return l.default.getApplicationIconURL({
                    id: t.id,
                    icon: t.icon,
                    bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
                    botIconFirst: !0,
                    size: s
                })
            }
            return _
        }, [t, s]);
        return (0, i.jsx)("div", {
            ...h,
            className: a()(d.wrapper, E, {
                [d.selectable]: I,
                [d.selected]: I && n
            }),
            onFocus: O,
            onBlur: p,
            onMouseOver: R,
            onMouseLeave: C,
            children: (0, i.jsx)(o.default, {
                className: d.mask,
                mask: I && (n || m) ? o.MaskIDs.SQUIRCLE : o.MaskIDs.AVATAR_DEFAULT,
                width: s,
                height: c,
                children: (0, i.jsx)("img", {
                    alt: "",
                    className: d.icon,
                    style: {
                        width: s,
                        height: c
                    },
                    src: g
                })
            })
        })
    }
}