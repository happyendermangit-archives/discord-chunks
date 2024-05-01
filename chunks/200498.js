function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canLurkerListen: function() {
            return S
        },
        isEmptyOverwrite: function() {
            return I
        },
        removeModeratorOverwrite: function() {
            return E
        },
        useCanModerateRequestToSpeak: function() {
            return f
        },
        useCanUpdateStageChannelModerators: function() {
            return T
        }
    });
    var i = n("149765"),
        r = n("442837"),
        a = n("41776");
    n("314897");
    var s = n("592125"),
        o = n("430824"),
        l = n("496675"),
        u = n("700785"),
        d = n("146085"),
        _ = n("427679"),
        c = n("981631");

    function E(e, t, n) {
        var r, a;
        let s = null == n ? void 0 : n.permissionOverwrites[e];
        return {
            id: e,
            type: t,
            deny: null !== (r = null == s ? void 0 : s.deny) && void 0 !== r ? r : u.NONE,
            allow: i.remove(null !== (a = null == s ? void 0 : s.allow) && void 0 !== a ? a : u.NONE, d.MODERATE_STAGE_CHANNEL_PERMISSIONS)
        }
    }

    function I(e) {
        let {
            allow: t,
            deny: n
        } = e;
        return i.equals(t, u.NONE) && i.equals(n, u.NONE)
    }

    function T(e) {
        return (0, r.useStateFromStores)([l.default, o.default, s.default], () => {
            let t = s.default.getChannel(e),
                n = o.default.getGuild(null == t ? void 0 : t.getGuildId());
            return !!(l.default.can(c.Permissions.ADMINISTRATOR, n) || l.default.can(c.Permissions.MANAGE_ROLES, t, void 0, void 0, !0) || l.default.can(d.UPDATE_STAGE_CHANNEL_MODERATOR_PERMISSIONS, t)) || !1
        }, [e])
    }

    function f(e) {
        return (0, r.useStateFromStores)([s.default, l.default], () => null != e && l.default.can(c.Permissions.MUTE_MEMBERS, s.default.getChannel(e)), [e])
    }

    function S(e) {
        return !!(null != e && e.isGuildStageVoice() && a.default.isLurking(e.guild_id) && _.default.isPublic(e.id)) && l.default.can(d.JOIN_VOCAL_CHANNEL_PERMISSIONS, e)
    }
}