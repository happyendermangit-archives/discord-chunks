function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return S
        }
    }), E("222007");
    var t = E("689988"),
        o = E("42203"),
        n = E("18494"),
        r = E("821240"),
        a = E("761771"),
        i = E("537597");

    function I(e) {
        let {
            channelId: _
        } = e;
        if (null == _ || !(0, a.isEligibleForInappropriateConversationWarning)({
                location: "channel_select"
            })) return !1;
        let E = o.default.getChannel(_);
        if (null == E || !E.isDM()) return !1;
        let t = (0, r.getInappropriateConversationTakeoverForChannel)(_);
        return null != t && ((0, i.showTakeoverModal)({
            warningId: t.id,
            warningType: t.type,
            senderId: E.getRecipientId(),
            channelId: _
        }), !0)
    }

    function s(e) {
        let {
            channels: _
        } = e;
        if (!(0, a.isEligibleForInappropriateConversationWarning)({
                location: "channel_updates"
            })) return !1;
        let E = n.default.getCurrentlySelectedChannelId();
        if (null == E) return !1;
        let t = _.find(e => e.id === E);
        if (null == t) return !1;
        let o = (0, r.getInappropriateConversationTakeoverForChannel)(t.id);
        return !!(null != o && t.isDM()) && ((0, i.showTakeoverModal)({
            warningId: o.id,
            warningType: o.type,
            senderId: t.getRecipientId(),
            channelId: t.id
        }), !0)
    }
    class T extends t.default {
        constructor(...e) {
            super(...e), this.actions = {
                CHANNEL_SELECT: I,
                CHANNEL_UPDATES: s
            }
        }
    }
    var S = new T
}