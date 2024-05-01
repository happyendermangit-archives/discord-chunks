function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("952265"),
        a = n("468026"),
        s = n("689938");
    t.default = {
        show(e) {
            let {
                title: t,
                body: n,
                confirmColor: s,
                confirmText: o,
                cancelText: l,
                onConfirm: u,
                onCancel: d,
                onCloseCallback: _,
                secondaryConfirmText: c,
                onConfirmSecondary: E,
                className: I,
                titleClassName: T
            } = e;
            (0, r.openModal)(e => (0, i.jsx)(a.default, {
                ...e,
                title: t,
                body: n,
                confirmColor: s,
                confirmText: o,
                cancelText: l,
                onConfirm: u,
                onCancel: d,
                secondaryConfirmText: c,
                onConfirmSecondary: E,
                className: I,
                titleClassName: T
            }), {
                onCloseCallback: _
            })
        },
        close() {},
        confirm(e) {
            return new Promise(t => {
                this.show({
                    onConfirm() {
                        t(!0)
                    },
                    cancelText: s.default.Messages.CANCEL,
                    onCancel() {
                        t(!1)
                    },
                    ...e
                })
            })
        }
    }
}