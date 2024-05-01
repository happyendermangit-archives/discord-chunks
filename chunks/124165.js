function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ResponseOptions: function() {
            return r
        },
        getExistingRsvp: function() {
            return c
        },
        getResponseOptions: function() {
            return E
        },
        handleRsvp: function() {
            return I
        }
    });
    var i, r, s = n("314897"),
        a = n("924301"),
        o = n("894017"),
        l = n("79874"),
        u = n("854698"),
        d = n("765305"),
        _ = n("689938");

    function c(e, t) {
        let n = s.default.getId();
        return a.default.getRsvp(e, t, n)
    }

    function E() {
        return [{
            name: _.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
            value: 0
        }, {
            name: _.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
            value: 1
        }]
    }

    function I(e) {
        let {
            eventId: t,
            recurrenceId: n,
            guildId: i,
            updateRsvp: r,
            openRsvpPicker: s,
            onRsvp: _
        } = e, E = a.default.getGuildScheduledEvent(t);
        if (null == E) return;
        let I = (0, o.getEventException)(n, t),
            {
                startTime: T
            } = (0, l.getEventSchedule)(E, n),
            f = (null == E ? void 0 : E.scheduled_start_time) != null ? (0, u.getRecurrenceStatus)(I, T, new Date(null == E ? void 0 : E.scheduled_start_time)) : null,
            S = null != f && d.GuildScheduledEventStatusDone.has(f) ? null : null != n ? n : (0, u.getNextRecurrenceIdInEvent)(E),
            h = c(E.id),
            A = c(E.id, S);
        null == S ? (r(t, null, i, null != h ? d.GuildScheduledEventUserResponses.UNINTERESTED : d.GuildScheduledEventUserResponses.INTERESTED), null == _ || _()) : null != A ? (r(t, S, i, null != h ? d.GuildScheduledEventUserResponses.INTERESTED : d.GuildScheduledEventUserResponses.UNINTERESTED), null == _ || _()) : s(E, S)
    }(i = r || (r = {}))[i.SERIES = 0] = "SERIES", i[i.RECURRENCE = 1] = "RECURRENCE"
}