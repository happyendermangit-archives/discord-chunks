function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getChannelFromEvent: function() {
            return u
        },
        getLocationFromEvent: function() {
            return a
        },
        getLocationFromEventData: function() {
            return r
        },
        getChannelTypeFromEntity: function() {
            return E
        }
    });
    var l = n("42203"),
        d = n("745049");

    function u(e) {
        let t;
        let {
            entity_type: n,
            channel_id: u
        } = e;
        if (n in d.EntityChannelTypes && null != u) {
            var i;
            t = null !== (i = l.default.getChannel(e.channel_id)) && void 0 !== i ? i : void 0
        }
        return t
    }

    function i(e, t) {
        let n = null;
        return e === d.GuildScheduledEventEntityTypes.EXTERNAL && null != t && "location" in t && (n = t.location), n
    }

    function a(e) {
        let {
            entity_type: t,
            entity_metadata: n
        } = e;
        return i(t, n)
    }

    function r(e) {
        let {
            entityType: t,
            entityMetadata: n
        } = e;
        return i(t, n)
    }

    function E(e) {
        return e === d.GuildScheduledEventEntityTypes.VOICE || e === d.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? d.EntityChannelTypes[e] : void 0
    }
}