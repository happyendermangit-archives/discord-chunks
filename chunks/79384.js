function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("651820"),
        o = n("935741"),
        i = n("928204");

    function a(e) {
        if (e !== i.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return null;
        var t = o.default.getChannel(e);
        return null == t ? null : r.default.ensurePrivateChannel(t.recipients)
    }
}