function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addMessageReminders: function() {
            return E
        },
        updateReminderDueAt: function() {
            return g
        },
        toggleMessageReminders: function() {
            return p
        },
        completeMessageReminders: function() {
            return S
        },
        cleanupMessageReminders: function() {
            return m
        },
        fetchAndUpdateSavedMessages: function() {
            return C
        }
    });
    var a = n("872717"),
        i = n("913144"),
        l = n("679653"),
        r = n("42203"),
        s = n("305961"),
        u = n("27618"),
        d = n("697218"),
        o = n("599110"),
        c = n("520899"),
        _ = n("988864"),
        f = n("49111");

    function E(e, t) {
        o.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
            skipped: !1,
            reason: "adding",
            rating: "".concat(c.default.getMessageReminders().length)
        }), h([{
            messageId: e.id,
            channelId: e.channel_id,
            savedAt: new Date,
            dueAt: t,
            ... function(e) {
                let t = r.default.getChannel(e.channel_id);
                if (null == t) return null;
                let n = s.default.getGuild(t.guild_id),
                    a = "",
                    i = (0, l.computeChannelName)(t, d.default, u.default, !0);
                if (t.isPrivate()) a = i;
                else if (t.isThread()) {
                    let e = r.default.getChannel(t.parent_id);
                    if (null == e) return null;
                    let n = (0, l.computeChannelName)(e, d.default, u.default, !0);
                    a = "".concat(n, " > ").concat(i)
                } else a = i;
                let o = "".concat(e.content.length > 0 ? e.content : "".concat(e.attachments.length, " attachments"));
                return {
                    authorSummary: e.author.username,
                    authorId: e.author.id,
                    channelSummary: a,
                    messageSummary: o.length > 200 ? "".concat(o.slice(0, 197), "...") : o,
                    guildId: null == n ? void 0 : n.id
                }
            }(e)
        }], [])
    }

    function g(e, t) {
        o.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
            skipped: !1,
            reason: "updating_due_at",
            rating: "".concat(c.default.getMessageReminders().length)
        });
        let n = c.default.getMessageReminders(),
            a = n.find(t => t.messageId === e);
        null != a && h([{
            ...a,
            savedAt: new Date,
            dueAt: t
        }], [a])
    }

    function p(e, t) {
        o.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
            skipped: t,
            reason: "updating within the list",
            rating: "".concat(c.default.getMessageReminders().length)
        }), i.default.dispatch({
            type: "MESSAGE_REMINDER_TOGGLE",
            messageId: e,
            complete: t
        })
    }

    function S(e) {
        o.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
            skipped: !1,
            reason: "complete and clear immediately",
            rating: "".concat(c.default.getMessageReminders().length)
        });
        let t = c.default.getMessageReminders();
        h([], t.filter(t => t.messageId === e))
    }

    function m() {
        o.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
            skipped: !1,
            reason: "clearing",
            rating: "".concat(c.default.getMessageReminders().length)
        });
        let e = c.default.getMessageReminders();
        e.some(e => e.complete) && h([], e.filter(e => e.complete))
    }

    function A(e) {
        o.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
            skipped: !1,
            reason: "updated_from_server",
            rating: "".concat(c.default.getMessageReminders().length)
        }), i.default.dispatch({
            type: "SAVED_MESSAGES_UPDATE",
            messages: e
        })
    }

    function h(e, t) {
        (0 !== e.length || 0 !== t.length) && a.default.post({
            url: f.Endpoints.SAVED_MESSAGES,
            body: {
                added: e.map(_.savedMessageToServer),
                removed: t.map(_.savedMessageToServer)
            }
        }).then(e => {
            A(e.body.saved_messages.map(_.savedMessageToClient))
        })
    }

    function C() {
        return c.default.recentlyFetched() ? Promise.resolve() : a.default.get({
            url: f.Endpoints.SAVED_MESSAGES
        }).then(e => {
            let t = e.body.saved_messages,
                n = t.map(_.savedMessageToClient);
            A(n)
        })
    }
}