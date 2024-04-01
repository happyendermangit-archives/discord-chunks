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
            onRsvp: _,
            canRsvpToRecurrences: E = !0
        } = e, I = a.default.getGuildScheduledEvent(t);
        if (null == I) return;
        let T = (0, o.getEventException)(n, t),
            {
                startTime: f
            } = (0, l.getEventSchedule)(I, n),
            S = (null == I ? void 0 : I.scheduled_start_time) != null ? (0, u.getRecurrenceStatus)(T, f, new Date(null == I ? void 0 : I.scheduled_start_time)) : null,
            A = null != S && d.GuildScheduledEventStatusDone.has(S),
            h = E && !A ? null != n ? n : (0, u.getNextRecurrenceIdInEvent)(I) : null,
            m = c(I.id),
            N = c(I.id, h);
        null == h ? (r(t, null, i, null != m ? d.GuildScheduledEventUserResponses.UNINTERESTED : d.GuildScheduledEventUserResponses.INTERESTED), null == _ || _()) : null != N ? (r(t, h, i, null != m ? d.GuildScheduledEventUserResponses.INTERESTED : d.GuildScheduledEventUserResponses.UNINTERESTED), null == _ || _()) : s(I, h)
    }(i = r || (r = {}))[i.SERIES = 0] = "SERIES", i[i.RECURRENCE = 1] = "RECURRENCE"
}