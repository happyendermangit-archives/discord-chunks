function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getTagFromClan: function() {
            return r
        },
        isGuildAClan: function() {
            return s
        },
        isGuildAdoptedUserClanIdentity: function() {
            return a
        }
    });
    var i = n("981631");

    function r(e) {
        var t;
        return null != e && e.identityEnabled ? null !== (t = e.tag) && void 0 !== t ? t : null : null
    }

    function s(e) {
        return null != e && e.hasFeature(i.GuildFeatures.CLAN)
    }

    function a(e, t) {
        return null != e && null != t && null != t.identityGuildId && t.identityGuildId === e && !!t.identityEnabled || !1
    }
}