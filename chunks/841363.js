function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getChannelFromEvent: function() {
            return i
        },
        getLocationFromEvent: function() {
            return r
        },
        getLocationFromEventData: function() {
            return a
        },
        getChannelTypeFromEntity: function() {
            return E
        }
    });
    var l = n("42203"),
        d = n("745049");

    function i(e) {
        let t;
        let {
            entity_type: n,
            channel_id: i
        } = e;
        if (n in d.EntityChannelTypes && null != i) {
            var u;
            t = null !== (u = l.default.getChannel(e.channel_id)) && void 0 !== u ? u : void 0
        }
        return t
    }

    function u(e, t) {
        let n = null;
        return e === d.GuildScheduledEventEntityTypes.EXTERNAL && null != t && "location" in t && (n = t.location), n
    }

    function r(e) {
        let {
            entity_type: t,
            entity_metadata: n
        } = e;
        return u(t, n)
    }

    function a(e) {
        let {
            entityType: t,
            entityMetadata: n
        } = e;
        return u(t, n)
    }

    function E(e) {
        return e === d.GuildScheduledEventEntityTypes.VOICE || e === d.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? d.EntityChannelTypes[e] : void 0
    }
}