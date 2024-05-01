function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MESSAGE_REMINDER_DURATION_ITEMS: function() {
            return l
        },
        savedMessageHasMetadata: function() {
            return o
        },
        savedMessageToClient: function() {
            return a
        },
        savedMessageToServer: function() {
            return s
        }
    });
    var i = n("70956"),
        r = n("689938");

    function s(e) {
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

    function o(e) {
        return null != e.authorSummary && e.authorSummary.length > 0 && null != e.channelSummary && e.channelSummary.length > 0 && null != e.messageSummary && e.messageSummary.length > 0 && null != e.authorId && e.authorId.length > 0
    }
    let l = [{
        duration: i.default.Millis.HOUR,
        getLabel: () => r.default.Messages.MESSAGE_REMINDERS_IN_ONE_HOUR
    }, {
        duration: 2 * i.default.Millis.HOUR,
        getLabel: () => r.default.Messages.MESSAGE_REMINDERS_IN_TWO_HOURS
    }, {
        duration: 4 * i.default.Millis.HOUR,
        getLabel: () => r.default.Messages.MESSAGE_REMINDERS_IN_FOUR_HOURS
    }, {
        duration: i.default.Millis.DAY,
        getLabel: () => r.default.Messages.MESSAGE_REMINDERS_IN_ONE_DAY
    }, {
        duration: i.default.Millis.WEEK,
        getLabel: () => r.default.Messages.MESSAGE_REMINDERS_IN_ONE_WEEK
    }]
}