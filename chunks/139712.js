function(e, l, t) {
    "use strict";
    t.r(l), t.d(l, {
        default: function() {
            return v
        }
    }), t("47120");
    var n = t("735250"),
        s = t("470079"),
        i = t("481060"),
        a = t("482241"),
        o = t("124165"),
        u = t("765305"),
        r = t("689938"),
        d = t("288186");

    function c(e) {
        let {
            event: l,
            recurrenceId: t,
            guildId: c,
            onRsvp: v,
            ...m
        } = e, [h, p] = s.useState(o.ResponseOptions.SERIES), f = (0, o.getExistingRsvp)(l.id, null), C = (null == f ? void 0 : f.response) === u.GuildScheduledEventUserResponses.INTERESTED ? u.GuildScheduledEventUserResponses.UNINTERESTED : u.GuildScheduledEventUserResponses.INTERESTED, N = C === u.GuildScheduledEventUserResponses.INTERESTED ? r.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED : r.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED;
        return (0, n.jsx)(i.ConfirmModal, {
            ...m,
            header: N,
            confirmText: r.default.Messages.OK,
            cancelText: r.default.Messages.CANCEL,
            onConfirm: () => {
                h === o.ResponseOptions.SERIES ? a.default.updateRsvp(l.id, null, c, C) : a.default.updateRsvp(l.id, t, c, C), null == v || v(), m.onClose()
            },
            confirmButtonColor: i.Button.Colors.BRAND,
            children: (0, n.jsx)(i.RadioGroup, {
                className: d.responseOptions,
                value: h,
                options: (0, o.getResponseOptions)(),
                onChange: e => p(e.value)
            })
        })
    }

    function v(e, l, t, s) {
        (0, o.handleRsvp)({
            eventId: e,
            recurrenceId: l,
            guildId: t,
            updateRsvp: (l, n, s, i) => a.default.updateRsvp(e, n, t, i),
            openRsvpPicker: (e, l) => {
                (0, i.openModalLazy)(() => Promise.resolve(i => (0, n.jsx)(c, {
                    ...i,
                    event: e,
                    recurrenceId: l,
                    guildId: t,
                    onRsvp: s
                })))
            },
            onRsvp: s
        })
    }
}