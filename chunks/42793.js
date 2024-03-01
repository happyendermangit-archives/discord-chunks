function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InviteTypes: function() {
            return l.InviteTypes
        },
        isGuildScheduledEventInviteEmbed: function() {
            return u
        },
        isRoleSubscriptionInvite: function() {
            return a
        },
        isStageInviteEmbed: function() {
            return o
        },
        isStreamInvite: function() {
            return s
        },
        isEmbeddedApplicationInvite: function() {
            return d
        },
        getInviteType: function() {
            return E
        }
    });
    var r = n("398604"),
        i = n("233069"),
        l = n("91366");

    function u(e) {
        let t = e.guild_scheduled_event;
        return null != t && (0, r.isEventUpcoming)(t)
    }

    function a(e) {
        return e.target_type === l.InviteTargetTypes.ROLE_SUBSCRIPTIONS_PURCHASE
    }

    function o(e) {
        return null != e.channel && null != e.stage_instance
    }

    function s(e) {
        return e.target_type === l.InviteTargetTypes.STREAM && null != e.target_user
    }

    function d(e) {
        return e.target_type === l.InviteTargetTypes.EMBEDDED_APPLICATION
    }

    function E(e) {
        var t, n;
        if ("number" == typeof e.type) return e.type;
        if ((t = e).type === l.InviteTypes.GROUP_DM || null != t.channel && (0, i.isMultiUserDM)(t.channel.type)) return l.InviteTypes.GROUP_DM;
        return (n = e).type === l.InviteTypes.FRIEND || null == n.guild && null != n.inviter ? l.InviteTypes.FRIEND : l.InviteTypes.GUILD
    }
}