function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
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
        f = n("782340"),
        _ = n("565695"),
        h = e => {
            let t, n, s, {
                body: h,
                cancelText: E,
                className: g,
                confirmColor: m,
                confirmText: p = f.default.Messages.OKAY,
                secondaryConfirmText: S,
                onCancel: v,
                onClose: T,
                onConfirm: I,
                onConfirmSecondary: C,
                title: A,
                transitionState: y,
                titleClassName: N
            } = e;
            return null != E && "" !== E && (t = (0, i.jsx)(a.Button, {
                type: "button",
                size: a.Button.Sizes.XLARGE,
                color: a.Button.Colors.PRIMARY,
                onClick: () => {
                    null == T || T(), null == v || v()
                },
                className: _.secondaryButton,
                children: E
            })), null != p && "" !== p && (n = (0, i.jsx)(a.Button, {
                type: "submit",
                color: m,
                size: a.Button.Sizes.XLARGE,
                className: r(_.primaryButton, null != t ? _.gutter : null),
                autoFocus: !0,
                children: p
            })), null != S && "" !== S && (s = (0, i.jsx)(o.Clickable, {
                onClick: () => {
                    null == T || T(), null == C || C()
                },
                className: _.minorContainer,
                children: (0, i.jsx)(d.Text, {
                    className: _.secondaryAction,
                    variant: "text-xs/normal",
                    children: S
                })
            })), (0, i.jsx)(u.ModalRoot, {
                transitionState: y,
                className: r(g, _.container),
                "aria-label": A,
                children: (0, i.jsxs)("form", {
                    onSubmit: e => {
                        null != e && e.preventDefault(), null == T || T(), null == I || I()
                    },
                    className: _.form,
                    children: [(0, i.jsx)(u.ModalContent, {
                        className: _.modalContent,
                        children: (0, i.jsxs)(c.default, {
                            direction: c.default.Direction.VERTICAL,
                            justify: c.default.Justify.CENTER,
                            className: _.content,
                            children: [null != A && (0, i.jsx)(l.FormTitle, {
                                tag: "h2",
                                className: r(_.title, N),
                                children: A
                            }), null != h && (0, i.jsx)(d.Text, {
                                variant: "text-md/normal",
                                className: _.body,
                                children: h
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