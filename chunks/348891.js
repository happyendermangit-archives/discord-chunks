function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ConfirmModal: function() {
            return c
        },
        DeclarativeConfirmModal: function() {
            return f
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
                confirmText: f,
                cancelText: _,
                className: h,
                onConfirm: E,
                onCancel: g,
                onClose: m,
                onCloseCallback: p,
                bodyClassName: S,
                transitionState: v,
                loading: T = !1,
                confirmButtonColor: I = o.Button.Colors.RED,
                focusCancel: C = !1
            } = e,
            A = s.useRef(null);
        return s.useEffect(() => {
            !C && setTimeout(() => {
                var e;
                return null === (e = A.current) || void 0 === e ? void 0 : e.focus()
            }, 0)
        }, [C]), s.useLayoutEffect(() => () => null == p ? void 0 : p()), null != _ && (t = (0, i.jsx)(o.Button, {
            type: "button",
            look: o.Button.Looks.LINK,
            color: o.Button.Colors.PRIMARY,
            disabled: T,
            onClick: () => {
                null == g || g(), m()
            },
            autoFocus: C,
            children: _
        })), null != f && (n = (0, i.jsx)(o.Button, {
            buttonRef: A,
            type: "submit",
            color: I,
            submitting: T,
            onClick: async () => {
                try {
                    await (null == E ? void 0 : E()), m()
                } catch (e) {
                    throw e
                }
            },
            autoFocus: !C,
            children: f
        })), (0, i.jsxs)(u.ModalRoot, {
            className: h,
            transitionState: v,
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

    function f(e) {
        return (0, i.jsx)(u.Modal, {
            onCloseRequest: e.dismissable ? e.onCancel : null,
            renderModal: t => (0, i.jsx)(c, {
                ...t,
                ...e
            })
        })
    }
}