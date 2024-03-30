function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        close: function() {
            return u
        },
        open: function() {
            return i
        },
        openChannelCallPopout: function() {
            return a
        },
        setAlwaysOnTop: function() {
            return s
        }
    });
    var r = n("629815"),
        o = {
            menubar: !1,
            toolbar: !1,
            location: !1,
            directories: !1
        };

    function i(e, t, n) {
        return r.default.dispatch({
            type: "POPOUT_WINDOW_OPEN",
            key: e,
            features: function(e) {
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
            }({}, o, n),
            render: t
        })
    }

    function a(e) {
        return r.default.dispatch({
            type: "CHANNEL_CALL_POPOUT_WINDOW_OPEN",
            channel: e
        })
    }

    function u(e) {
        return r.default.dispatch({
            type: "POPOUT_WINDOW_CLOSE",
            key: e
        })
    }

    function s(e, t) {
        return r.default.dispatch({
            type: "POPOUT_WINDOW_SET_ALWAYS_ON_TOP",
            alwaysOnTop: t,
            key: e
        })
    }
}