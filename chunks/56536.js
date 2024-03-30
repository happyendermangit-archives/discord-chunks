function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addMessageReminders: function() {
            return p
        },
        cleanupMessageReminders: function() {
            return h
        },
        completeMessageReminders: function() {
            return I
        },
        fetchAndUpdateSavedMessages: function() {
            return S
        },
        toggleMessageReminders: function() {
            return y
        },
        updateReminderDueAt: function() {
            return m
        }
    });
    var r = n("967888"),
        o = n("629815"),
        i = n("534965"),
        a = n("935741"),
        u = n("306912"),
        s = n("776982"),
        l = n("208454"),
        c = n("870331"),
        f = n("746110"),
        d = n("229156"),
        _ = n("281767");

    function E(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function p(e, t) {
        c.default.track(_.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
            skipped: !1,
            reason: "adding",
            rating: "".concat(f.default.getMessageReminders().length)
        }), T([E({
            messageId: e.id,
            channelId: e.channel_id,
            savedAt: new Date,
            dueAt: t
        }, function(e) {
            var t = a.default.getChannel(e.channel_id);
            if (null == t) return null;
            var n = u.default.getGuild(t.guild_id),
                r = "",
                o = (0, i.computeChannelName)(t, l.default, s.default, !0);
            if (t.isPrivate()) r = o;
            else if (t.isThread()) {
                var c = a.default.getChannel(t.parent_id);
                if (null == c) return null;
                var f = (0, i.computeChannelName)(c, l.default, s.default, !0);
                r = "".concat(f, " > ").concat(o)
            } else r = o;
            var d = "".concat(e.content.length > 0 ? e.content : "".concat(e.attachments.length, " attachments"));
            return {
                authorSummary: e.author.username,
                authorId: e.author.id,
                channelSummary: r,
                messageSummary: d.length > 200 ? "".concat(d.slice(0, 197), "...") : d,
                guildId: null == n ? void 0 : n.id
            }
        }(e))], [])
    }

    function m(e, t) {
        c.default.track(_.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
            skipped: !1,
            reason: "updating_due_at",
            rating: "".concat(f.default.getMessageReminders().length)
        });
        var n, r, o = f.default.getMessageReminders().find(function(t) {
            return t.messageId === e
        });
        if (null != o) {
            ;
            T([(n = E({}, o), r = (r = {
                savedAt: new Date,
                dueAt: t
            }, r), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(r)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
            }), n)], [o])
        }
    }

    function y(e, t) {
        c.default.track(_.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
            skipped: t,
            reason: "updating within the list",
            rating: "".concat(f.default.getMessageReminders().length)
        }), o.default.dispatch({
            type: "MESSAGE_REMINDER_TOGGLE",
            messageId: e,
            complete: t
        })
    }

    function I(e) {
        c.default.track(_.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
            skipped: !1,
            reason: "complete and clear immediately",
            rating: "".concat(f.default.getMessageReminders().length)
        }), T([], f.default.getMessageReminders().filter(function(t) {
            return t.messageId === e
        }))
    }

    function h() {
        c.default.track(_.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
            skipped: !1,
            reason: "clearing",
            rating: "".concat(f.default.getMessageReminders().length)
        });
        var e = f.default.getMessageReminders();
        e.some(function(e) {
            return e.complete
        }) && T([], e.filter(function(e) {
            return e.complete
        }))
    }

    function O(e) {
        c.default.track(_.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
            skipped: !1,
            reason: "updated_from_server",
            rating: "".concat(f.default.getMessageReminders().length)
        }), o.default.dispatch({
            type: "SAVED_MESSAGES_UPDATE",
            messages: e
        })
    }

    function T(e, t) {
        (0 !== e.length || 0 !== t.length) && r.HTTP.post({
            url: _.Endpoints.SAVED_MESSAGES,
            body: {
                added: e.map(d.savedMessageToServer),
                removed: t.map(d.savedMessageToServer)
            }
        }).then(function(e) {
            O(e.body.saved_messages.map(d.savedMessageToClient))
        })
    }

    function S() {
        return f.default.recentlyFetched() ? Promise.resolve() : r.HTTP.get({
            url: _.Endpoints.SAVED_MESSAGES
        }).then(function(e) {
            O(e.body.saved_messages.map(d.savedMessageToClient))
        })
    }
}