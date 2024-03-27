function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    });
    var i = n("232567"),
        r = n("147913"),
        s = n("592125"),
        a = n("944486"),
        o = n("594174"),
        l = n("894257"),
        u = n("981631");

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let _ = !1;

    function c(e) {
        let t = o.default.getCurrentUser();
        if (null == t) return;
        let n = a.default.getChannelId(),
            i = s.default.getDMFromUserId(l.SYSTEM_USER);
        if (!t.hasUrgentMessages() || i === n) return E({
            channelId: n
        });
        !_ && (_ = !0, e())
    }

    function E(e) {
        let {
            channelId: t
        } = e, n = o.default.getCurrentUser(), r = t === s.default.getDMFromUserId(l.SYSTEM_USER);
        null != n && n.hasUrgentMessages() && r && (_ = !1, i.setFlag(u.UserFlags.HAS_UNREAD_URGENT_MESSAGES, !1))
    }
    class I extends r.default {
        constructor(e) {
            super(), d(this, "handleShowUrgentMessageAlert", void 0), d(this, "actions", void 0), this.handleShowUrgentMessageAlert = e, this.actions = {
                POST_CONNECTION_OPEN: () => c(this.handleShowUrgentMessageAlert),
                MESSAGE_CREATE: () => c(this.handleShowUrgentMessageAlert),
                CHANNEL_SELECT: E
            }
        }
    }
}