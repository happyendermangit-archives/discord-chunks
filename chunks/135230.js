function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
        a = n("271841"),
        o = n("227645"),
        l = n("818810"),
        u = n("516256"),
        d = n("577776"),
        c = n("145131"),
        _ = n("782340"),
        f = n("565695"),
        E = e => {
            let t, n, s, {
                body: E,
                cancelText: h,
                className: g,
                confirmColor: m,
                confirmText: p = _.default.Messages.OKAY,
                secondaryConfirmText: S,
                onCancel: v,
                onClose: T,
                onConfirm: I,
                onConfirmSecondary: A,
                title: C,
                transitionState: y,
                titleClassName: N
            } = e;
            return null != h && "" !== h && (t = (0, i.jsx)(a.Button, {
                type: "button",
                size: a.Button.Sizes.XLARGE,
                color: a.Button.Colors.PRIMARY,
                onClick: () => {
                    null == T || T(), null == v || v()
                },
                className: f.secondaryButton,
                children: h
            })), null != p && "" !== p && (n = (0, i.jsx)(a.Button, {
                type: "submit",
                color: m,
                size: a.Button.Sizes.XLARGE,
                className: r(f.primaryButton, null != t ? f.gutter : null),
                autoFocus: !0,
                children: p
            })), null != S && "" !== S && (s = (0, i.jsx)(o.Clickable, {
                onClick: () => {
                    null == T || T(), null == A || A()
                },
                className: f.minorContainer,
                children: (0, i.jsx)(d.Text, {
                    className: f.secondaryAction,
                    variant: "text-xs/normal",
                    children: S
                })
            })), (0, i.jsx)(u.ModalRoot, {
                transitionState: y,
                className: r(g, f.container),
                "aria-label": C,
                children: (0, i.jsxs)("form", {
                    onSubmit: e => {
                        null != e && e.preventDefault(), null == T || T(), null == I || I()
                    },
                    className: f.form,
                    children: [(0, i.jsx)(u.ModalContent, {
                        className: f.modalContent,
                        children: (0, i.jsxs)(c.default, {
                            direction: c.default.Direction.VERTICAL,
                            justify: c.default.Justify.CENTER,
                            className: f.content,
                            children: [null != C && (0, i.jsx)(l.FormTitle, {
                                tag: "h2",
                                className: r(f.title, N),
                                children: C
                            }), null != E && (0, i.jsx)(d.Text, {
                                variant: "text-md/normal",
                                className: f.body,
                                children: E
                            })]
                        })
                    }), (0, i.jsxs)(u.ModalFooter, {
                        justify: c.default.Justify.BETWEEN,
                        wrap: c.default.Wrap.WRAP,
                        children: [n, t, s]
                    })]
                })
            })
        }
}