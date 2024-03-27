function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("147913"),
        r = n("592125"),
        s = n("944486"),
        a = n("116347"),
        o = n("237292"),
        l = n("118910");

    function u(e) {
        let {
            channelId: t
        } = e;
        if (null == t || !(0, o.isEligibleForInappropriateConversationWarning)({
                location: "channel_select"
            }) || !(0, a.getSafetyAlertsSettingOrDefault)()) return !1;
        let n = r.default.getChannel(t);
        if (null == n || !n.isDM()) return !1;
        let i = (0, a.getInappropriateConversationTakeoverForChannel)(t);
        return null != i && ((0, l.showTakeoverModal)({
            warningId: i.id,
            warningType: i.type,
            senderId: n.getRecipientId(),
            channelId: t
        }), !0)
    }

    function d(e) {
        let {
            channels: t
        } = e;
        if (!(0, o.isEligibleForInappropriateConversationWarning)({
                location: "channel_updates"
            }) || !(0, a.getSafetyAlertsSettingOrDefault)()) return !1;
        let n = s.default.getCurrentlySelectedChannelId();
        if (null == n) return !1;
        let i = t.find(e => e.id === n);
        if (null == i) return !1;
        let r = (0, a.getInappropriateConversationTakeoverForChannel)(i.id);
        return !!(null != r && i.isDM()) && ((0, l.showTakeoverModal)({
            warningId: r.id,
            warningType: r.type,
            senderId: i.getRecipientId(),
            channelId: i.id
        }), !0)
    }
    class _ extends i.default {
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                CHANNEL_SELECT: u,
                CHANNEL_UPDATES: d
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new _
}