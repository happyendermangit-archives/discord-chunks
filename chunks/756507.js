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
            channelId: null,
            messageId: null
        }),
        u = function(e) {
            let {
                layout: t,
                userId: n,
                guildId: u,
                channelId: d,
                messageId: c,
                newAnalyticsLocations: f = r
            } = e, p = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], {
                AnalyticsLocationProvider: m,
                analyticsLocations: h,
                sourceAnalyticsLocations: x
            } = (0, a.default)(f), E = l.useMemo(() => ({
                layout: t,
                userId: null != n ? n : null,
                guildId: null != u ? u : null,
                channelId: null != d ? d : null,
                messageId: null != c ? c : null
            }), [t, n, u, d, c]);
            l.useEffect(() => {
                p && (0, s.trackUserProfileAction)({
                    action: "VIEW",
                    analyticsLocations: x,
                    layout: t,
                    userId: n,
                    guildId: u,
                    channelId: d,
                    messageId: c
                })
            }, [p]);
            let y = l.useCallback(e => {
                    (0, s.trackUserProfileAction)({
                        layout: t,
                        userId: n,
                        guildId: u,
                        channelId: d,
                        messageId: c,
                        analyticsLocations: h,
                        ...e
                    })
                }, [t, n, u, d, c, h]),
                g = l.useCallback(e => {
                    let {
                        children: t
                    } = e;
                    return (0, i.jsx)(o.Provider, {
                        value: E,
                        children: (0, i.jsx)(m, {
                            children: t
                        })
                    })
                }, [E, m]);
            return {
                UserProfileAnalyticsProvider: g,
                analyticsLocations: h,
                trackUserProfileAction: y
            }
        },
        d = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            let {
                layout: i,
                userId: r,
                guildId: u,
                channelId: d,
                messageId: c
            } = l.useContext(o), {
                analyticsLocations: f
            } = (0, a.default)(t), p = l.useCallback(e => {
                null != i && null != r && (0, s.trackUserProfileAction)({
                    layout: i,
                    userId: r,
                    guildId: u,
                    channelId: d,
                    messageId: c,
                    analyticsLocations: f,
                    ...e
                })
            }, [i, r, u, d, c, f]);
            return {
                layout: i,
                userId: r,
                guildId: u,
                channelId: d,
                messageId: c,
                analyticsLocations: f,
                trackUserProfileAction: p
            }
        }
}