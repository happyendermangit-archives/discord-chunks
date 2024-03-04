function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return S
        }
    }), E("222007");
    var t = E("913144"),
        o = E("689988"),
        n = E("393414"),
        r = E("718517"),
        a = E("799895"),
        i = E("979268"),
        I = E("520899"),
        T = E("49111");
    class s extends o.default {
        constructor(...e) {
            super(...e), this.actions = {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
            }, this.handlePostConnectionOpen = () => {
                ! function e() {
                    i.default.getCurrentConfig({
                        location: "8fe27d_1"
                    }, {
                        autoTrackExposure: !1
                    }).showReminders && (I.default.getMessageReminders().filter(e => null != e.dueAt && new Date > e.dueAt).filter(e => !I.default.hasSentNotification(e.messageId)).forEach(e => {
                        var _, E;
                        a.default.showNotification(null, "Overdue reminder in ".concat(e.channelSummary), null !== (E = null !== (_ = e.notes) && void 0 !== _ ? _ : e.messageSummary) && void 0 !== E ? E : "", {
                            notif_type: "OVERDUE_MESSAGE_REMINDER",
                            notif_user_id: e.authorId,
                            message_id: e.messageId,
                            channel_id: e.channelId,
                            guild_id: e.guildId
                        }, {
                            omitViewTracking: !0,
                            tag: e.messageId,
                            onClick() {
                                (0, n.transitionTo)(T.Routes.CHANNEL(e.guildId, e.channelId, e.messageId))
                            }
                        }), t.default.dispatch({
                            type: "MESSAGE_REMINDER_NOTIFIED",
                            messageId: e.messageId
                        })
                    }), setTimeout(() => {
                        e()
                    }, 5 * r.default.Millis.MINUTE))
                }()
            }
        }
    }
    var S = new s
}