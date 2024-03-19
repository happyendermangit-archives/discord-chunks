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
    var l, d, u = n("271938"),
        i = n("398604"),
        a = n("397680"),
        r = n("466148"),
        E = n("822516"),
        c = n("745049"),
        s = n("782340");

    function _(e, t) {
        let n = u.default.getId();
        return i.default.getRsvp(e, t, n)
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
            openRsvpPicker: u,
            onRsvp: s,
            canRsvpToRecurrences: o = !0
        } = e, y = i.default.getGuildScheduledEvent(t);
        if (null == y) return;
        let v = (0, a.getEventException)(n, t),
            {
                startTime: p
            } = (0, r.getEventSchedule)(y, n),
            h = (null == y ? void 0 : y.scheduled_start_time) != null ? (0, E.getRecurrenceStatus)(v, p, new Date(null == y ? void 0 : y.scheduled_start_time)) : null,
            S = null != h && c.GuildScheduledEventStatusDone.has(h),
            T = o && !S ? null != n ? n : (0, E.getNextRecurrenceIdInEvent)(y) : null,
            D = _(y.id),
            I = _(y.id, T);
        null == T ? (d(t, null, l, null != D ? c.GuildScheduledEventUserResponses.UNINTERESTED : c.GuildScheduledEventUserResponses.INTERESTED), null == s || s()) : null != I ? (d(t, T, l, null != D ? c.GuildScheduledEventUserResponses.INTERESTED : c.GuildScheduledEventUserResponses.UNINTERESTED), null == s || s()) : u(y, T)
    }(l = d || (d = {}))[l.SERIES = 0] = "SERIES", l[l.RECURRENCE = 1] = "RECURRENCE"
}