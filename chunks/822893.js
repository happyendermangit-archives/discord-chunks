function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addMessageReminders: function() {
            return I
        },
        cleanupMessageReminders: function() {
            return h
        },
        completeMessageReminders: function() {
            return S
        },
        fetchAndUpdateSavedMessages: function() {
            return N
        },
        toggleMessageReminders: function() {
            return f
        },
        updateReminderDueAt: function() {
            return T
        }
    });
    var i = n("544891"),
        r = n("570140"),
        a = n("933557"),
        s = n("592125"),
        o = n("430824"),
        l = n("699516"),
        u = n("594174"),
        d = n("626135"),
        _ = n("329461"),
        c = n("831267"),
        E = n("981631");

    function I(e, t) {
        d.default.track(E.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
            skipped: !1,
            reason: "adding",
            rating: "".concat(_.default.getMessageReminders().length)
        }), m([{
            messageId: e.id,
            channelId: e.channel_id,
            savedAt: new Date,
            dueAt: t,
            ... function(e) {
                let t = s.default.getChannel(e.channel_id);
                if (null == t) return null;
                let n = o.default.getGuild(t.guild_id),
                    i = "",
                    r = (0, a.computeChannelName)(t, u.default, l.default, !0);
                if (t.isPrivate()) i = r;
                else if (t.isThread()) {
                    let e = s.default.getChannel(t.parent_id);
                    if (null == e) return null;
                    let n = (0, a.computeChannelName)(e, u.default, l.default, !0);
                    i = "".concat(n, " > ").concat(r)
                } else i = r;
                let d = "".concat(e.content.length > 0 ? e.content : "".concat(e.attachments.length, " attachments"));
                return {
                    authorSummary: e.author.username,
                    authorId: e.author.id,
                    channelSummary: i,
                    messageSummary: d.length > 200 ? "".concat(d.slice(0, 197), "...") : d,
                    guildId: null == n ? void 0 : n.id
                }
            }(e)
        }], [])
    }

    function T(e, t) {
        d.default.track(E.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
            skipped: !1,
            reason: "updating_due_at",
            rating: "".concat(_.default.getMessageReminders().length)
        });
        let n = _.default.getMessageReminders().find(t => t.messageId === e);
        null != n && m([{
            ...n,
            savedAt: new Date,
            dueAt: t
        }], [n])
    }

    function f(e, t) {
        d.default.track(E.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
            skipped: t,
            reason: "updating within the list",
            rating: "".concat(_.default.getMessageReminders().length)
        }), r.default.dispatch({
            type: "MESSAGE_REMINDER_TOGGLE",
            messageId: e,
            complete: t
        })
    }

    function S(e) {
        d.default.track(E.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
            skipped: !1,
            reason: "complete and clear immediately",
            rating: "".concat(_.default.getMessageReminders().length)
        }), m([], _.default.getMessageReminders().filter(t => t.messageId === e))
    }

    function h() {
        d.default.track(E.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
            skipped: !1,
            reason: "clearing",
            rating: "".concat(_.default.getMessageReminders().length)
        });
        let e = _.default.getMessageReminders();
        e.some(e => e.complete) && m([], e.filter(e => e.complete))
    }

    function A(e) {
        d.default.track(E.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
            skipped: !1,
            reason: "updated_from_server",
            rating: "".concat(_.default.getMessageReminders().length)
        }), r.default.dispatch({
            type: "SAVED_MESSAGES_UPDATE",
            messages: e
        })
    }

    function m(e, t) {
        (0 !== e.length || 0 !== t.length) && i.HTTP.post({
            url: E.Endpoints.SAVED_MESSAGES,
            body: {
                added: e.map(c.savedMessageToServer),
                removed: t.map(c.savedMessageToServer)
            }
        }).then(e => {
            A(e.body.saved_messages.map(c.savedMessageToClient))
        })
    }

    function N() {
        return _.default.recentlyFetched() ? Promise.resolve() : i.HTTP.get({
            url: E.Endpoints.SAVED_MESSAGES
        }).then(e => {
            A(e.body.saved_messages.map(c.savedMessageToClient))
        })
    }
}