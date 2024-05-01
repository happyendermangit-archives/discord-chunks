function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getChannelFromEvent: function() {
            return a
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

    function a(e) {
        let t;
        let {
            entity_type: n,
            channel_id: a
        } = e;
        if (n in r.EntityChannelTypes && null != a) {
            var s;
            t = null !== (s = i.default.getChannel(e.channel_id)) && void 0 !== s ? s : void 0
        }
        return t
    }

    function s(e, t) {
        let n = null;
        return e === r.GuildScheduledEventEntityTypes.EXTERNAL && null != t && "location" in t && (n = t.location), n
    }

    function o(e) {
        let {
            entity_type: t,
            entity_metadata: n
        } = e;
        return s(t, n)
    }

    function l(e) {
        let {
            entityType: t,
            entityMetadata: n
        } = e;
        return s(t, n)
    }

    function u(e) {
        return e === r.GuildScheduledEventEntityTypes.VOICE || e === r.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? r.EntityChannelTypes[e] : void 0
    }
}