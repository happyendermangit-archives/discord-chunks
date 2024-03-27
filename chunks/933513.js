function(e, t, a) {
    "use strict";

    function d(e) {
        let t = null == e ? void 0 : e.activeElement;
        return ["INPUT", "TEXTAREA"].includes(null == t ? void 0 : t.tagName) || (null == t ? void 0 : t.isContentEditable)
    }
    a.r(t), a.d(t, {
        default: function() {
            return d
        }
    })
}