function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("47120");
    var s = n("735250"),
        l = n("470079"),
        a = n("481060"),
        r = n("482241"),
        u = n("124165"),
        i = n("765305"),
        c = n("689938"),
        d = n("288186");

    function o(e) {
        let {
            event: t,
            recurrenceId: n,
            guildId: o,
            onRsvp: E,
            ...f
        } = e, [T, v] = l.useState(u.ResponseOptions.SERIES), N = (0, u.getExistingRsvp)(t.id, null), _ = (null == N ? void 0 : N.response) === i.GuildScheduledEventUserResponses.INTERESTED ? i.GuildScheduledEventUserResponses.UNINTERESTED : i.GuildScheduledEventUserResponses.INTERESTED, S = _ === i.GuildScheduledEventUserResponses.INTERESTED ? c.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED : c.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED;
        return (0, s.jsx)(a.ConfirmModal, {
            ...f,
            header: S,
            confirmText: c.default.Messages.OK,
            cancelText: c.default.Messages.CANCEL,
            onConfirm: () => {
                T === u.ResponseOptions.SERIES ? r.default.updateRsvp(t.id, null, o, _) : r.default.updateRsvp(t.id, n, o, _), null == E || E(), f.onClose()
            },
            confirmButtonColor: a.Button.Colors.BRAND,
            children: (0, s.jsx)(a.RadioGroup, {
                className: d.responseOptions,
                value: T,
                options: (0, u.getResponseOptions)(),
                onChange: e => v(e.value)
            })
        })
    }

    function E(e, t, n, l) {
        (0, u.handleRsvp)({
            eventId: e,
            recurrenceId: t,
            guildId: n,
            updateRsvp: (t, s, l, a) => r.default.updateRsvp(e, s, n, a),
            openRsvpPicker: (e, t) => {
                (0, a.openModalLazy)(() => Promise.resolve(a => (0, s.jsx)(o, {
                    ...a,
                    event: e,
                    recurrenceId: t,
                    guildId: n,
                    onRsvp: l
                })))
            },
            onRsvp: l
        })
    }
}