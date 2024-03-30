function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        },
        getEventException: function() {
            return a
        }
    });
    var r = n("898511"),
        o = n("89536");

    function i(e, t) {
        return u((0, r.useStateFromStoresArray)([o.default], function() {
            var e, n;
            return null !== (n = null === (e = o.default.getGuildScheduledEvent(t)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== n ? n : []
        }), e)
    }

    function a(e, t) {
        var n, r;
        return u(null !== (r = null === (n = o.default.getGuildScheduledEvent(t)) || void 0 === n ? void 0 : n.guild_scheduled_event_exceptions) && void 0 !== r ? r : [], e)
    }

    function u(e, t) {
        return null == e ? void 0 : e.find(function(e) {
            return e.event_exception_id === t
        })
    }
}