function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("67381"),
        i = n("264518"),
        a = n("941504");

    function u(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }
    t.default = {
        show: function(e) {
            var t = e.title,
                n = e.body,
                a = e.confirmColor,
                s = e.confirmText,
                l = e.cancelText,
                c = e.onConfirm,
                f = e.onCancel,
                d = e.onCloseCallback,
                _ = e.secondaryConfirmText,
                E = e.onConfirmSecondary,
                p = e.className,
                m = e.titleClassName;
            (0, o.openModal)(function(e) {
                var o, d;
                return r.createElement(i.default, (o = u({}, e), d = (d = {
                    title: t,
                    body: n,
                    confirmColor: a,
                    confirmText: s,
                    cancelText: l,
                    onConfirm: c,
                    onCancel: f,
                    secondaryConfirmText: _,
                    onConfirmSecondary: E,
                    className: p,
                    titleClassName: m
                }, d), Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(d)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(d)).forEach(function(e) {
                    Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(d, e))
                }), o))
            }, {
                onCloseCallback: d
            })
        },
        close: function() {},
        confirm: function(e) {
            var t = this;
            return new Promise(function(n) {
                t.show(u({
                    onConfirm: function() {
                        n(!0)
                    },
                    cancelText: a.default.Messages.CANCEL,
                    onCancel: function() {
                        n(!1)
                    }
                }, e))
            })
        }
    }
}