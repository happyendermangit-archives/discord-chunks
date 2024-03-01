function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ConfirmModal: function() {
            return d
        },
        DeclarativeConfirmModal: function() {
            return f
        }
    });
    var i = n("37983"),
        r = n("884691"),
        s = n("414456"),
        a = n.n(s),
        o = n("271841"),
        l = n("605451"),
        u = n("314569"),
        c = n("662828");

    function d(e) {
        let t, n, {
                header: s,
                children: d,
                confirmText: f,
                cancelText: E,
                className: p,
                onConfirm: h,
                onCancel: _,
                onClose: S,
                onCloseCallback: m,
                bodyClassName: T,
                transitionState: g,
                loading: I = !1,
                confirmButtonColor: C = o.Button.Colors.RED,
                focusCancel: v = !1
            } = e,
            A = r.useRef(null);
        return r.useEffect(() => {
            !v && setTimeout(() => {
                var e;
                return null === (e = A.current) || void 0 === e ? void 0 : e.focus()
            }, 0)
        }, [v]), r.useLayoutEffect(() => () => null == m ? void 0 : m()), null != E && (t = (0, i.jsx)(o.Button, {
            type: "button",
            look: o.Button.Looks.LINK,
            color: o.Button.Colors.PRIMARY,
            disabled: I,
            onClick: () => {
                null == _ || _(), S()
            },
            autoFocus: v,
            children: E
        })), null != f && (n = (0, i.jsx)(o.Button, {
            buttonRef: A,
            type: "submit",
            color: C,
            submitting: I,
            onClick: async () => {
                try {
                    await (null == h ? void 0 : h()), S()
                } catch (e) {
                    throw e
                }
            },
            autoFocus: !v,
            children: f
        })), (0, i.jsxs)(u.ModalRoot, {
            className: p,
            transitionState: g,
            children: [null != s ? (0, i.jsx)(u.ModalHeader, {
                separator: !1,
                children: (0, i.jsx)(l.Heading, {
                    variant: "heading-lg/semibold",
                    children: s
                })
            }) : null, (0, i.jsx)(u.ModalContent, {
                className: a(c.content, T),
                children: d
            }), (0, i.jsxs)(u.ModalFooter, {
                children: [n, t]
            })]
        })
    }

    function f(e) {
        return (0, i.jsx)(u.Modal, {
            onCloseRequest: e.dismissable ? e.onCancel : null,
            renderModal: t => (0, i.jsx)(d, {
                ...t,
                ...e
            })
        })
    }
}