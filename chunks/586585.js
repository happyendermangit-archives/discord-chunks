function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CTAType: function() {
            return r
        }
    });
    var i, r, s = n("735250");
    n("470079");
    var a = n("481060"),
        o = n("285952"),
        l = n("976644"),
        u = n("612853"),
        d = n("689938"),
        _ = n("80481");
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
            secondaryText: A,
            onSecondary: h
        } = e;
        return (0, s.jsxs)(a.ModalFooter, {
            justify: o.default.Justify.BETWEEN,
            align: o.default.Align.CENTER,
            children: [(() => {
                if (null == r || null == E) return null;
                let e = 2 === r ? l.default : a.Button,
                    t = {
                        innerClassName: _.button,
                        type: c,
                        disabled: T,
                        submitting: f,
                        color: 0 === r ? a.Button.Colors.BRAND : a.Button.Colors.GREEN,
                        onClick: S
                    };
                return null != I ? (0, s.jsx)(a.Tooltip, {
                    text: I,
                    children: n => (0, s.jsxs)(e, {
                        ...n,
                        ...t,
                        children: [null == i ? null : (0, s.jsx)(i, {
                            className: _.primaryIcon
                        }), E]
                    })
                }) : (0, s.jsxs)(e, {
                    ...t,
                    children: [null == i ? null : (0, s.jsx)(i, {
                        className: _.primaryIcon
                    }), E]
                })
            })(), null == A ? null : (0, s.jsx)(a.Button, {
                color: a.Button.Colors.PRIMARY,
                look: a.Button.Looks.LINK,
                onClick: h,
                children: A
            }), (0, s.jsx)(u.default, {}), null == t ? null : (0, s.jsx)(a.Button, {
                className: _.back,
                color: a.Button.Colors.PRIMARY,
                look: a.Button.Looks.LINK,
                onClick: t,
                children: null != n ? n : d.default.Messages.BACK
            })]
        })
    };
    c.CTAType = r, t.default = c
}