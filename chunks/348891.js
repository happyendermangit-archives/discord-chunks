function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ConfirmModal: function() {
            return c
        },
        DeclarativeConfirmModal: function() {
            return _
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("271841"),
        l = n("605451"),
        u = n("314569"),
        d = n("662828");

    function c(e) {
        let t, n, {
                header: r,
                children: c,
                confirmText: _,
                cancelText: f,
                className: E,
                onConfirm: h,
                onCancel: g,
                onClose: m,
                onCloseCallback: p,
                bodyClassName: S,
                transitionState: T,
                loading: v = !1,
                confirmButtonColor: I = o.Button.Colors.RED,
                focusCancel: A = !1
            } = e,
            C = s.useRef(null);
        return s.useEffect(() => {
            !A && setTimeout(() => {
                var e;
                return null === (e = C.current) || void 0 === e ? void 0 : e.focus()
            }, 0)
        }, [A]), s.useLayoutEffect(() => () => null == p ? void 0 : p()), null != f && (t = (0, i.jsx)(o.Button, {
            type: "button",
            look: o.Button.Looks.LINK,
            color: o.Button.Colors.PRIMARY,
            disabled: v,
            onClick: () => {
                null == g || g(), m()
            },
            autoFocus: A,
            children: f
        })), null != _ && (n = (0, i.jsx)(o.Button, {
            buttonRef: C,
            type: "submit",
            color: I,
            submitting: v,
            onClick: async () => {
                try {
                    await (null == h ? void 0 : h()), m()
                } catch (e) {
                    throw e
                }
            },
            autoFocus: !A,
            children: _
        })), (0, i.jsxs)(u.ModalRoot, {
            className: E,
            transitionState: T,
            children: [null != r ? (0, i.jsx)(u.ModalHeader, {
                separator: !1,
                children: (0, i.jsx)(l.Heading, {
                    variant: "heading-lg/semibold",
                    children: r
                })
            }) : null, (0, i.jsx)(u.ModalContent, {
                className: a(d.content, S),
                children: c
            }), (0, i.jsxs)(u.ModalFooter, {
                children: [n, t]
            })]
        })
    }

    function _(e) {
        return (0, i.jsx)(u.Modal, {
            onCloseRequest: e.dismissable ? e.onCancel : null,
            renderModal: t => (0, i.jsx)(c, {
                ...t,
                ...e
            })
        })
    }
}