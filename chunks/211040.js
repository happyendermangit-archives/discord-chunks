function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("570140"),
        r = n("147913"),
        a = n("703656"),
        s = n("70956"),
        o = n("654769"),
        l = n("641051"),
        u = n("329461"),
        d = n("981631");

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class c extends r.default {
        constructor(...e) {
            super(...e), _(this, "actions", {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
            }), _(this, "handlePostConnectionOpen", () => {
                ! function e() {
                    l.default.getCurrentConfig({
                        location: "8fe27d_1"
                    }, {
                        autoTrackExposure: !1
                    }).showReminders && (u.default.getMessageReminders().filter(e => null != e.dueAt && new Date > e.dueAt).filter(e => !u.default.hasSentNotification(e.messageId)).forEach(e => {
                        var t, n;
                        o.default.showNotification(null, "Overdue reminder in ".concat(e.channelSummary), null !== (n = null !== (t = e.notes) && void 0 !== t ? t : e.messageSummary) && void 0 !== n ? n : "", {
                            notif_type: "OVERDUE_MESSAGE_REMINDER",
                            notif_user_id: e.authorId,
                            message_id: e.messageId,
                            channel_id: e.channelId,
                            guild_id: e.guildId
                        }, {
                            omitViewTracking: !0,
                            tag: e.messageId,
                            onClick() {
                                (0, a.transitionTo)(d.Routes.CHANNEL(e.guildId, e.channelId, e.messageId))
                            }
                        }), i.default.dispatch({
                            type: "MESSAGE_REMINDER_NOTIFIED",
                            messageId: e.messageId
                        })
                    }), setTimeout(() => {
                        e()
                    }, 5 * s.default.Millis.MINUTE))
                }()
            })
        }
    }
    t.default = new c
}