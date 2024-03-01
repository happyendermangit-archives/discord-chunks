function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCommunicationDisabledNoticeStore: function() {
            return c
        },
        clearCommunicationDisabledNotice: function() {
            return d
        }
    }), n("222007");
    var i = n("308503"),
        r = n("16470"),
        s = n("861907"),
        a = n("95410"),
        o = n("903639");
    let l = (0, s.default)((e, t) => ({
            notificationDismissedInGuilds: function() {
                var e;
                let t = null !== (e = a.default.get(o.DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY)) && void 0 !== e ? e : [];
                return new Set(t)
            }(),
            dismissNotification: n => {
                let i = t().notificationDismissedInGuilds;
                i.add(n), a.default.set(o.DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY, i), e({
                    notificationDismissedInGuilds: i
                })
            },
            resetNotification: n => {
                let i = t().notificationDismissedInGuilds;
                i.has(n) && (i.delete(n), a.default.set(o.DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY, i), e({
                    notificationDismissedInGuilds: i
                }))
            }
        })),
        u = (0, i.default)(l);

    function c(e) {
        let [t, n] = u(e => [e.notificationDismissedInGuilds, e.dismissNotification], r.default);
        return [!t.has(e), n]
    }

    function d(e) {
        return l.getState().resetNotification(e)
    }
}