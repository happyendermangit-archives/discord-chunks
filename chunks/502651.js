function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("954016"),
        l = n("49111");

    function a(e) {
        return e.type === l.ActivityTypes.STREAMING && null != e.url && i.validStreamURL.test(e.url)
    }

    function s(e) {
        return null != e && (Array.isArray(e) ? e.some(a) : a(e))
    }
}