function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        isLinkTrusted: function() {
            return i
        }
    });
    var n = r("933805"),
        l = r("128259");

    function i(e) {
        return null != e.target && (0, l.isLinkTrusted)(e.target, null != e.title && "" !== e.title ? e.title : (0, n.astToString)(e.content))
    }
}