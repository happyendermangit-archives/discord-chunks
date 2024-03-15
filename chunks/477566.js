function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("551042"),
        r = n("135230"),
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
                    onCancel: d,
                    onCloseCallback: c,
                    secondaryConfirmText: f,
                    onConfirmSecondary: _,
                    className: E,
                    titleClassName: h
                } = e;
                (0, s.openModal)(e => (0, i.jsx)(r.default, {
                    ...e,
                    title: t,
                    body: n,
                    confirmColor: a,
                    confirmText: o,
                    cancelText: l,
                    onConfirm: u,
                    onCancel: d,
                    secondaryConfirmText: f,
                    onConfirmSecondary: _,
                    className: E,
                    titleClassName: h
                }), {
                    onCloseCallback: c
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