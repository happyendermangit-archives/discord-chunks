function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("784184"),
        a = n("661961"),
        u = n("961947"),
        s = n("264518"),
        l = n("999220"),
        c = n("281767"),
        f = n("941504");

    function d() {
        var e = (0, o.useStateFromStores)([l.default], function() {
                return l.default.shouldShowWarning()
            }, []),
            t = r.useRef(null);

        function n() {
            null !== t.current && ((0, i.closeModal)(t.current), t.current = null)
        }

        function d() {
            u.default.clearVADWarning()
        }
        return r.useEffect(function() {
            return e ? t.current = (0, i.openModal)(function(e) {
                    return r.createElement(s.default, function(e) {
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
                        title: f.default.Messages.VAD_PERMISSION_TITLE,
                        body: f.default.Messages.VAD_PERMISSION_BODY,
                        onCancel: d,
                        cancelText: f.default.Messages.VAD_PERMISSION_OKAY,
                        confirmText: f.default.Messages.VAD_PERMISSION_ENABLE_PTT,
                        onConfirm: function() {
                            a.default.setMode(c.InputModes.PUSH_TO_TALK), d()
                        }
                    }, e))
                }) : n(),
                function() {
                    n()
                }
        }, [e]), null
    }
}