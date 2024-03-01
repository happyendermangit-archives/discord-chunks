function(t, e, n) {
    "use strict";
    let u;
    n.r(e), n.d(e, {
        default: function() {
            return o
        }
    });
    var i = n("446674"),
        r = n("913144");
    let l = {
        lastGuildDismissedTime: {}
    };
    class a extends i.default.DeviceSettingsStore {
        initialize() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
            u = t
        }
        getUserAgnosticState() {
            return u
        }
        getLastGuildDismissedTime(t) {
            return u.lastGuildDismissedTime[t]
        }
    }
    a.displayName = "ApplicationSubscriptionChannelNoticeStore", a.persistKey = "ApplicationSubscriptionChannelNoticeStore";
    var o = new a(r.default, {
        APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function(t) {
            let {
                guildId: e
            } = t;
            u.lastGuildDismissedTime[e] = Date.now()
        }
    })
}