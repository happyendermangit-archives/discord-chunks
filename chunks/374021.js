function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openGuildEventDetails: function() {
            return l
        },
        transitionToEventDetailsFromInvite: function() {
            return u
        },
        openEndEventModal: function() {
            return d
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("551042"),
        r = n("851387"),
        a = n("49111"),
        o = n("625611");

    function l(e) {
        let {
            eventId: t,
            parentGuildId: r,
            recurrenceId: a
        } = e;
        (0, s.openModalLazy)(async () => {
            let {
                default: e
            } = await n.el("833843").then(n.bind(n, "833843"));
            return n => (0, i.jsx)(e, {
                guildScheduledEventId: t,
                parentGuildId: r,
                initialRecurrenceId: a,
                ...n
            })
        })
    }
    async function u(e, t) {
        let {
            guild_id: n
        } = e;
        await r.default.transitionToGuildSync(n, t), l({
            eventId: e.id,
            event: e
        })
    }

    function d(e, t) {
        (0, s.openModalLazy)(async () => {
            let {
                default: t
            } = await n.el("203811").then(n.bind(n, "203811"));
            return n => (0, i.jsx)(t, {
                ...n,
                channel: e
            })
        }, {
            contextKey: t === a.AppContext.POPOUT ? o.POPOUT_MODAL_CONTEXT : o.DEFAULT_MODAL_CONTEXT
        })
    }
}