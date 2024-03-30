function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("37295"),
        o = n("53867"),
        i = n("930949"),
        a = n("208454"),
        u = n("941504"),
        s = "legacy_username";

    function l(e) {
        var t, n = o.LegacyUsernameDisabled.useSetting(),
            l = (0, r.useStateFromStores)([a.default], function() {
                return a.default.getCurrentUser()
            }),
            c = (0, r.useStateFromStores)([i.default], function() {
                return i.default.hidePersonalInformation
            });
        if (null == e) return [];
        var f = null !== (t = null == e ? void 0 : e.getBadges()) && void 0 !== t ? t : [];
        return null != l && l.id === e.userId && n && (f = f.filter(function(e) {
            return e.id !== s
        })), c && (f = f.map(function(e) {
            var t, n;
            return t = function(e) {
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
            }({}, e), n = (n = {
                description: e.id === s ? u.default.Messages.STREAMER_MODE_ENABLED : e.description
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t
        })), f
    }
}