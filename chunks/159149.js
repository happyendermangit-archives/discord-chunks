function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CTAType: function() {
            return i
        },
        default: function() {
            return m
        }
    });
    var l, i, a = n("37983");
    n("884691");
    var s = n("77078"),
        r = n("145131"),
        o = n("181114"),
        u = n("376641"),
        d = n("782340"),
        c = n("30501");
    (l = i || (i = {}))[l.CONTINUE = 0] = "CONTINUE", l[l.UPGRADE = 1] = "UPGRADE", l[l.PURCHASE = 2] = "PURCHASE";
    let f = e => {
        let {
            onBack: t,
            backText: n,
            primaryIcon: l,
            primaryCTA: i,
            primaryType: f,
            primaryText: m,
            primaryTooltip: p,
            primaryDisabled: h,
            primarySubmitting: E,
            onPrimary: g,
            secondaryText: S,
            onSecondary: C
        } = e;
        return (0, a.jsxs)(s.ModalFooter, {
            justify: r.default.Justify.BETWEEN,
            align: r.default.Align.CENTER,
            children: [(() => {
                if (null == i || null == m) return null;
                let e = 2 === i ? o.default : s.Button,
                    t = {
                        innerClassName: c.button,
                        type: f,
                        disabled: h,
                        submitting: E,
                        color: 0 === i ? s.Button.Colors.BRAND : s.Button.Colors.GREEN,
                        onClick: g
                    };
                return null != p ? (0, a.jsx)(s.Tooltip, {
                    text: p,
                    children: n => (0, a.jsxs)(e, {
                        ...n,
                        ...t,
                        children: [null == l ? null : (0, a.jsx)(l, {
                            className: c.primaryIcon
                        }), m]
                    })
                }) : (0, a.jsxs)(e, {
                    ...t,
                    children: [null == l ? null : (0, a.jsx)(l, {
                        className: c.primaryIcon
                    }), m]
                })
            })(), null == S ? null : (0, a.jsx)(s.Button, {
                color: s.Button.Colors.PRIMARY,
                look: s.Button.Looks.LINK,
                onClick: C,
                children: S
            }), (0, a.jsx)(u.default, {}), null == t ? null : (0, a.jsx)(s.Button, {
                className: c.back,
                color: s.Button.Colors.PRIMARY,
                look: s.Button.Looks.LINK,
                onClick: t,
                children: null != n ? n : d.default.Messages.BACK
            })]
        })
    };
    f.CTAType = i;
    var m = f
}