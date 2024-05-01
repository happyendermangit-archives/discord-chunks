function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("493683"),
        r = n("592125"),
        s = n("176505");

    function a(e) {
        if (e !== s.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return null;
        let t = r.default.getChannel(e);
        return null == t ? null : i.default.ensurePrivateChannel(t.recipients)
    }
}