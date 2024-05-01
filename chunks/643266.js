function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("493683"),
        r = n("592125"),
        a = n("176505");

    function s(e) {
        if (e !== a.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return null;
        let t = r.default.getChannel(e);
        return null == t ? null : i.default.ensurePrivateChannel(t.recipients)
    }
}