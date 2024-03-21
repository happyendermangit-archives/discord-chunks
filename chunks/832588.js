function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getExistingRsvp: function() {
            return _
        },
        ResponseOptions: function() {
            return d
        },
        getResponseOptions: function() {
            return o
        },
        handleRsvp: function() {
            return y
        }
    });
    var l, d, i = n("271938"),
        u = n("398604"),
        r = n("397680"),
        a = n("466148"),
        E = n("822516"),
        c = n("745049"),
        s = n("782340");

    function _(e, t) {
        let n = i.default.getId();
        return u.default.getRsvp(e, t, n)
    }

    function o() {
        return [{
            name: s.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
            value: 0
        }, {
            name: s.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
            value: 1
        }]
    }

    function y(e) {
        let {
            eventId: t,
            recurrenceId: n,
            guildId: l,
            updateRsvp: d,
            openRsvpPicker: i,
            onRsvp: s,
            canRsvpToRecurrences: o = !0
        } = e, y = u.default.getGuildScheduledEvent(t);
        if (null == y) return;
        let v = (0, r.getEventException)(n, t),
            {
                startTime: p
            } = (0, a.getEventSchedule)(y, n),
            h = (null == y ? void 0 : y.scheduled_start_time) != null ? (0, E.getRecurrenceStatus)(v, p, new Date(null == y ? void 0 : y.scheduled_start_time)) : null,
            T = null != h && c.GuildScheduledEventStatusDone.has(h),
            S = o && !T ? null != n ? n : (0, E.getNextRecurrenceIdInEvent)(y) : null,
            D = _(y.id),
            I = _(y.id, S);
        null == S ? (d(t, null, l, null != D ? c.GuildScheduledEventUserResponses.UNINTERESTED : c.GuildScheduledEventUserResponses.INTERESTED), null == s || s()) : null != I ? (d(t, S, l, null != D ? c.GuildScheduledEventUserResponses.INTERESTED : c.GuildScheduledEventUserResponses.UNINTERESTED), null == s || s()) : i(y, S)
    }(l = d || (d = {}))[l.SERIES = 0] = "SERIES", l[l.RECURRENCE = 1] = "RECURRENCE"
}