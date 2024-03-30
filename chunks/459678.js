function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InviteTypes: function() {
            return i.InviteTypes
        },
        getInviteType: function() {
            return f
        },
        isEmbeddedApplicationInvite: function() {
            return c
        },
        isGuildScheduledEventInviteEmbed: function() {
            return a
        },
        isRoleSubscriptionInvite: function() {
            return u
        },
        isStageInviteEmbed: function() {
            return s
        },
        isStreamInvite: function() {
            return l
        }
    });
    var r = n("89536"),
        o = n("569492"),
        i = n("551941");

    function a(e) {
        var t = e.guild_scheduled_event;
        return null != t && (0, r.isEventUpcoming)(t)
    }

    function u(e) {
        return e.target_type === i.InviteTargetTypes.ROLE_SUBSCRIPTIONS_PURCHASE
    }

    function s(e) {
        return null != e.channel && null != e.stage_instance
    }

    function l(e) {
        return e.target_type === i.InviteTargetTypes.STREAM && null != e.target_user
    }

    function c(e) {
        return e.target_type === i.InviteTargetTypes.EMBEDDED_APPLICATION
    }

    function f(e) {
        var t, n;
        if ("number" == typeof e.type) return e.type;
        if ((t = e).type === i.InviteTypes.GROUP_DM || null != t.channel && (0, o.isMultiUserDM)(t.channel.type)) return i.InviteTypes.GROUP_DM;
        return (n = e).type === i.InviteTypes.FRIEND || null == n.guild && null != n.inviter ? i.InviteTypes.FRIEND : i.InviteTypes.GUILD
    }
}