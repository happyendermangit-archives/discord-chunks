function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        },
        isPrivateChannelWithEnabledActivities: function() {
            return a
        }
    });
    var i = n("399606"),
        r = n("592125");

    function s(e) {
        var t;
        let n = (0, i.useStateFromStores)([r.default], () => r.default.getChannel(e));
        return null !== (t = null == n ? void 0 : n.isPrivate()) && void 0 !== t && t
    }

    function a(e) {
        var t;
        if (null == e) return !1;
        let n = r.default.getChannel(e);
        return null !== (t = null == n ? void 0 : n.isPrivate()) && void 0 !== t && t
    }
}