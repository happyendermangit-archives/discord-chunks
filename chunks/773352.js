function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isLinkTrusted: function() {
            return a
        }
    });
    var i = n("25209"),
        r = n("49012");

    function a(e) {
        return null != e.target && (0, r.isLinkTrusted)(e.target, null != e.title && "" !== e.title ? e.title : (0, i.astToString)(e.content))
    }
}