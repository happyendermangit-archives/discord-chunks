function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getChannelFromEvent: function() {
            return i
        },
        getChannelTypeFromEntity: function() {
            return l
        },
        getLocationFromEvent: function() {
            return u
        },
        getLocationFromEventData: function() {
            return s
        }
    });
    var r = n("935741"),
        o = n("713653");

    function i(e) {
        var t, n, i = e.entity_type,
            a = e.channel_id;
        return i in o.EntityChannelTypes && null != a && (t = null !== (n = r.default.getChannel(e.channel_id)) && void 0 !== n ? n : void 0), t
    }

    function a(e, t) {
        var n = null;
        return e === o.GuildScheduledEventEntityTypes.EXTERNAL && null != t && "location" in t && (n = t.location), n
    }

    function u(e) {
        return a(e.entity_type, e.entity_metadata)
    }

    function s(e) {
        return a(e.entityType, e.entityMetadata)
    }

    function l(e) {
        return e === o.GuildScheduledEventEntityTypes.VOICE || e === o.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? o.EntityChannelTypes[e] : void 0
    }
}