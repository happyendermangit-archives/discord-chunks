function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("470079"),
        o = n("57893"),
        i = n("396586"),
        a = n("264437"),
        u = n("444226"),
        s = n("877987"),
        l = n("281767"),
        c = n("27729");

    function f(e) {
        var t = e.activity,
            n = e.user,
            f = e.guild,
            d = e.channelId,
            _ = e.onClose,
            E = e.analyticsParams,
            p = (0, i.default)().analyticsLocations,
            m = (0, a.useUserProfileAnalyticsContext)(),
            y = m.trackUserProfileAction,
            I = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(m, ["trackUserProfileAction"]);
        return r.createElement(s.default, null, r.createElement(o.default, {
            type: o.UserActivityTypes.USER_POPOUT_V2,
            activity: t,
            className: c.activity,
            user: n,
            guildId: null == f ? void 0 : f.id,
            channelId: d,
            source: l.AnalyticsLocations.PROFILE_POPOUT,
            onOpenGameProfile: _,
            onAction: function() {
                y({
                    action: "JOIN_ACTIVITY"
                }), (0, u.trackUserProfileActivityJoined)(function(e) {
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
                    activityType: null == t ? void 0 : t.type,
                    applicationId: null == t ? void 0 : t.application_id,
                    analyticsLocations: p
                }, I)), null == _ || _()
            },
            actionColor: c.buttonColor,
            analyticsParams: E
        }))
    }
}