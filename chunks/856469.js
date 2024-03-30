function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("629815"),
        o = n("793633");
    t.default = {
        openNativeAppModal: function(e, t) {
            var i = this,
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            !o.CONFERENCE_MODE_ENABLED && (r.default.dispatch({
                type: "NATIVE_APP_MODAL_OPENING",
                code: e
            }), Promise.resolve().then(n.bind(n, "23501")).then(function(n) {
                var r = n.default;
                r.request(t, function(e) {
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
                    code: e
                }, a)).then(function(t) {
                    var n;
                    i.nativeModalOpened(null !== (n = null == t ? void 0 : t.code) && void 0 !== n ? n : e)
                }).catch(function() {
                    return i.nativeModalOpenFailed(e)
                }).then(function() {
                    return r.disconnect()
                })
            }))
        },
        nativeModalOpened: function(e) {
            r.default.dispatch({
                type: "NATIVE_APP_MODAL_OPENED",
                code: e
            })
        },
        nativeModalOpenFailed: function(e) {
            r.default.dispatch({
                type: "NATIVE_APP_MODAL_OPEN_FAILED",
                code: e
            })
        }
    }
}