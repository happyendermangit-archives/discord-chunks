function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("701488"),
        r = n("981631");

    function a(e) {
        return e.type === r.ActivityTypes.STREAMING && null != e.url && i.validStreamURL.test(e.url)
    }

    function s(e) {
        return null != e && (Array.isArray(e) ? e.some(a) : a(e))
    }
}