function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isSpamSupported: function() {
            return a
        },
        isSpammer: function() {
            return u
        },
        isSpam: function() {
            return s
        }
    });
    var l = n("697218"),
        r = n("49111");

    function a(e) {
        return void 0 !== e && e.type !== r.ChannelTypes.DM
    }

    function u(e) {
        var t, n;
        return null !== (n = null === (t = l.default.getUser(e)) || void 0 === t ? void 0 : t.hasFlag(r.UserFlags.SPAMMER)) && void 0 !== n && n
    }

    function s(e) {
        return u(e.author.id)
    }
}