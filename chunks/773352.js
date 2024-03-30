function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isLinkTrusted: function() {
            return s
        }
    });
    var i = n("25209"),
        r = n("49012");

    function s(e) {
        return null != e.target && (0, r.isLinkTrusted)(e.target, null != e.title && "" !== e.title ? e.title : (0, i.astToString)(e.content))
    }
}