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
                newAnalyticsLocations: m = r
            } = e, p = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], {
                analyticsLocations: h
            } = (0, a.default)(m), x = l.useMemo(() => ({
                layout: t,
                userId: null != n ? n : null,
                guildId: null != u ? u : null,
                channelId: null != d ? d : null,
                messageId: null != c ? c : null,
                roleId: null != f ? f : null
            }), [t, n, u, d, c, f]);
            l.useEffect(() => {
                p && (0, s.trackUserProfileAction)({
                    action: "VIEW",
                    analyticsLocations: h,
                    layout: t,
                    userId: n,
                    guildId: u,
                    channelId: d,
                    messageId: c,
                    roleId: f
                })
            }, [p]);
            let E = l.useCallback(e => {
                    (0, s.trackUserProfileAction)({
                        layout: t,
                        userId: n,
                        guildId: u,
                        channelId: d,
                        messageId: c,
                        roleId: f,
                        analyticsLocations: h,
                        ...e
                    })
                }, [t, n, u, d, c, f, h]),
                y = l.useCallback(e => {
                    let {
                        children: t
                    } = e;
                    return (0, i.jsx)(o.Provider, {
                        value: x,
                        children: (0, i.jsx)(a.AnalyticsLocationProvider, {
                            value: h,
                            children: t
                        })
                    })
                }, [x, h]);
            return {
                UserProfileAnalyticsProvider: y,
                analyticsLocations: h,
                trackUserProfileAction: E
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
                analyticsLocations: m
            } = (0, a.default)(t), p = l.useCallback(e => {
                null != i && null != r && (0, s.trackUserProfileAction)({
                    layout: i,
                    userId: r,
                    guildId: u,
                    channelId: d,
                    messageId: c,
                    roleId: f,
                    analyticsLocations: m,
                    ...e
                })
            }, [i, r, u, d, c, f, m]);
            return {
                layout: i,
                userId: r,
                guildId: u,
                channelId: d,
                messageId: c,
                roleId: f,
                analyticsLocations: m,
                trackUserProfileAction: p
            }
        }
}