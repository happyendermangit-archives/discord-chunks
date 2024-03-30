function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("629815");
    t.default = {
        show: function(e, t, n, o, i) {
            r.default.dispatch({
                type: "NOTICE_SHOW",
                notice: {
                    id: i,
                    type: e,
                    message: t,
                    buttonText: n,
                    callback: o
                }
            })
        },
        dismiss: function(e) {
            r.default.dispatch(function(e) {
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
            }({
                type: "NOTICE_DISMISS"
            }, e))
        }
    }
}