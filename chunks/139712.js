function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return E
        }
    }), s("47120");
    var n = s("735250"),
        l = s("470079"),
        a = s("481060"),
        r = s("482241"),
        u = s("124165"),
        i = s("765305"),
        d = s("689938"),
        c = s("779292");

    function o(e) {
        let {
            event: t,
            recurrenceId: s,
            guildId: o,
            onRsvp: E,
            ...f
        } = e, [T, v] = l.useState(u.ResponseOptions.SERIES), N = (0, u.getExistingRsvp)(t.id, null), S = (null == N ? void 0 : N.response) === i.GuildScheduledEventUserResponses.INTERESTED ? i.GuildScheduledEventUserResponses.UNINTERESTED : i.GuildScheduledEventUserResponses.INTERESTED, h = S === i.GuildScheduledEventUserResponses.INTERESTED ? d.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED : d.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED;
        return (0, n.jsx)(a.ConfirmModal, {
            ...f,
            header: h,
            confirmText: d.default.Messages.OK,
            cancelText: d.default.Messages.CANCEL,
            onConfirm: () => {
                T === u.ResponseOptions.SERIES ? r.default.updateRsvp(t.id, null, o, S) : r.default.updateRsvp(t.id, s, o, S), null == E || E(), f.onClose()
            },
            confirmButtonColor: a.Button.Colors.BRAND,
            children: (0, n.jsx)(a.RadioGroup, {
                className: c.responseOptions,
                value: T,
                options: (0, u.getResponseOptions)(),
                onChange: e => v(e.value)
            })
        })
    }

    function E(e, t, s, l) {
        (0, u.handleRsvp)({
            eventId: e,
            recurrenceId: t,
            guildId: s,
            updateRsvp: (t, n, l, a) => r.default.updateRsvp(e, n, s, a),
            openRsvpPicker: (e, t) => {
                (0, a.openModalLazy)(() => Promise.resolve(a => (0, n.jsx)(o, {
                    ...a,
                    event: e,
                    recurrenceId: t,
                    guildId: s,
                    onRsvp: l
                })))
            },
            onRsvp: l
        })
    }
}