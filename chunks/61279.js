function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openStartBroadcastConfirmModal: function() {
            return l
        },
        openStopBroadcastConfirmModal: function() {
            return s
        }
    });
    var r = n("470079"),
        o = n("784184"),
        i = n("650655"),
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

    function s(e) {
        (0, o.openModal)(function(t) {
            return r.createElement(o.ConfirmModal, u({
                header: a.default.Messages.STOP_STREAMING,
                confirmText: a.default.Messages.STOP_STREAMING,
                cancelText: a.default.Messages.CANCEL,
                onConfirm: function() {
                    (0, i.stopBroadcast)(), e()
                }
            }, t), r.createElement(o.Text, {
                variant: "text-md/normal"
            }, a.default.Messages.BROADCASTING_STOP_STREAM_CONFIRM_BODY))
        })
    }

    function l(e) {
        (0, o.openModal)(function(t) {
            return r.createElement(o.ConfirmModal, u({
                header: a.default.Messages.START_STREAMING,
                confirmText: a.default.Messages.START_STREAMING,
                cancelText: a.default.Messages.CANCEL,
                onConfirm: e,
                confirmButtonColor: o.Button.Colors.BRAND
            }, t), r.createElement(o.Text, {
                variant: "text-md/normal"
            }, a.default.Messages.BROADCASTING_START_STREAM_CONFIRM_BODY))
        })
    }
}