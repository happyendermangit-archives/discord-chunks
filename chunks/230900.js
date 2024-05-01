function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getChannelFromEvent: function() {
            return s
        },
        getChannelTypeFromEntity: function() {
            return u
        },
        getLocationFromEvent: function() {
            return o
        },
        getLocationFromEventData: function() {
            return l
        }
    });
    var i = n("592125"),
        r = n("765305");

    function s(e) {
        let t;
        let {
            entity_type: n,
            channel_id: s
        } = e;
        if (n in r.EntityChannelTypes && null != s) {
            var a;
            t = null !== (a = i.default.getChannel(e.channel_id)) && void 0 !== a ? a : void 0
        }
        return t
    }

    function a(e, t) {
        let n = null;
        return e === r.GuildScheduledEventEntityTypes.EXTERNAL && null != t && "location" in t && (n = t.location), n
    }

    function o(e) {
        let {
            entity_type: t,
            entity_metadata: n
        } = e;
        return a(t, n)
    }

    function l(e) {
        let {
            entityType: t,
            entityMetadata: n
        } = e;
        return a(t, n)
    }

    function u(e) {
        return e === r.GuildScheduledEventEntityTypes.VOICE || e === r.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? r.EntityChannelTypes[e] : void 0
    }
}