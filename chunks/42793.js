function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InviteTypes: function() {
            return r.InviteTypes
        },
        isGuildScheduledEventInviteEmbed: function() {
            return a
        },
        isRoleSubscriptionInvite: function() {
            return o
        },
        isStageInviteEmbed: function() {
            return l
        },
        isStreamInvite: function() {
            return u
        },
        isEmbeddedApplicationInvite: function() {
            return d
        },
        getInviteType: function() {
            return c
        }
    });
    var i = n("398604"),
        s = n("233069"),
        r = n("91366");

    function a(e) {
        let t = e.guild_scheduled_event;
        return null != t && (0, i.isEventUpcoming)(t)
    }

    function o(e) {
        return e.target_type === r.InviteTargetTypes.ROLE_SUBSCRIPTIONS_PURCHASE
    }

    function l(e) {
        return null != e.channel && null != e.stage_instance
    }

    function u(e) {
        return e.target_type === r.InviteTargetTypes.STREAM && null != e.target_user
    }

    function d(e) {
        return e.target_type === r.InviteTargetTypes.EMBEDDED_APPLICATION
    }

    function c(e) {
        var t, n;
        if ("number" == typeof e.type) return e.type;
        if ((t = e).type === r.InviteTypes.GROUP_DM || null != t.channel && (0, s.isMultiUserDM)(t.channel.type)) return r.InviteTypes.GROUP_DM;
        return (n = e).type === r.InviteTypes.FRIEND || null == n.guild && null != n.inviter ? r.InviteTypes.FRIEND : r.InviteTypes.GUILD
    }
}