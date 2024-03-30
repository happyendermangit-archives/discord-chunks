function(e, t, n) {
    "use strict";
    let i;
    n.r(t);
    var r, s = n("442837"),
        a = n("570140");

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let l = {
        lastGuildDismissedTime: {}
    };
    class u extends(r = s.default.DeviceSettingsStore) {
        initialize() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
            i = e
        }
        getUserAgnosticState() {
            return i
        }
        getLastGuildDismissedTime(e) {
            return i.lastGuildDismissedTime[e]
        }
    }
    o(u, "displayName", "ApplicationSubscriptionChannelNoticeStore"), o(u, "persistKey", "ApplicationSubscriptionChannelNoticeStore"), t.default = new u(a.default, {
        APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function(e) {
            let {
                guildId: t
            } = e;
            i.lastGuildDismissedTime[t] = Date.now()
        }
    })
}