function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canLurkerListen: function() {
            return y
        },
        isEmptyOverwrite: function() {
            return E
        },
        removeModeratorOverwrite: function() {
            return _
        },
        useCanModerateRequestToSpeak: function() {
            return m
        },
        useCanUpdateStageChannelModerators: function() {
            return p
        }
    });
    var r = n("22287"),
        o = n("898511"),
        i = n("368995");
    n("217014");
    var a = n("935741"),
        u = n("306912"),
        s = n("29884"),
        l = n("359017"),
        c = n("353934"),
        f = n("487181"),
        d = n("281767");

    function _(e, t, n) {
        var o, i, a = null == n ? void 0 : n.permissionOverwrites[e];
        return {
            id: e,
            type: t,
            deny: null !== (o = null == a ? void 0 : a.deny) && void 0 !== o ? o : l.NONE,
            allow: r.remove(null !== (i = null == a ? void 0 : a.allow) && void 0 !== i ? i : l.NONE, c.MODERATE_STAGE_CHANNEL_PERMISSIONS)
        }
    }

    function E(e) {
        var t = e.allow,
            n = e.deny;
        return r.equals(t, l.NONE) && r.equals(n, l.NONE)
    }

    function p(e) {
        return (0, o.useStateFromStores)([s.default, u.default, a.default], function() {
            var t = a.default.getChannel(e),
                n = u.default.getGuild(null == t ? void 0 : t.getGuildId());
            return !!(s.default.can(d.Permissions.ADMINISTRATOR, n) || s.default.can(d.Permissions.MANAGE_ROLES, t, void 0, void 0, !0) || s.default.can(c.UPDATE_STAGE_CHANNEL_MODERATOR_PERMISSIONS, t)) || !1
        }, [e])
    }

    function m(e) {
        return (0, o.useStateFromStores)([a.default, s.default], function() {
            return null != e && s.default.can(d.Permissions.MUTE_MEMBERS, a.default.getChannel(e))
        }, [e])
    }

    function y(e) {
        return !!(null != e && e.isGuildStageVoice() && i.default.isLurking(e.guild_id) && f.default.isPublic(e.id)) && s.default.can(c.JOIN_VOCAL_CHANNEL_PERMISSIONS, e)
    }
}