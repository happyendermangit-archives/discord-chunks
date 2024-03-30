function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("997133"),
        o = n("281767");

    function i(e) {
        return e.type === o.ActivityTypes.STREAMING && null != e.url && r.validStreamURL.test(e.url)
    }

    function a(e) {
        return null != e && (Array.isArray(e) ? e.some(i) : i(e))
    }
}