function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return a
        },
        isPrivateChannelWithEnabledActivities: function() {
            return u
        }
    });
    var n = i("65597"),
        l = i("42203");

    function a(e) {
        var t;
        let i = (0, n.default)([l.default], () => l.default.getChannel(e)),
            a = null !== (t = null == i ? void 0 : i.isPrivate()) && void 0 !== t && t;
        return a
    }

    function u(e) {
        var t;
        if (null == e) return !1;
        let i = l.default.getChannel(e),
            n = null !== (t = null == i ? void 0 : i.isPrivate()) && void 0 !== t && t;
        return n
    }
}