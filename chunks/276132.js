function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ResponseOptions: function() {
            return o
        },
        getExistingRsvp: function() {
            return d
        },
        getResponseOptions: function() {
            return _
        },
        handleRsvp: function() {
            return E
        }
    });
    var r, o, i = n("217014"),
        a = n("89536"),
        u = n("592741"),
        s = n("622647"),
        l = n("888447"),
        c = n("713653"),
        f = n("941504");

    function d(e, t) {
        var n = i.default.getId();
        return a.default.getRsvp(e, t, n)
    }

    function _() {
        return [{
            name: f.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
            value: 0
        }, {
            name: f.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
            value: 1
        }]
    }

    function E(e) {
        var t = e.eventId,
            n = e.recurrenceId,
            r = e.guildId,
            o = e.updateRsvp,
            i = e.openRsvpPicker,
            f = e.onRsvp,
            _ = e.canRsvpToRecurrences,
            E = a.default.getGuildScheduledEvent(t);
        if (null != E) {
            var p = (0, u.getEventException)(n, t),
                m = (0, s.getEventSchedule)(E, n).startTime,
                y = (null == E ? void 0 : E.scheduled_start_time) != null ? (0, l.getRecurrenceStatus)(p, m, new Date(null == E ? void 0 : E.scheduled_start_time)) : null,
                I = null != y && c.GuildScheduledEventStatusDone.has(y),
                h = (void 0 === _ || _) && !I ? null != n ? n : (0, l.getNextRecurrenceIdInEvent)(E) : null,
                O = d(E.id),
                T = d(E.id, h);
            null == h ? (o(t, null, r, null != O ? c.GuildScheduledEventUserResponses.UNINTERESTED : c.GuildScheduledEventUserResponses.INTERESTED), null == f || f()) : null != T ? (o(t, h, r, null != O ? c.GuildScheduledEventUserResponses.INTERESTED : c.GuildScheduledEventUserResponses.UNINTERESTED), null == f || f()) : i(E, h)
        }
    }(r = o || (o = {}))[r.SERIES = 0] = "SERIES", r[r.RECURRENCE = 1] = "RECURRENCE"
}