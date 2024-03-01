function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getExistingRsvp: function() {
            return E
        },
        ResponseOptions: function() {
            return l
        },
        getResponseOptions: function() {
            return s
        },
        handleRsvp: function() {
            return o
        }
    });
    var u, l, r = n("271938"),
        d = n("398604"),
        i = n("822516"),
        a = n("745049"),
        c = n("782340");

    function E(e, t) {
        let n = r.default.getId();
        return d.default.getRsvp(e, t, n)
    }

    function s() {
        return [{
            name: c.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
            value: 0
        }, {
            name: c.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
            value: 1
        }]
    }

    function o(e) {
        let {
            eventId: t,
            recurrenceId: n,
            guildId: u,
            updateRsvp: l,
            openRsvpPicker: r,
            onRsvp: c,
            canRsvpToRecurrences: s = !0
        } = e, o = d.default.getGuildScheduledEvent(t);
        if (null == o) return;
        let _ = s ? null != n ? n : (0, i.getNextRecurrenceIdInEvent)(o) : null,
            y = E(o.id),
            R = E(o.id, _);
        null == _ ? (l(t, null, u, null != y ? a.GuildScheduledEventUserResponses.UNINTERESTED : a.GuildScheduledEventUserResponses.INTERESTED), null == c || c()) : null != R ? (l(t, _, u, null != y ? a.GuildScheduledEventUserResponses.INTERESTED : a.GuildScheduledEventUserResponses.UNINTERESTED), null == c || c()) : r(o, _)
    }(u = l || (l = {}))[u.SERIES = 0] = "SERIES", u[u.RECURRENCE = 1] = "RECURRENCE"
}