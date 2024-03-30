function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getAutomodQuarantinedGuildMemberFlags: function() {
            return u
        },
        getAutomodQuarantinedProfileFlags: function() {
            return a
        },
        hasAutomodQuarantinedProfile: function() {
            return s
        }
    });
    var r = n("947248"),
        o = n("844659"),
        i = [o.GuildMemberFlags.AUTOMOD_QUARANTINED_BIO, o.GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME];

    function a(e) {
        return null == e ? new Set : new Set(i.reduce(function(t, n) {
            return (0, r.hasFlag)(null != e ? e : 0, n) && t.push(n), t
        }, []))
    }

    function u(e) {
        return null == e ? new Set : a(e.flags)
    }

    function s(e) {
        return null != e && null != e.flags && i.some(function(t) {
            var n;
            return (0, r.hasFlag)(null !== (n = e.flags) && void 0 !== n ? n : 0, t)
        })
    }
}