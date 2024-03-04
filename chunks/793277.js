function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("450911"),
        s = n("42203"),
        r = n("724210");

    function a(e) {
        if (e !== r.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return null;
        let t = s.default.getChannel(e);
        return null == t ? null : i.default.ensurePrivateChannel(t.recipients)
    }
}