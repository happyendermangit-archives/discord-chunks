function(e, t, n) {
    "use strict";

    function a(e) {
        var t = null == e ? void 0 : e.activeElement;
        return ["INPUT", "TEXTAREA"].includes(null == t ? void 0 : t.tagName) || (null == t ? void 0 : t.isContentEditable)
    }
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    })
}