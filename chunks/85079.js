function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("784184"),
        i = n("100064"),
        a = n("264518"),
        u = n("24039"),
        s = n("941504");

    function l(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
            n = function() {
                i.default.updatedUnsyncedSettings({
                    disableEmbeddedActivityPopOutAlert: !0
                }), e()
            };
        u.default.disableEmbeddedActivityPopOutAlert ? e() : (0, o.openModal)(function(o) {
            return r.createElement(a.default, function(e) {
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
                confirmText: s.default.Messages.EMBEDDED_ACTIVITIES_YEP,
                secondaryConfirmText: s.default.Messages.DONT_ASK_AGAIN,
                title: s.default.Messages.EMBEDDED_ACTIVITIES_CAREFUL,
                cancelText: s.default.Messages.EMBEDDED_ACTIVITIES_NVM,
                onConfirm: e,
                onConfirmSecondary: n,
                onCancel: t,
                body: s.default.Messages.EMBEDDED_ACTIVITIES_POP_OUT_WARNING
            }, o))
        })
    }
}