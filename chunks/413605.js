function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InviteTypes: function() {
            return a.InviteTypes
        },
        getInviteType: function() {
            return _
        },
        isEmbeddedApplicationInvite: function() {
            return d
        },
        isGuildScheduledEventInviteEmbed: function() {
            return s
        },
        isRoleSubscriptionInvite: function() {
            return o
        },
        isStageInviteEmbed: function() {
            return l
        },
        isStreamInvite: function() {
            return u
        }
    });
    var i = n("924301"),
        r = n("131704"),
        a = n("245335");

    function s(e) {
        let t = e.guild_scheduled_event;
        return null != t && (0, i.isEventUpcoming)(t)
    }

    function o(e) {
        return e.target_type === a.InviteTargetTypes.ROLE_SUBSCRIPTIONS_PURCHASE
    }

    function l(e) {
        return null != e.channel && null != e.stage_instance
    }

    function u(e) {
        return e.target_type === a.InviteTargetTypes.STREAM && null != e.target_user
    }

    function d(e) {
        return e.target_type === a.InviteTargetTypes.EMBEDDED_APPLICATION
    }

    function _(e) {
        var t, n;
        if ("number" == typeof e.type) return e.type;
        if ((t = e).type === a.InviteTypes.GROUP_DM || null != t.channel && (0, r.isMultiUserDM)(t.channel.type)) return a.InviteTypes.GROUP_DM;
        return (n = e).type === a.InviteTypes.FRIEND || null == n.guild && null != n.inviter ? a.InviteTypes.FRIEND : a.InviteTypes.GUILD
    }
}