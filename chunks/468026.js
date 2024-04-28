function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("693789"),
        o = n("1561"),
        l = n("512983"),
        u = n("466377"),
        d = n("993365"),
        _ = n("285952"),
        c = n("689938"),
        E = n("292176");
    t.default = e => {
        let t, n, r, {
            body: I,
            cancelText: T,
            className: f,
            confirmColor: S,
            confirmText: h = c.default.Messages.OKAY,
            secondaryConfirmText: A,
            onCancel: m,
            onClose: N,
            onConfirm: p,
            onConfirmSecondary: O,
            title: R,
            transitionState: C,
            titleClassName: g
        } = e;
        return null != T && "" !== T && (t = (0, i.jsx)(a.Button, {
            type: "button",
            size: a.Button.Sizes.XLARGE,
            color: a.Button.Colors.PRIMARY,
            onClick: () => {
                null == N || N(), null == m || m()
            },
            className: E.secondaryButton,
            children: T
        })), null != h && "" !== h && (n = (0, i.jsx)(a.Button, {
            type: "submit",
            color: S,
            size: a.Button.Sizes.XLARGE,
            className: s()(E.primaryButton, null != t ? E.gutter : null),
            autoFocus: !0,
            children: h
        })), null != A && "" !== A && (r = (0, i.jsx)(o.Clickable, {
            onClick: () => {
                null == N || N(), null == O || O()
            },
            className: E.minorContainer,
            children: (0, i.jsx)(d.Text, {
                className: E.secondaryAction,
                variant: "text-xs/normal",
                children: A
            })
        })), (0, i.jsx)(u.ModalRoot, {
            transitionState: C,
            className: s()(f, E.container),
            "aria-label": R,
            children: (0, i.jsxs)("form", {
                onSubmit: e => {
                    null != e && e.preventDefault(), null == N || N(), null == p || p()
                },
                className: E.form,
                children: [(0, i.jsx)(u.ModalContent, {
                    className: E.modalContent,
                    children: (0, i.jsxs)(_.default, {
                        direction: _.default.Direction.VERTICAL,
                        justify: _.default.Justify.CENTER,
                        className: E.content,
                        children: [null != R && (0, i.jsx)(l.FormTitle, {
                            tag: "h2",
                            className: s()(E.title, g),
                            children: R
                        }), null != I && (0, i.jsx)(d.Text, {
                            variant: "text-md/normal",
                            className: E.body,
                            children: I
                        })]
                    })
                }), (0, i.jsxs)(u.ModalFooter, {
                    justify: _.default.Justify.BETWEEN,
                    wrap: _.default.Wrap.WRAP,
                    children: [n, t, r]
                })]
            })
        })
    }
}