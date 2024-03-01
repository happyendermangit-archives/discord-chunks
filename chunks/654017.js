function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isSpamSupported: function() {
            return s
        },
        isSpammer: function() {
            return l
        },
        isSpam: function() {
            return u
        }
    });
    var a = n("697218"),
        r = n("49111");

    function s(e) {
        return void 0 !== e && e.type !== r.ChannelTypes.DM
    }

    function l(e) {
        var t, n;
        return null !== (n = null === (t = a.default.getUser(e)) || void 0 === t ? void 0 : t.hasFlag(r.UserFlags.SPAMMER)) && void 0 !== n && n
    }

    function u(e) {
        return l(e.author.id)
    }
}