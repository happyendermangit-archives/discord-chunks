function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        },
        getEventException: function() {
            return s
        }
    });
    var i = n("442837"),
        r = n("924301");

    function a(e, t) {
        return o((0, i.useStateFromStoresArray)([r.default], () => {
            var e, n;
            return null !== (n = null === (e = r.default.getGuildScheduledEvent(t)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== n ? n : []
        }), e)
    }

    function s(e, t) {
        var n, i;
        return o(null !== (i = null === (n = r.default.getGuildScheduledEvent(t)) || void 0 === n ? void 0 : n.guild_scheduled_event_exceptions) && void 0 !== i ? i : [], e)
    }

    function o(e, t) {
        return null == e ? void 0 : e.find(e => e.event_exception_id === t)
    }
}