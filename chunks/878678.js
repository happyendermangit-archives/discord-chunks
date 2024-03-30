function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ConfirmModal: function() {
            return _
        },
        DeclarativeConfirmModal: function() {
            return c
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("693789"),
        l = n("260034"),
        u = n("709692"),
        d = n("284918");

    function _(e) {
        let t, n, {
                header: s,
                children: _,
                confirmText: c,
                cancelText: E,
                className: I,
                onConfirm: T,
                onCancel: f,
                onClose: S,
                onCloseCallback: h,
                bodyClassName: A,
                transitionState: m,
                loading: N = !1,
                confirmButtonColor: O = o.Button.Colors.RED,
                focusCancel: p = !1
            } = e,
            R = r.useRef(null);
        return r.useEffect(() => {
            !p && setTimeout(() => {
                var e;
                return null === (e = R.current) || void 0 === e ? void 0 : e.focus()
            }, 0)
        }, [p]), r.useLayoutEffect(() => () => null == h ? void 0 : h()), null != E && (t = (0, i.jsx)(o.Button, {
            type: "button",
            look: o.Button.Looks.LINK,
            color: o.Button.Colors.PRIMARY,
            disabled: N,
            onClick: () => {
                null == f || f(), S()
            },
            autoFocus: p,
            children: E
        })), null != c && (n = (0, i.jsx)(o.Button, {
            buttonRef: R,
            type: "submit",
            color: O,
            submitting: N,
            onClick: async () => {
                try {
                    await (null == T ? void 0 : T()), S()
                } catch (e) {
                    throw e
                }
            },
            autoFocus: !p,
            children: c
        })), (0, i.jsxs)(u.ModalRoot, {
            className: I,
            transitionState: m,
            children: [null != s ? (0, i.jsx)(u.ModalHeader, {
                separator: !1,
                children: (0, i.jsx)(l.Heading, {
                    variant: "heading-lg/semibold",
                    children: s
                })
            }) : null, (0, i.jsx)(u.ModalContent, {
                className: a()(d.content, A),
                children: _
            }), (0, i.jsxs)(u.ModalFooter, {
                children: [n, t]
            })]
        })
    }

    function c(e) {
        return (0, i.jsx)(u.Modal, {
            onCloseRequest: e.dismissable ? e.onCancel : null,
            renderModal: t => (0, i.jsx)(_, {
                ...t,
                ...e
            })
        })
    }
}