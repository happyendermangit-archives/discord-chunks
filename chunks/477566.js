function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("37983");
    n("884691");
    var r = n("551042"),
        s = n("135230"),
        a = n("782340"),
        o = {
            show(e) {
                let {
                    title: t,
                    body: n,
                    confirmColor: a,
                    confirmText: o,
                    cancelText: l,
                    onConfirm: u,
                    onCancel: c,
                    onCloseCallback: d,
                    secondaryConfirmText: f,
                    onConfirmSecondary: E,
                    className: p,
                    titleClassName: h
                } = e;
                (0, r.openModal)(e => (0, i.jsx)(s.default, {
                    ...e,
                    title: t,
                    body: n,
                    confirmColor: a,
                    confirmText: o,
                    cancelText: l,
                    onConfirm: u,
                    onCancel: c,
                    secondaryConfirmText: f,
                    onConfirmSecondary: E,
                    className: p,
                    titleClassName: h
                }), {
                    onCloseCallback: d
                })
            },
            close() {},
            confirm(e) {
                return new Promise(t => {
                    this.show({
                        onConfirm() {
                            t(!0)
                        },
                        cancelText: a.default.Messages.CANCEL,
                        onCancel() {
                            t(!1)
                        },
                        ...e
                    })
                })
            }
        }
}