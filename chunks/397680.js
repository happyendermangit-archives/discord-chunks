function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        },
        getEventException: function() {
            return a
        }
    });
    var u = n("446674"),
        r = n("398604");

    function l(e, t) {
        let n = (0, u.useStateFromStoresArray)([r.default], () => {
            var e, n;
            return null !== (n = null === (e = r.default.getGuildScheduledEvent(t)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== n ? n : []
        });
        return i(n, e)
    }

    function a(e, t) {
        var n, u;
        let l = null !== (u = null === (n = r.default.getGuildScheduledEvent(t)) || void 0 === n ? void 0 : n.guild_scheduled_event_exceptions) && void 0 !== u ? u : [];
        return i(l, e)
    }

    function i(e, t) {
        let n = null == e ? void 0 : e.find(e => e.event_exception_id === t);
        return n
    }
}