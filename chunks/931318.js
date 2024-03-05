function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addMessageReminders: function() {
            return p
        },
        updateReminderDueAt: function() {
            return _
        },
        toggleMessageReminders: function() {
            return m
        },
        completeMessageReminders: function() {
            return E
        },
        cleanupMessageReminders: function() {
            return S
        },
        fetchAndUpdateSavedMessages: function() {
            return I
        }
    });
    var a = n("872717"),
        i = n("913144"),
        l = n("679653"),
        d = n("42203"),
        r = n("305961"),
        s = n("27618"),
        u = n("697218"),
        o = n("599110"),
        c = n("520899"),
        f = n("988864"),
        g = n("49111");

    function p(e, t) {
        o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
            skipped: !1,
            reason: "adding",
            rating: "".concat(c.default.getMessageReminders().length)
        }), v([{
            messageId: e.id,
            channelId: e.channel_id,
            savedAt: new Date,
            dueAt: t,
            ... function(e) {
                let t = d.default.getChannel(e.channel_id);
                if (null == t) return null;
                let n = r.default.getGuild(t.guild_id),
                    a = "",
                    i = (0, l.computeChannelName)(t, u.default, s.default, !0);
                if (t.isPrivate()) a = i;
                else if (t.isThread()) {
                    let e = d.default.getChannel(t.parent_id);
                    if (null == e) return null;
                    let n = (0, l.computeChannelName)(e, u.default, s.default, !0);
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

    function _(e, t) {
        o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
            skipped: !1,
            reason: "updating_due_at",
            rating: "".concat(c.default.getMessageReminders().length)
        });
        let n = c.default.getMessageReminders(),
            a = n.find(t => t.messageId === e);
        null != a && v([{
            ...a,
            savedAt: new Date,
            dueAt: t
        }], [a])
    }

    function m(e, t) {
        o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
            skipped: t,
            reason: "updating within the list",
            rating: "".concat(c.default.getMessageReminders().length)
        }), i.default.dispatch({
            type: "MESSAGE_REMINDER_TOGGLE",
            messageId: e,
            complete: t
        })
    }

    function E(e) {
        o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
            skipped: !1,
            reason: "complete and clear immediately",
            rating: "".concat(c.default.getMessageReminders().length)
        });
        let t = c.default.getMessageReminders();
        v([], t.filter(t => t.messageId === e))
    }

    function S() {
        o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
            skipped: !1,
            reason: "clearing",
            rating: "".concat(c.default.getMessageReminders().length)
        });
        let e = c.default.getMessageReminders();
        e.some(e => e.complete) && v([], e.filter(e => e.complete))
    }

    function h(e) {
        o.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
            skipped: !1,
            reason: "updated_from_server",
            rating: "".concat(c.default.getMessageReminders().length)
        }), i.default.dispatch({
            type: "SAVED_MESSAGES_UPDATE",
            messages: e
        })
    }

    function v(e, t) {
        (0 !== e.length || 0 !== t.length) && a.default.post({
            url: g.Endpoints.SAVED_MESSAGES,
            body: {
                added: e.map(f.savedMessageToServer),
                removed: t.map(f.savedMessageToServer)
            }
        }).then(e => {
            h(e.body.saved_messages.map(f.savedMessageToClient))
        })
    }

    function I() {
        return c.default.recentlyFetched() ? Promise.resolve() : a.default.get({
            url: g.Endpoints.SAVED_MESSAGES
        }).then(e => {
            let t = e.body.saved_messages,
                n = t.map(f.savedMessageToClient);
            h(n)
        })
    }
}