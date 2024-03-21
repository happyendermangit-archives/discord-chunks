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
            messageId: null,
            roleId: null
        }),
        u = function(e) {
            let {
                layout: t,
                userId: n,
                guildId: u,
                channelId: d,
                messageId: c,
                roleId: f,
                newAnalyticsLocations: p = r
            } = e, m = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], {
                AnalyticsLocationProvider: h,
                analyticsLocations: x,
                sourceAnalyticsLocations: E
            } = (0, a.default)(p), y = l.useMemo(() => ({
                layout: t,
                userId: null != n ? n : null,
                guildId: null != u ? u : null,
                channelId: null != d ? d : null,
                messageId: null != c ? c : null,
                roleId: null != f ? f : null
            }), [t, n, u, d, c, f]);
            l.useEffect(() => {
                m && (0, s.trackUserProfileAction)({
                    action: "VIEW",
                    analyticsLocations: E,
                    layout: t,
                    userId: n,
                    guildId: u,
                    channelId: d,
                    messageId: c,
                    roleId: f
                })
            }, [m]);
            let g = l.useCallback(e => {
                    (0, s.trackUserProfileAction)({
                        layout: t,
                        userId: n,
                        guildId: u,
                        channelId: d,
                        messageId: c,
                        roleId: f,
                        analyticsLocations: x,
                        ...e
                    })
                }, [t, n, u, d, c, f, x]),
                S = l.useCallback(e => {
                    let {
                        children: t
                    } = e;
                    return (0, i.jsx)(o.Provider, {
                        value: y,
                        children: (0, i.jsx)(h, {
                            children: t
                        })
                    })
                }, [y, h]);
            return {
                UserProfileAnalyticsProvider: S,
                analyticsLocations: x,
                trackUserProfileAction: g
            }
        },
        d = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            let {
                layout: i,
                userId: r,
                guildId: u,
                channelId: d,
                messageId: c,
                roleId: f
            } = l.useContext(o), {
                analyticsLocations: p
            } = (0, a.default)(t), m = l.useCallback(e => {
                null != i && null != r && (0, s.trackUserProfileAction)({
                    layout: i,
                    userId: r,
                    guildId: u,
                    channelId: d,
                    messageId: c,
                    roleId: f,
                    analyticsLocations: p,
                    ...e
                })
            }, [i, r, u, d, c, f, p]);
            return {
                layout: i,
                userId: r,
                guildId: u,
                channelId: d,
                messageId: c,
                roleId: f,
                analyticsLocations: p,
                trackUserProfileAction: m
            }
        }
}