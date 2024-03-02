function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        },
        getEventException: function() {
            return r
        }
    });
    var i = n("446674"),
        l = n("398604");

    function s(e, t) {
        let n = (0, i.useStateFromStoresArray)([l.default], () => {
            var e, n;
            return null !== (n = null === (e = l.default.getGuildScheduledEvent(t)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== n ? n : []
        });
        return a(n, e)
    }

    function r(e, t) {
        var n, i;
        let s = null !== (i = null === (n = l.default.getGuildScheduledEvent(t)) || void 0 === n ? void 0 : n.guild_scheduled_event_exceptions) && void 0 !== i ? i : [];
        return a(s, e)
    }

    function a(e, t) {
        let n = null == e ? void 0 : e.find(e => e.event_exception_id === t);
        return n
    }
}