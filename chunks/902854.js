function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isSpam: function() {
            return u
        },
        isSpamSupported: function() {
            return i
        },
        isSpammer: function() {
            return a
        }
    });
    var r = n("208454"),
        o = n("281767");

    function i(e) {
        return void 0 !== e && e.type !== o.ChannelTypes.DM
    }

    function a(e) {
        var t, n;
        return null !== (n = null === (t = r.default.getUser(e)) || void 0 === t ? void 0 : t.hasFlag(o.UserFlags.SPAMMER)) && void 0 !== n && n
    }

    function u(e) {
        return a(e.author.id)
    }
}