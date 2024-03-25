function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CTAType: function() {
            return a
        },
        default: function() {
            return p
        }
    });
    var i, a, s = n("37983");
    n("884691");
    var r = n("77078"),
        l = n("145131"),
        o = n("181114"),
        u = n("376641"),
        c = n("782340"),
        d = n("30501");
    (i = a || (a = {}))[i.CONTINUE = 0] = "CONTINUE", i[i.UPGRADE = 1] = "UPGRADE", i[i.PURCHASE = 2] = "PURCHASE";
    let f = e => {
        let {
            onBack: t,
            backText: n,
            primaryIcon: i,
            primaryCTA: a,
            primaryType: f,
            primaryText: p,
            primaryTooltip: m,
            primaryDisabled: h,
            primarySubmitting: S,
            onPrimary: I,
            secondaryText: g,
            onSecondary: C
        } = e;
        return (0, s.jsxs)(r.ModalFooter, {
            justify: l.default.Justify.BETWEEN,
            align: l.default.Align.CENTER,
            children: [(() => {
                if (null == a || null == p) return null;
                let e = 2 === a ? o.default : r.Button,
                    t = {
                        innerClassName: d.button,
                        type: f,
                        disabled: h,
                        submitting: S,
                        color: 0 === a ? r.Button.Colors.BRAND : r.Button.Colors.GREEN,
                        onClick: I
                    };
                return null != m ? (0, s.jsx)(r.Tooltip, {
                    text: m,
                    children: n => (0, s.jsxs)(e, {
                        ...n,
                        ...t,
                        children: [null == i ? null : (0, s.jsx)(i, {
                            className: d.primaryIcon
                        }), p]
                    })
                }) : (0, s.jsxs)(e, {
                    ...t,
                    children: [null == i ? null : (0, s.jsx)(i, {
                        className: d.primaryIcon
                    }), p]
                })
            })(), null == g ? null : (0, s.jsx)(r.Button, {
                color: r.Button.Colors.PRIMARY,
                look: r.Button.Looks.LINK,
                onClick: C,
                children: g
            }), (0, s.jsx)(u.default, {}), null == t ? null : (0, s.jsx)(r.Button, {
                className: d.back,
                color: r.Button.Colors.PRIMARY,
                look: r.Button.Looks.LINK,
                onClick: t,
                children: null != n ? n : c.default.Messages.BACK
            })]
        })
    };
    f.CTAType = a;
    var p = f
}