function(t, e, n) {
    "use strict";
    let i;
    n.r(e), n.d(e, {
        default: function() {
            return o
        }
    });
    var r = n("446674"),
        u = n("913144");
    let l = {
        lastGuildDismissedTime: {}
    };
    class a extends r.default.DeviceSettingsStore {
        initialize() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
            i = t
        }
        getUserAgnosticState() {
            return i
        }
        getLastGuildDismissedTime(t) {
            return i.lastGuildDismissedTime[t]
        }
    }
    a.displayName = "ApplicationSubscriptionChannelNoticeStore", a.persistKey = "ApplicationSubscriptionChannelNoticeStore";
    var o = new a(u.default, {
        APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function(t) {
            let {
                guildId: e
            } = t;
            i.lastGuildDismissedTime[e] = Date.now()
        }
    })
}