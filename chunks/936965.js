function(e, l, n) {
    "use strict";
    n.r(l), n.d(l, {
        default: function() {
            return m
        }
    }), n("222007");
    var t = n("37983"),
        s = n("884691"),
        a = n("77078"),
        i = n("322224"),
        u = n("832588"),
        o = n("745049"),
        r = n("782340"),
        d = n("505326");

    function c(e) {
        let {
            event: l,
            recurrenceId: n,
            guildId: c,
            onRsvp: m,
            ...v
        } = e, [p, E] = s.useState(u.ResponseOptions.SERIES), N = (0, u.getExistingRsvp)(l.id, null), h = (null == N ? void 0 : N.response) === o.GuildScheduledEventUserResponses.INTERESTED, C = h ? o.GuildScheduledEventUserResponses.UNINTERESTED : o.GuildScheduledEventUserResponses.INTERESTED, g = C === o.GuildScheduledEventUserResponses.INTERESTED ? r.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED : r.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED;
        return (0, t.jsx)(a.ConfirmModal, {
            ...v,
            header: g,
            confirmText: r.default.Messages.OK,
            cancelText: r.default.Messages.CANCEL,
            onConfirm: () => {
                p === u.ResponseOptions.SERIES ? i.default.updateRsvp(l.id, null, c, C) : i.default.updateRsvp(l.id, n, c, C), null == m || m(), v.onClose()
            },
            confirmButtonColor: a.Button.Colors.BRAND,
            children: (0, t.jsx)(a.RadioGroup, {
                className: d.responseOptions,
                value: p,
                options: (0, u.getResponseOptions)(),
                onChange: e => E(e.value)
            })
        })
    }

    function m(e, l, n, s) {
        (0, u.handleRsvp)({
            eventId: e,
            recurrenceId: l,
            guildId: n,
            updateRsvp: (l, t, s, a) => i.default.updateRsvp(e, t, n, a),
            openRsvpPicker: (e, l) => {
                (0, a.openModalLazy)(() => Promise.resolve(a => (0, t.jsx)(c, {
                    ...a,
                    event: e,
                    recurrenceId: l,
                    guildId: n,
                    onRsvp: s
                })))
            },
            onRsvp: s
        })
    }
}