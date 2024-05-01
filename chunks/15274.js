function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openEndEventModal: function() {
            return d
        },
        openGuildEventDetails: function() {
            return l
        },
        transitionToEventDetailsFromInvite: function() {
            return u
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("952265"),
        a = n("749210"),
        s = n("981631"),
        o = n("602091");

    function l(e) {
        let {
            eventId: t,
            parentGuildId: a,
            recurrenceId: s
        } = e;
        (0, r.openModalLazy)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("48375"), n.e("95393"), n.e("14262"), n.e("22347"), n.e("66993")]).then(n.bind(n, "697849"));
            return n => (0, i.jsx)(e, {
                guildScheduledEventId: t,
                parentGuildId: a,
                initialRecurrenceId: s,
                ...n
            })
        })
    }
    async function u(e, t) {
        let {
            guild_id: n
        } = e;
        await a.default.transitionToGuildSync(n, t), l({
            eventId: e.id,
            event: e
        })
    }

    function d(e, t) {
        (0, r.openModalLazy)(async () => {
            let {
                default: t
            } = await Promise.all([n.e("99387"), n.e("14262"), n.e("21395")]).then(n.bind(n, "312757"));
            return n => (0, i.jsx)(t, {
                ...n,
                channel: e
            })
        }, {
            contextKey: t === s.AppContext.POPOUT ? o.POPOUT_MODAL_CONTEXT : o.DEFAULT_MODAL_CONTEXT
        })
    }
}