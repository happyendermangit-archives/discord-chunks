function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserProfileAnalyticsProvider: function() {
            return l
        },
        useUserProfileAnalyticsContext: function() {
            return u
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("906732"),
        a = n("221292");
    let o = r.createContext({
            layout: null,
            userId: null,
            guildId: null,
            channelId: null,
            messageId: null,
            roleId: null
        }),
        l = e => {
            let {
                children: t,
                layout: n,
                userId: l,
                guildId: u,
                channelId: d,
                messageId: _,
                roleId: c,
                shouldTrackViewOnMount: E = !1
            } = e, {
                analyticsLocations: I
            } = (0, s.default)(), T = r.useMemo(() => ({
                layout: n,
                userId: null != l ? l : null,
                guildId: null != u ? u : null,
                channelId: null != d ? d : null,
                messageId: null != _ ? _ : null,
                roleId: null != c ? c : null
            }), [n, l, u, d, _, c]);
            return r.useEffect(() => {
                E && (0, a.trackUserProfileAction)({
                    action: "VIEW",
                    analyticsLocations: I,
                    ...T
                })
            }, [E]), (0, i.jsx)(o.Provider, {
                value: T,
                children: t
            })
        },
        u = e => {
            let t = r.useContext(o),
                {
                    analyticsLocations: n
                } = (0, s.default)();
            return {
                trackUserProfileAction: r.useCallback(i => {
                    null != t.layout && null != t.userId && (0, a.trackUserProfileAction)({
                        analyticsLocations: null != e ? e : n,
                        ...t,
                        ...i
                    })
                }, [t, e, n]),
                ...t
            }
        }
}