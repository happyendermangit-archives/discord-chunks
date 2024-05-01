function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("701488"),
        r = n("981631");

    function s(e) {
        return e.type === r.ActivityTypes.STREAMING && null != e.url && i.validStreamURL.test(e.url)
    }

    function a(e) {
        return null != e && (Array.isArray(e) ? e.some(s) : s(e))
    }
}