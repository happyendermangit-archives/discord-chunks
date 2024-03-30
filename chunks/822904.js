function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        },
        isPrivateChannelWithEnabledActivities: function() {
            return a
        }
    });
    var r = n("37295"),
        o = n("935741");

    function i(e) {
        var t, n = (0, r.useStateFromStores)([o.default], function() {
            return o.default.getChannel(e)
        });
        return null !== (t = null == n ? void 0 : n.isPrivate()) && void 0 !== t && t
    }

    function a(e) {
        if (null == e) return !1;
        var t, n = o.default.getChannel(e);
        return null !== (t = null == n ? void 0 : n.isPrivate()) && void 0 !== t && t
    }
}