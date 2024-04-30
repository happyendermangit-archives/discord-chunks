function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserProfileAnalyticsProvider: function() {
            return l
        },
        useTrackUserProfileAction: function() {
            return u
        },
        useUserProfileAnalyticsContext: function() {
            return d
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("906732"),
        a = n("221292");
    let o = r.createContext({}),
        l = e => {
            let {
                children: t,
                layout: n,
                userId: l,
                guildId: u,
                channelId: d,
                messageId: _,
                roleId: c,
                shouldTrackViewOnMount: E = !0
            } = e, {
                analyticsLocations: I
            } = (0, s.default)(), T = r.useMemo(() => ({
                layout: n,
                userId: l,
                guildId: u,
                channelId: d,
                messageId: _,
                roleId: c
            }), [n, l, u, d, _, c]);
            return r.useEffect(() => {
                E && null != n && null != l && (0, a.trackUserProfileAction)({
                    action: "VIEW",
                    layout: n,
                    userId: l,
                    guildId: u,
                    channelId: d,
                    messageId: _,
                    roleId: c,
                    analyticsLocations: I
                })
            }, [E]), (0, i.jsx)(o.Provider, {
                value: T,
                children: t
            })
        },
        u = e => {
            let {
                analyticsLocations: t
            } = (0, s.default)();
            return r.useCallback(n => {
                let {
                    layout: i,
                    userId: r
                } = e;
                null != i && null != r && (0, a.trackUserProfileAction)({
                    analyticsLocations: t,
                    layout: i,
                    userId: r,
                    ...e,
                    ...n
                })
            }, [e, t])
        },
        d = () => {
            let e = r.useContext(o);
            return {
                trackUserProfileAction: u(e),
                ...e
            }
        }
}