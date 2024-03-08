function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CTAType: function() {
            return l
        },
        default: function() {
            return p
        }
    });
    var i, l, a = n("37983");
    n("884691");
    var s = n("77078"),
        r = n("145131"),
        o = n("181114"),
        u = n("376641"),
        d = n("782340"),
        c = n("30501");
    (i = l || (l = {}))[i.CONTINUE = 0] = "CONTINUE", i[i.UPGRADE = 1] = "UPGRADE", i[i.PURCHASE = 2] = "PURCHASE";
    let f = e => {
        let {
            onBack: t,
            backText: n,
            primaryIcon: i,
            primaryCTA: l,
            primaryType: f,
            primaryText: p,
            primaryTooltip: m,
            primaryDisabled: h,
            primarySubmitting: x,
            onPrimary: E,
            secondaryText: y,
            onSecondary: g
        } = e;
        return (0, a.jsxs)(s.ModalFooter, {
            justify: r.default.Justify.BETWEEN,
            align: r.default.Align.CENTER,
            children: [(() => {
                if (null == l || null == p) return null;
                let e = 2 === l ? o.default : s.Button,
                    t = {
                        innerClassName: c.button,
                        type: f,
                        disabled: h,
                        submitting: x,
                        color: 0 === l ? s.Button.Colors.BRAND : s.Button.Colors.GREEN,
                        onClick: E
                    };
                return null != m ? (0, a.jsx)(s.Tooltip, {
                    text: m,
                    children: n => (0, a.jsxs)(e, {
                        ...n,
                        ...t,
                        children: [null == i ? null : (0, a.jsx)(i, {
                            className: c.primaryIcon
                        }), p]
                    })
                }) : (0, a.jsxs)(e, {
                    ...t,
                    children: [null == i ? null : (0, a.jsx)(i, {
                        className: c.primaryIcon
                    }), p]
                })
            })(), null == y ? null : (0, a.jsx)(s.Button, {
                color: s.Button.Colors.PRIMARY,
                look: s.Button.Looks.LINK,
                onClick: g,
                children: y
            }), (0, a.jsx)(u.default, {}), null == t ? null : (0, a.jsx)(s.Button, {
                className: c.back,
                color: s.Button.Colors.PRIMARY,
                look: s.Button.Looks.LINK,
                onClick: t,
                children: null != n ? n : d.default.Messages.BACK
            })]
        })
    };
    f.CTAType = l;
    var p = f
}