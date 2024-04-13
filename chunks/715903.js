function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getAutomodQuarantinedGuildMemberFlags: function() {
            return u
        },
        getAutomodQuarantinedProfileFlags: function() {
            return l
        },
        hasAutomodQuarantinedProfile: function() {
            return d
        },
        useCurrentUserAutomodQuaratinedProfile: function() {
            return _
        }
    }), n("47120"), n("724458"), n("653041"), n("789020");
    var i = n("442837"),
        r = n("271383"),
        s = n("630388"),
        a = n("372897");
    let o = [a.GuildMemberFlags.AUTOMOD_QUARANTINED_BIO, a.GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME];

    function l(e) {
        return null == e ? new Set : new Set(o.reduce((t, n) => ((0, s.hasFlag)(null != e ? e : 0, n) && t.push(n), t), []))
    }

    function u(e) {
        return null == e ? new Set : l(e.flags)
    }

    function d(e) {
        return null != e && null != e.flags && o.some(t => {
            var n;
            return (0, s.hasFlag)(null !== (n = e.flags) && void 0 !== n ? n : 0, t)
        })
    }

    function _(e) {
        return (0, i.useStateFromStores)([r.default], () => null != e && d(r.default.getSelfMember(e)), [e])
    }
}