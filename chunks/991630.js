function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        o = n.n(a),
        s = n("587974"),
        r = n("315102"),
        u = n("524768"),
        d = n("278435"),
        c = n("363577");

    function p(e) {
        let {
            section: t,
            isSelected: n,
            width: a,
            height: p,
            className: f,
            selectable: m = !1,
            onFocus: _,
            onBlur: I,
            onMouseOver: T,
            onMouseLeave: A,
            ...E
        } = e, [C, N] = l.useState(!1), g = l.useCallback(() => {
            N(!0), null == _ || _()
        }, [_]), M = l.useCallback(() => {
            N(!1), null == I || I()
        }, [I]), O = l.useCallback(() => {
            N(!0), null == T || T()
        }, [T]), S = l.useCallback(() => {
            N(!1), null == A || A()
        }, [A]), h = l.useMemo(() => {
            if (t.type === u.ApplicationCommandSectionType.APPLICATION) {
                var e;
                return r.default.getApplicationIconURL({
                    id: t.id,
                    icon: t.icon,
                    bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
                    botIconFirst: !0,
                    size: a
                })
            }
            return c
        }, [t, a]);
        return (0, i.jsx)("div", {
            ...E,
            className: o(d.wrapper, f, {
                [d.selectable]: m,
                [d.selected]: m && n
            }),
            onFocus: g,
            onBlur: M,
            onMouseOver: O,
            onMouseLeave: S,
            children: (0, i.jsx)(s.default, {
                className: d.mask,
                mask: m && (n || C) ? s.MaskIDs.SQUIRCLE : s.MaskIDs.AVATAR_DEFAULT,
                width: a,
                height: p,
                children: (0, i.jsx)("img", {
                    alt: "",
                    className: d.icon,
                    style: {
                        width: a,
                        height: p
                    },
                    src: h
                })
            })
        })
    }
}