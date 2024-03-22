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
                analyticsLocations: x
            } = (0, a.default)(p), E = l.useMemo(() => ({
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
                    analyticsLocations: x,
                    layout: t,
                    userId: n,
                    guildId: u,
                    channelId: d,
                    messageId: c,
                    roleId: f
                })
            }, [m]);
            let y = l.useCallback(e => {
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
                g = l.useCallback(e => {
                    let {
                        children: t
                    } = e;
                    return (0, i.jsx)(o.Provider, {
                        value: E,
                        children: (0, i.jsx)(h, {
                            children: t
                        })
                    })
                }, [E, h]);
            return {
                UserProfileAnalyticsProvider: g,
                analyticsLocations: x,
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