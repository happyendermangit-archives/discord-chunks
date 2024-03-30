function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MESSAGE_REMINDER_DURATION_ITEMS: function() {
            return s
        },
        savedMessageHasMetadata: function() {
            return u
        },
        savedMessageToClient: function() {
            return a
        },
        savedMessageToServer: function() {
            return i
        }
    });
    var r = n("388990"),
        o = n("941504");

    function i(e) {
        var t;
        return {
            channel_id: e.channelId,
            message_id: e.messageId,
            saved_at: e.savedAt.toISOString(),
            author_summary: e.authorSummary,
            channel_summary: e.channelSummary,
            message_summary: e.messageSummary,
            guild_id: e.guildId,
            author_id: e.authorId,
            notes: e.notes,
            due_at: null === (t = e.dueAt) || void 0 === t ? void 0 : t.toISOString()
        }
    }

    function a(e) {
        return {
            channelId: e.channel_id,
            messageId: e.message_id,
            savedAt: new Date(e.saved_at),
            authorSummary: e.author_summary,
            channelSummary: e.channel_summary,
            messageSummary: e.message_summary,
            guildId: 0 === e.guild_id ? void 0 : e.guild_id,
            authorId: 0 === e.author_id ? void 0 : e.author_id,
            notes: e.notes,
            dueAt: null != e.due_at ? new Date(e.due_at) : void 0
        }
    }

    function u(e) {
        return null != e.authorSummary && e.authorSummary.length > 0 && null != e.channelSummary && e.channelSummary.length > 0 && null != e.messageSummary && e.messageSummary.length > 0 && null != e.authorId && e.authorId.length > 0
    }
    var s = [{
        duration: r.default.Millis.HOUR,
        getLabel: function() {
            return o.default.Messages.MESSAGE_REMINDERS_IN_ONE_HOUR
        }
    }, {
        duration: 2 * r.default.Millis.HOUR,
        getLabel: function() {
            return o.default.Messages.MESSAGE_REMINDERS_IN_TWO_HOURS
        }
    }, {
        duration: 4 * r.default.Millis.HOUR,
        getLabel: function() {
            return o.default.Messages.MESSAGE_REMINDERS_IN_FOUR_HOURS
        }
    }, {
        duration: r.default.Millis.DAY,
        getLabel: function() {
            return o.default.Messages.MESSAGE_REMINDERS_IN_ONE_DAY
        }
    }, {
        duration: r.default.Millis.WEEK,
        getLabel: function() {
            return o.default.Messages.MESSAGE_REMINDERS_IN_ONE_WEEK
        }
    }]
}