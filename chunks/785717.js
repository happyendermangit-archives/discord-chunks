function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useUserProfileAnalyticsContext: function() {
            return d
        },
        useUserProfileAnalyticsProvider: function() {
            return u
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("906732"),
        a = n("221292");
    let o = [],
        l = r.createContext({
            layout: null,
            userId: null,
            guildId: null,
            channelId: null,
            messageId: null,
            roleId: null
        }),
        u = function(e) {
            let {
                layout: t,
                userId: n,
                guildId: u,
                channelId: d,
                messageId: _,
                roleId: c,
                newAnalyticsLocations: E = o
            } = e, I = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], {
                analyticsLocations: T
            } = (0, s.default)(E), f = r.useMemo(() => ({
                layout: t,
                userId: null != n ? n : null,
                guildId: null != u ? u : null,
                channelId: null != d ? d : null,
                messageId: null != _ ? _ : null,
                roleId: null != c ? c : null
            }), [t, n, u, d, _, c]);
            r.useEffect(() => {
                I && (0, a.trackUserProfileAction)({
                    action: "VIEW",
                    analyticsLocations: T,
                    layout: t,
                    userId: n,
                    guildId: u,
                    channelId: d,
                    messageId: _,
                    roleId: c
                })
            }, [I]);
            let S = r.useCallback(e => {
                (0, a.trackUserProfileAction)({
                    layout: t,
                    userId: n,
                    guildId: u,
                    channelId: d,
                    messageId: _,
                    roleId: c,
                    analyticsLocations: T,
                    ...e
                })
            }, [t, n, u, d, _, c, T]);
            return {
                UserProfileAnalyticsProvider: r.useCallback(e => {
                    let {
                        children: t
                    } = e;
                    return (0, i.jsx)(l.Provider, {
                        value: f,
                        children: (0, i.jsx)(s.AnalyticsLocationProvider, {
                            value: T,
                            children: t
                        })
                    })
                }, [f, T]),
                analyticsLocations: T,
                trackUserProfileAction: S
            }
        },
        d = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            let {
                layout: i,
                userId: o,
                guildId: u,
                channelId: d,
                messageId: _,
                roleId: c
            } = r.useContext(l), {
                analyticsLocations: E
            } = (0, s.default)(t), I = r.useCallback(e => {
                null != i && null != o && (0, a.trackUserProfileAction)({
                    layout: i,
                    userId: o,
                    guildId: u,
                    channelId: d,
                    messageId: _,
                    roleId: c,
                    analyticsLocations: E,
                    ...e
                })
            }, [i, o, u, d, _, c, E]);
            return {
                layout: i,
                userId: o,
                guildId: u,
                channelId: d,
                messageId: _,
                roleId: c,
                analyticsLocations: E,
                trackUserProfileAction: I
            }
        }
}