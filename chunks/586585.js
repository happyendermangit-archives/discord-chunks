function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CTAType: function() {
            return r
        }
    });
    var i, r, a = n("735250");
    n("470079");
    var s = n("481060"),
        o = n("285952"),
        l = n("976644"),
        u = n("612853"),
        d = n("689938"),
        _ = n("655738");
    (i = r || (r = {}))[i.CONTINUE = 0] = "CONTINUE", i[i.UPGRADE = 1] = "UPGRADE", i[i.PURCHASE = 2] = "PURCHASE";
    let c = e => {
        let {
            onBack: t,
            backText: n,
            primaryIcon: i,
            primaryCTA: r,
            primaryType: c,
            primaryText: E,
            primaryTooltip: I,
            primaryDisabled: T,
            primarySubmitting: f,
            onPrimary: S,
            secondaryText: h,
            onSecondary: A
        } = e;
        return (0, a.jsxs)(s.ModalFooter, {
            justify: o.default.Justify.BETWEEN,
            align: o.default.Align.CENTER,
            children: [(() => {
                if (null == r || null == E) return null;
                let e = 2 === r ? l.default : s.Button,
                    t = {
                        innerClassName: _.button,
                        type: c,
                        disabled: T,
                        submitting: f,
                        color: 0 === r ? s.Button.Colors.BRAND : s.Button.Colors.GREEN,
                        onClick: S
                    };
                return null != I ? (0, a.jsx)(s.Tooltip, {
                    text: I,
                    children: n => (0, a.jsxs)(e, {
                        ...n,
                        ...t,
                        children: [null == i ? null : (0, a.jsx)(i, {
                            className: _.primaryIcon
                        }), E]
                    })
                }) : (0, a.jsxs)(e, {
                    ...t,
                    children: [null == i ? null : (0, a.jsx)(i, {
                        className: _.primaryIcon
                    }), E]
                })
            })(), null == h ? null : (0, a.jsx)(s.Button, {
                color: s.Button.Colors.PRIMARY,
                look: s.Button.Looks.LINK,
                onClick: A,
                children: h
            }), (0, a.jsx)(u.default, {}), null == t ? null : (0, a.jsx)(s.Button, {
                className: _.back,
                color: s.Button.Colors.PRIMARY,
                look: s.Button.Looks.LINK,
                onClick: t,
                children: null != n ? n : d.default.Messages.BACK
            })]
        })
    };
    c.CTAType = r, t.default = c
}