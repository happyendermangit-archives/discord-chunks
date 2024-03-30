function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clearMessageCombo: function() {
            return f
        },
        updateCombo: function() {
            return c
        },
        updateComboOnMessageSend: function() {
            return d
        },
        updatePoggermodeSettings: function() {
            return l
        }
    });
    var r = n("629815"),
        o = n("217014"),
        i = n("251305"),
        a = n("229053"),
        u = n("20794");

    function s(e) {
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

    function l(e) {
        r.default.dispatch({
            type: "POGGERMODE_SETTINGS_UPDATE",
            settings: e
        });
        var t = s({}, i.default.getState(), e);
        (0, u.default)(t)
    }

    function c(e) {
        r.default.dispatch(s({
            type: "POGGERMODE_UPDATE_COMBO"
        }, e))
    }

    function f(e) {
        var t, n;
        r.default.dispatch({
            type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
            comboMessage: (t = s({}, e), n = (n = {
                displayed: !0
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t)
        })
    }

    function d(e, t) {
        var n, i = o.default.getId(),
            u = a.default.getUserCombo(i, e);
        null != u && r.default.dispatch({
            type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
            comboMessage: {
                combo: u,
                channelId: e,
                messageId: t,
                displayed: !1
            }
        });
        var s = null != u && (null == u ? void 0 : u.value) > 0 ? (null !== (n = null == u ? void 0 : u.multiplier) && void 0 !== n ? n : 0) + 1 : 1;
        r.default.dispatch({
            type: "POGGERMODE_UPDATE_COMBO",
            channelId: e,
            userId: i,
            multiplier: s,
            value: 0
        })
    }
}