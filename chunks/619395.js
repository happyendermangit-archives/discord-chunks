function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        removeModeratorOverwrite: function() {
            return f
        },
        isEmptyOverwrite: function() {
            return E
        },
        useCanUpdateStageChannelModerators: function() {
            return h
        },
        useCanModerateRequestToSpeak: function() {
            return g
        },
        canLurkerListen: function() {
            return m
        }
    });
    var i = n("316693"),
        s = n("446674"),
        r = n("267567");
    n("271938");
    var a = n("42203"),
        o = n("305961"),
        l = n("957255"),
        u = n("991170"),
        d = n("923510"),
        c = n("834052"),
        _ = n("49111");

    function f(e, t, n) {
        var s, r;
        let a = null == n ? void 0 : n.permissionOverwrites[e];
        return {
            id: e,
            type: t,
            deny: null !== (s = null == a ? void 0 : a.deny) && void 0 !== s ? s : u.NONE,
            allow: i.remove(null !== (r = null == a ? void 0 : a.allow) && void 0 !== r ? r : u.NONE, d.MODERATE_STAGE_CHANNEL_PERMISSIONS)
        }
    }

    function E(e) {
        let {
            allow: t,
            deny: n
        } = e;
        return i.equals(t, u.NONE) && i.equals(n, u.NONE)
    }

    function h(e) {
        return (0, s.useStateFromStores)([l.default, o.default, a.default], () => {
            let t = a.default.getChannel(e),
                n = o.default.getGuild(null == t ? void 0 : t.getGuildId());
            return !!(l.default.can(_.Permissions.ADMINISTRATOR, n) || l.default.can(_.Permissions.MANAGE_ROLES, t, void 0, void 0, !0) || l.default.can(d.UPDATE_STAGE_CHANNEL_MODERATOR_PERMISSIONS, t)) || !1
        }, [e])
    }

    function g(e) {
        return (0, s.useStateFromStores)([a.default, l.default], () => null != e && l.default.can(_.Permissions.MUTE_MEMBERS, a.default.getChannel(e)), [e])
    }

    function m(e) {
        return !!(null != e && e.isGuildStageVoice() && r.default.isLurking(e.guild_id) && c.default.isPublic(e.id)) && l.default.can(d.JOIN_VOCAL_CHANNEL_PERMISSIONS, e)
    }
}