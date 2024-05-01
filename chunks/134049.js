function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clearCommunicationDisabledNotice: function() {
            return _
        },
        useCommunicationDisabledNoticeStore: function() {
            return d
        }
    }), n("47120");
    var i = n("652874"),
        r = n("143927"),
        a = n("12336"),
        s = n("433517"),
        o = n("590433");
    let l = (0, a.default)((e, t) => ({
            notificationDismissedInGuilds: function() {
                var e;
                let t = null !== (e = s.Storage.get(o.DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY)) && void 0 !== e ? e : [];
                return new Set(t)
            }(),
            dismissNotification: n => {
                let i = t().notificationDismissedInGuilds;
                i.add(n), s.Storage.set(o.DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY, i), e({
                    notificationDismissedInGuilds: i
                })
            },
            resetNotification: n => {
                let i = t().notificationDismissedInGuilds;
                i.has(n) && (i.delete(n), s.Storage.set(o.DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY, i), e({
                    notificationDismissedInGuilds: i
                }))
            }
        })),
        u = (0, i.default)(l);

    function d(e) {
        let [t, n] = u(e => [e.notificationDismissedInGuilds, e.dismissNotification], r.default);
        return [!t.has(e), n]
    }

    function _(e) {
        return l.getState().resetNotification(e)
    }
}