function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getAutomodQuarantinedGuildMemberFlags: function() {
            return o
        },
        getAutomodQuarantinedProfileFlags: function() {
            return a
        },
        hasAutomodQuarantinedProfile: function() {
            return l
        }
    }), n("47120"), n("724458"), n("653041"), n("789020");
    var i = n("630388"),
        r = n("372897");
    let s = [r.GuildMemberFlags.AUTOMOD_QUARANTINED_BIO, r.GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME];

    function a(e) {
        return null == e ? new Set : new Set(s.reduce((t, n) => ((0, i.hasFlag)(null != e ? e : 0, n) && t.push(n), t), []))
    }

    function o(e) {
        return null == e ? new Set : a(e.flags)
    }

    function l(e) {
        return null != e && null != e.flags && s.some(t => {
            var n;
            return (0, i.hasFlag)(null !== (n = e.flags) && void 0 !== n ? n : 0, t)
        })
    }
}