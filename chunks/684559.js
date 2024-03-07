function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return t
        }
    });
    var t, o = E("327037"),
        n = E("689988"),
        r = E("42203"),
        a = E("18494"),
        i = E("697218"),
        I = E("569363"),
        s = E("49111");
    let T = !1;

    function S(e) {
        let _ = i.default.getCurrentUser();
        if (null == _) return;
        let E = a.default.getChannelId(),
            t = r.default.getDMFromUserId(I.SYSTEM_USER);
        if (!_.hasUrgentMessages() || t === E) return N({
            channelId: E
        });
        !T && (T = !0, e())
    }

    function N(e) {
        let {
            channelId: _
        } = e, E = i.default.getCurrentUser(), t = _ === r.default.getDMFromUserId(I.SYSTEM_USER);
        null != E && E.hasUrgentMessages() && t && (T = !1, o.setFlag(s.UserFlags.HAS_UNREAD_URGENT_MESSAGES, !1))
    }
    t = class extends n.default {
        constructor(e) {
            super(), this.handleShowUrgentMessageAlert = e, this.actions = {
                POST_CONNECTION_OPEN: () => S(this.handleShowUrgentMessageAlert),
                MESSAGE_CREATE: () => S(this.handleShowUrgentMessageAlert),
                CHANNEL_SELECT: N
            }
        }
    }
}