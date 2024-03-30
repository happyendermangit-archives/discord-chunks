function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isLinkTrusted: function() {
            return i
        }
    });
    var r = n("364612"),
        o = n("254093");

    function i(e) {
        return null != e.target && (0, o.isLinkTrusted)(e.target, null != e.title && "" !== e.title ? e.title : (0, r.astToString)(e.content))
    }
}