function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useUserProfileAnalyticsProvider: function() {
            return u
        },
        useUserProfileAnalyticsContext: function() {
            return d
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("685665"),
        s = n("4462");
    let r = [],
        o = l.createContext({
            layout: null,
            userId: null,
            guildId: null,
            channelId: null
        }),
        u = function(e) {
            let {
                layout: t,
                userId: n,
                guildId: u,
                channelId: d,
                analyticsLocations: c = r
            } = e, f = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], {
                AnalyticsLocationProvider: p,
                analyticsLocations: m
            } = (0, a.default)(c), h = l.useMemo(() => ({
                layout: t,
                userId: null != n ? n : null,
                guildId: null != u ? u : null,
                channelId: null != d ? d : null
            }), [t, n, u, d]);
            l.useEffect(() => {
                f && (0, s.trackUserProfileAction)({
                    action: "VIEW",
                    layout: t,
                    userId: n,
                    guildId: u,
                    channelId: d,
                    analyticsLocations: m
                })
            }, [f]);
            let x = l.useCallback(e => {
                    (0, s.trackUserProfileAction)({
                        layout: t,
                        userId: n,
                        guildId: u,
                        channelId: d,
                        analyticsLocations: m,
                        ...e
                    })
                }, [t, n, u, d, m]),
                E = l.useCallback(e => {
                    let {
                        children: t
                    } = e;
                    return (0, i.jsx)(o.Provider, {
                        value: h,
                        children: (0, i.jsx)(p, {
                            children: t
                        })
                    })
                }, [h, p]);
            return {
                UserProfileAnalyticsProvider: E,
                analyticsLocations: m,
                trackUserProfileAction: x
            }
        },
        d = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            let {
                layout: i,
                userId: r,
                guildId: u,
                channelId: d
            } = l.useContext(o), {
                analyticsLocations: c
            } = (0, a.default)(t), f = l.useCallback(e => {
                null != i && null != r && (0, s.trackUserProfileAction)({
                    layout: i,
                    userId: r,
                    guildId: u,
                    channelId: d,
                    analyticsLocations: c,
                    ...e
                })
            }, [i, r, u, d, c]);
            return {
                layout: i,
                userId: r,
                guildId: u,
                channelId: d,
                analyticsLocations: c,
                trackUserProfileAction: f
            }
        }
}