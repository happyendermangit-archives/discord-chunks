function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserProfileAnalyticsProvider: function() {
            return s
        },
        useUserProfileAnalyticsContext: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("396586"),
        i = n("444226");

    function a(e) {
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
    var u = r.createContext({
            layout: null,
            userId: null,
            guildId: null,
            channelId: null,
            messageId: null,
            roleId: null
        }),
        s = function(e) {
            var t = e.children,
                n = e.layout,
                s = e.userId,
                l = e.guildId,
                c = e.channelId,
                f = e.messageId,
                d = e.roleId,
                _ = e.shouldTrackViewOnMount,
                E = void 0 !== _ && _,
                p = (0, o.default)().analyticsLocations,
                m = r.useMemo(function() {
                    return {
                        layout: n,
                        userId: null != s ? s : null,
                        guildId: null != l ? l : null,
                        channelId: null != c ? c : null,
                        messageId: null != f ? f : null,
                        roleId: null != d ? d : null
                    }
                }, [n, s, l, c, f, d]);
            return r.useEffect(function() {
                E && (0, i.trackUserProfileAction)(a({
                    action: "VIEW",
                    analyticsLocations: p
                }, m))
            }, [E]), r.createElement(u.Provider, {
                value: m
            }, t)
        },
        l = function(e) {
            var t = r.useContext(u),
                n = (0, o.default)().analyticsLocations,
                s = r.useCallback(function(r) {
                    null != t.layout && null != t.userId && (0, i.trackUserProfileAction)(a({
                        analyticsLocations: null != e ? e : n
                    }, t, r))
                }, [t, e, n]);
            return a({
                trackUserProfileAction: s
            }, t)
        }
}