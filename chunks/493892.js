function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isSpam: function() {
            return o
        },
        isSpamSupported: function() {
            return a
        },
        isSpammer: function() {
            return s
        }
    });
    var i = n("594174"),
        r = n("981631");

    function a(e) {
        return void 0 !== e && e.type !== r.ChannelTypes.DM
    }

    function s(e) {
        var t, n;
        return null !== (n = null === (t = i.default.getUser(e)) || void 0 === t ? void 0 : t.hasFlag(r.UserFlags.SPAMMER)) && void 0 !== n && n
    }

    function o(e) {
        return s(e.author.id)
    }
}